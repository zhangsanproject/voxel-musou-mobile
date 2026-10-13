// Touch navigation for menu screens (title, select, pause).
// Polls the left virtual joystick and converts vertical movement into menu nav callbacks.
// Active between start() and stop(); the joystick itself is always visible on touch devices.

const THRESHOLD = 0.45;     // joystick deflection to trigger a move
const REPEAT_FIRST = 350;   // ms before first repeat
const REPEAT_REST = 120;    // ms between subsequent repeats

export function createTouchNav(joysticks, cb) {
  let active = false, raf = 0;
  let lastDir = 0, nextRepeat = 0;

  function poll(now) {
    if (!active) return;
    raf = requestAnimationFrame(poll);
    const m = joysticks.move();
    // Vertical axis: up = negative y = move -1, down = positive y = move +1
    const dir = m.y < -THRESHOLD ? -1 : m.y > THRESHOLD ? 1 : 0;
    if (!dir) { lastDir = 0; return; }
    if (dir !== lastDir) {
      lastDir = dir;
      nextRepeat = now + REPEAT_FIRST;
      cb.move(dir);
    } else if (now >= nextRepeat) {
      nextRepeat = now + REPEAT_REST;
      cb.move(dir);
    }
  }

  return {
    start() {
      if (active) return;
      active = true; lastDir = 0; nextRepeat = 0;
      raf = requestAnimationFrame(poll);
    },
    stop() {
      active = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    },
  };
}
