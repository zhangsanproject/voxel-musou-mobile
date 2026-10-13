// 6 virtual action buttons for mobile touch input.
// Layout: arc pattern in the bottom-right, designed for right-thumb reach.
// Buttons: attack, charge (long-press), jump, dodge, musou (glows when ready), target/recenter.
// Each button fires touch events into the input system's latch/held state.

import { on } from '../core/events.js';

// Button definitions: [action, label, size, cssClass]
const BTNS = [
  { action: 'attack',  label: '攻', size: 68, cls: 'btn-attack' },
  { action: 'charge',  label: '蓄', size: 56, cls: 'btn-charge' },
  { action: 'jump',    label: '跳', size: 56, cls: 'btn-jump' },
  { action: 'dodge',   label: '避', size: 52, cls: 'btn-dodge' },
  { action: 'musou',   label: '無', size: 52, cls: 'btn-musou' },
  { action: 'target',  label: '鎖', size: 42, cls: 'btn-target' },
];

const CHARGE_HOLD = 300;   // ms to hold before charge fires

export function createTouchButtons(container, inputDev) {
  const root = document.createElement('div');
  root.className = 'touch-buttons';
  const btns = {};
  const held = {};
  const latch = {};

  for (const { action, label, size, cls } of BTNS) {
    const el = document.createElement('div');
    el.className = `touch-btn ${cls}`;
    el.style.width = el.style.height = size + 'px';
    el.textContent = label;
    root.appendChild(el);
    btns[action] = el;
    held[action] = false;
    latch[action] = false;

    let chargeTimer = null;
    let chargeFired = false;

    el.addEventListener('touchstart', (e) => {
      e.preventDefault();
      e.stopPropagation();
      held[action] = true;
      latch[action] = true;
      el.classList.add('active');

      // Charge: long-press detection
      if (action === 'charge') {
        chargeFired = false;
        chargeTimer = setTimeout(() => {
          chargeFired = true;
          // charge is now "held" — release will fire pressed.charge
        }, CHARGE_HOLD);
      }
    }, { passive: false });

    const end = () => {
      held[action] = false;
      el.classList.remove('active');
      if (action === 'charge' && chargeTimer) {
        clearTimeout(chargeTimer);
        chargeTimer = null;
        // If not held long enough, fire as instant charge
        if (!chargeFired) latch[action] = true;
      }
    };
    el.addEventListener('touchend', (e) => { e.preventDefault(); e.stopPropagation(); end(); }, { passive: false });
    el.addEventListener('touchcancel', end, { passive: true });
  }

  // Musou glow when gauge is full
  on('musou:ready', (e) => {
    btns.musou.classList.toggle('ready', !!e.ready);
  });

  container.appendChild(root);

  return {
    /** Read current button state into the input device's latch/held. Called each sample(). */
    inject(dev) {
      for (const a of Object.keys(btns)) {
        if (latch[a]) { dev.latch[a] = true; latch[a] = false; }
        dev.held[a] = held[a];
      }
    },
    show() { root.style.display = ''; },
    hide() { root.style.display = 'none'; },
    destroy() { root.remove(); },
  };
}
