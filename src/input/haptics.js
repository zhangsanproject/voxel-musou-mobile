// Haptic feedback for mobile (Android).
// Subscribes to combat/musou events and triggers short vibrations.
// iOS silently unsupported (Web Vibration API not available).

import { on } from '../core/events.js';

const canVibrate = typeof navigator.vibrate === 'function';

export function createHaptics() {
  if (!canVibrate) return { destroy() {} };

  const subs = [
    on('hit', (e) => {
      // light tap on each hit; heavier on charged / heavy hits
      navigator.vibrate(e.heavy ? 25 : 8);
    }),
    on('ko', () => {
      navigator.vibrate([15, 30, 25]);     // double pulse on kill
    }),
    on('musou:start', () => {
      navigator.vibrate(50);               // strong pulse on Musou activation
    }),
    on('hero:hit', () => {
      navigator.vibrate([30, 20, 30]);     // warning pattern when hero takes damage
    }),
  ];

  return {
    destroy() { /* event listeners are global; acceptable for a singleton */ },
  };
}
