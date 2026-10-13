// Touch input for mobile: left virtual joystick (movement) + swipe-to-look (camera).
// Left joystick: bottom-left, movement control.
// Swipe-to-look: drag anywhere on the screen (excluding buttons/joystick) to rotate the camera.
// No right joystick — the right thumb stays on action buttons.

const DEAD_L = 0.15;
const TRAVEL_L = 50;
// Swipe look sensitivity: px of drag → radians of camera rotation
const LOOK_SENSITIVITY = 0.004;

function createJoystick({ size = 130, thumbSize = 56, travel = 50, dead = 0.15 }) {
  const root = document.createElement('div');
  root.className = 'touch-joy touch-joy-left';
  root.innerHTML = `<div class="touch-joy-base" style="width:${size}px;height:${size}px">
    <div class="touch-joy-thumb" style="width:${thumbSize}px;height:${thumbSize}px"></div></div>`;

  const base = root.querySelector('.touch-joy-base');
  const thumb = root.querySelector('.touch-joy-thumb');
  let touchId = null;
  let cx = 0, cy = 0;
  let nx = 0, ny = 0;

  function onStart(e) {
    if (touchId !== null) return;
    const t = e.changedTouches[0];
    touchId = t.identifier;
    const rect = root.getBoundingClientRect();
    cx = rect.left + rect.width / 2;
    cy = rect.top + rect.height / 2;
    base.style.opacity = '1';
    update(t);
  }

  function update(t) {
    const dx = t.clientX - cx, dy = t.clientY - cy;
    const dist = Math.hypot(dx, dy);
    const clamped = Math.min(dist, travel);
    const angle = Math.atan2(dy, dx);
    const tx = Math.cos(angle) * clamped, ty = Math.sin(angle) * clamped;
    thumb.style.transform = `translate(${tx}px, ${ty}px)`;

    const raw = clamped / travel;
    if (raw < dead) { nx = 0; ny = 0; return; }
    const k = ((raw - dead) / (1 - dead)) ** 2;
    nx = Math.cos(angle) * k;
    ny = Math.sin(angle) * k;
  }

  function onMove(e) {
    if (touchId === null) return;
    for (const t of e.changedTouches) {
      if (t.identifier === touchId) { update(t); break; }
    }
  }

  function onEnd(e) {
    for (const t of e.changedTouches) {
      if (t.identifier === touchId) {
        touchId = null;
        nx = 0; ny = 0;
        thumb.style.transform = 'translate(0px, 0px)';
        base.style.opacity = '0.6';
        break;
      }
    }
  }

  root.addEventListener('touchstart', (e) => { e.preventDefault(); onStart(e); }, { passive: false });
  root.addEventListener('touchmove', onMove, { passive: true });
  root.addEventListener('touchend', onEnd, { passive: true });
  root.addEventListener('touchcancel', onEnd, { passive: true });

  return {
    el: root,
    read() { return { x: nx, y: ny }; },
    active() { return touchId !== null; },
    show() { root.style.display = ''; },
    hide() { root.style.display = 'none'; nx = 0; ny = 0; touchId = null;
      thumb.style.transform = 'translate(0px, 0px)'; },
    destroy() { root.remove(); },
  };
}

/**
 * Create touch controls: left joystick + swipe-to-look on the canvas.
 * The look area covers the full screen but ignores touches that land on
 * the joystick, action buttons, or other UI elements (pointer-events: none on container,
 * auto on children).
 */
export function createTouchJoysticks(container) {
  const left = createJoystick({ size: 130, thumbSize: 56, travel: TRAVEL_L, dead: DEAD_L });
  container.appendChild(left.el);

  // Swipe-to-look: track a single finger dragging on the screen
  let lookTouchId = null;
  let lastX = 0, lastY = 0;
  let lookDx = 0, lookDy = 0;   // accumulated delta since last read

  // Listen on the canvas (the game surface), not the container — avoids catching
  // touches on HUD buttons. The canvas has touch-action: none already.
  const canvas = document.getElementById('c');

  canvas.addEventListener('touchstart', (e) => {
    // Only start look if no other look finger is active
    if (lookTouchId !== null) return;
    const t = e.changedTouches[0];
    // Ignore if the touch is on the left joystick zone (left 25% + bottom 40%)
    if (t.clientX < innerWidth * 0.25 && t.clientY > innerHeight * 0.5) return;
    // Ignore if on the right button zone (right 25% + bottom 40%)
    if (t.clientX > innerWidth * 0.70 && t.clientY > innerHeight * 0.5) return;
    lookTouchId = t.identifier;
    lastX = t.clientX;
    lastY = t.clientY;
  }, { passive: true });

  canvas.addEventListener('touchmove', (e) => {
    if (lookTouchId === null) return;
    for (const t of e.changedTouches) {
      if (t.identifier === lookTouchId) {
        lookDx += t.clientX - lastX;
        lookDy += t.clientY - lastY;
        lastX = t.clientX;
        lastY = t.clientY;
        break;
      }
    }
  }, { passive: true });

  const endLook = (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === lookTouchId) {
        lookTouchId = null;
        break;
      }
    }
  };
  canvas.addEventListener('touchend', endLook, { passive: true });
  canvas.addEventListener('touchcancel', endLook, { passive: true });

  return {
    /** Read left joystick as move vector { x, y }. */
    move() { return left.read(); },
    /** Read and consume accumulated swipe-to-look delta { x (yaw px), y (pitch px) }. */
    look() {
      const dx = lookDx, dy = lookDy;
      lookDx = 0; lookDy = 0;
      // Convert px delta to normalized look values (matching gamepad stick range)
      return { x: dx * LOOK_SENSITIVITY, y: dy * LOOK_SENSITIVITY };
    },
    show() { left.show(); },
    hide() { left.hide(); lookTouchId = null; },
    destroy() { left.destroy(); },
  };
}
