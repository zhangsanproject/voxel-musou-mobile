// Runtime quality degradation manager for mobile.
// Monitors EMA frame time and steps down through 7 quality levels when sustained over-budget.
// Only degrades (never upgrades) to prevent oscillation — same strategy as post.js's existing auto-MSAA.
// Levels:
//   7: full effects + MSAA 4×
//   6: full effects + MSAA 2×
//   5: skip god rays + MSAA 2×
//   4: skip god rays + chromatic aberration + MSAA off
//   3: simplified bloom + above
//   2: 75% render resolution + above
//   1: 50% render resolution + above

const BUDGET = 18;          // ms target (~55 fps, headroom below 16.67)
const SLOW_WINDOW = 150;    // frames of sustained over-budget before stepping down (~2.5s)
const EMA_ALPHA = 0.04;     // smoothing factor

let level = 7;
let ema = 16.7;
let slowCount = 0;
let locked = false;         // if true, never auto-degrade (?hq mode)

export function initQuality({ hq = false, startLevel } = {}) {
  locked = hq;
  level = startLevel ?? 7;
  ema = 16.7;
  slowCount = 0;
}

/** Call once per render frame with the frame's delta time (ms). Steps down level when needed. */
export function tickQuality(dtMs) {
  if (locked || level <= 1) return;
  if (dtMs > 250) return;               // ignore long stalls (tab switches, etc.)
  ema += (dtMs - ema) * EMA_ALPHA;
  slowCount = ema > BUDGET ? slowCount + 1 : 0;
  if (slowCount >= SLOW_WINDOW) {
    level = Math.max(1, level - 1);
    slowCount = 0;
    ema = 16.7;
  }
}

export function qualityLevel() { return level; }

/** Whether a given feature should be enabled at the current quality level. */
export function hasRays()    { return level >= 5; }
export function hasCA()      { return level >= 4; }
export function hasStreak()  { return level >= 4; }
export function hasDOF()     { return level >= 3; }
export function hasGrain()   { return level >= 3; }
export function fullBloom()  { return level >= 3; }

/** Render scale factor (1.0 = full, 0.75 = 75%, 0.5 = 50%). */
export function renderScale() {
  if (level >= 3) return 1.0;
  if (level === 2) return 0.75;
  return 0.5;    // level 1
}

/** MSAA samples for the current level. */
export function msaaSamples() {
  if (level >= 7) return 4;
  if (level >= 5) return 2;
  return 0;
}
