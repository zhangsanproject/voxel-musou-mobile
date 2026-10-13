// Dual virtual joysticks for mobile touch input.
// Left joystick: movement (bottom-left). Right joystick: camera look (bottom-right).
// DOM-based for GPU-composited CSS transforms and native touch events.
// Multi-touch: each joystick tracks its own touch identifier independently.

const DEAD_L = 0.15, DEAD_R = 0.18;
const TRAVEL_L = 50, TRAVEL_R = 45;       // px max thumb travel from center
const ZONE_L = 0.40, ZONE_R = 0.40;       // left/right 40% of screen width

function createJoystick({ size = 120, thumbSize = 50, travel = 50, dead = 0.15, side = 'left' }) {
  const root = document.createElement('div');
  root.className = `touch-joy touch-joy-${side}`;
  root.innerHTML = `<div class="touch-joy-base" style="width:${size}px;height:${size}px">
    <div class="touch-joy-thumb" style="width:${thumbSize}px;height:${thumbSize}px"></div></div>`;

  const base = root.querySelector('.touch-joy-base');
  const thumb = root.querySelector('.touch-joy-thumb');
  let touchId = null;
  let cx = 0, cy = 0;                     // base center in viewport coords
  let nx = 0, ny = 0;                     // normalized output [-1, 1]

  function onStart(e) {
    if (touchId !== null) return;          // already tracking a finger
    const t = e.changedTouches[0];
    touchId = t.identifier;
    // Position base at touch location (within the zone)
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
    // Rescale from [dead, 1] → [0, 1] with quadratic response
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
    /** Current normalized output { x, y } in [-1, 1]. */
    read() { return { x: nx, y: ny }; },
    active() { return touchId !== null; },
    show() { root.style.display = ''; },
    hide() { root.style.display = 'none'; nx = 0; ny = 0; touchId = null;
      thumb.style.transform = 'translate(0px, 0px)'; },
    destroy() { root.remove(); },
  };
}

/** Create both joysticks and append them to the container. Returns control object. */
export function createTouchJoysticks(container) {
  const left = createJoystick({ size: 130, thumbSize: 56, travel: TRAVEL_L, dead: DEAD_L, side: 'left' });
  const right = createJoystick({ size: 110, thumbSize: 48, travel: TRAVEL_R, dead: DEAD_R, side: 'right' });
  container.appendChild(left.el);
  container.appendChild(right.el);

  return {
    /** Read left joystick as move vector { x, y }. */
    move() { return left.read(); },
    /** Read right joystick as look vector { x (yaw), y (pitch) }. */
    look() { return right.read(); },
    show() { left.show(); right.show(); },
    hide() { left.hide(); right.hide(); },
    destroy() { left.destroy(); right.destroy(); },
  };
}
