// Device detection, GPU tier classification and orientation for mobile adaptation.
// Exports: isMobile, gpuTier ('high'|'mid'|'low'), isLandscape, getEnemyCap(), touchSupported.
// gpuTier is set once at boot (classify()) and stays fixed for the session.

// Guard: these modules are also imported by Node.js test scripts (no window/navigator)
const hasDOM = typeof window !== 'undefined';

// Mobile detection: UA + coarse pointer (excludes touchscreen laptops like Surface with a mouse)
const uaMobile = hasDOM && /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
const coarsePointer = hasDOM && typeof matchMedia === 'function' && matchMedia('(pointer: coarse)').matches;
export const isMobile = uaMobile || (coarsePointer && 'ontouchstart' in window && navigator.maxTouchPoints > 1);

export const touchSupported = hasDOM && ('ontouchstart' in window || navigator.maxTouchPoints > 0);

// High-end GPU patterns (A15+/Snapdragon 8 Gen1+): Adreno 7xx, Apple M1/M2, Mali-G710+
const HIGH_RE = /adreno.(7[1-9]\d|[89]\d\d)|apple.(m[1-4]|a1[5-9]|a[2-9]\d)|mali.g(7[1-9]\d|[89]\d\d)|xclipse.(9[2-9]\d)|rdna.[3-9]/i;
// Mid-range (A12/Snapdragon 7 series): Adreno 6xx, Apple A12-A14, Mali-G7x
const MID_RE  = /adreno.(6[1-9]\d|7[0]\d)|apple.(a1[2-4])|mali.g(5[1-9]\d|7[0-9]\d)|apple.gpu/i;

let _tier = null;

/** Classify GPU tier from WebGL renderer string. Call once after the renderer is created. */
export function classify(renderer) {
  if (_tier) return _tier;
  let gpu = '';
  try {
    const gl = renderer.getContext();
    gpu = gl.getParameter(gl.RENDERER) || '';
    // Also try the unmasked renderer for more detail
    const ext = gl.getExtension('WEBGL_debug_renderer_info');
    if (ext) gpu = gl.getParameter(ext.UNMASKED_RENDERER_WEBGL) || gpu;
  } catch { /* no WebGL context yet */ }

  if (!isMobile) { _tier = 'high'; return _tier; }
  if (HIGH_RE.test(gpu)) _tier = 'high';
  else if (MID_RE.test(gpu)) _tier = 'mid';
  else _tier = 'low';
  return _tier;
}

/** Current GPU tier (lazy-classified on first read if classify() wasn't called). */
export function gpuTier() {
  return _tier || 'mid';   // default to mid before classification
}

/** Enemy count cap by tier. URL param ?enemies=N can override. */
export function getEnemyCap() {
  return { high: 200, mid: 120, low: 60 }[gpuTier()];
}

/** Whether the viewport is currently landscape. */
export function isLandscape() {
  return hasDOM && innerWidth > innerHeight;
}

/** Whether the device supports screen orientation lock. */
export function canLockOrientation() {
  return hasDOM && !!(screen.orientation && screen.orientation.lock);
}

/** Try to lock to landscape and request fullscreen. Silently fails on unsupported browsers. */
export function lockLandscape() {
  if (!hasDOM) return;
  requestFullscreen();
  if (!canLockOrientation()) return;
  try {
    const type = screen.orientation.type;
    const target = type.includes('portrait') ? 'landscape' : type;
    screen.orientation.lock(target).catch(() => {});
  } catch { /* unsupported */ }
}

/** Request fullscreen. Must be called from a user gesture on iOS. */
export function requestFullscreen() {
  if (!hasDOM) return;
  const el = document.documentElement;
  if (el.requestFullscreen) el.requestFullscreen().catch(() => {});
  else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();   // Safari iOS
}

/** Whether the page is currently in fullscreen. */
export function isFullscreen() {
  return hasDOM && !!(document.fullscreenElement || document.webkitFullscreenElement);
}
