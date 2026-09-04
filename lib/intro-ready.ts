type ReadyListener = () => void;

const listeners = new Set<ReadyListener>();
let ready = false;

export function notifyIntroReady() {
  ready = true;
  listeners.forEach((fn) => fn());
}

export function onIntroReady(fn: ReadyListener) {
  if (ready) {
    fn();
    return () => undefined;
  }
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function isIntroReady() {
  return ready;
}
