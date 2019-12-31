import ResizeObserver from 'resize-observer-polyfill';

let RO: ResizeObserver | undefined;

async function init() {
  RO = (window as { ResizeObserver?: ResizeObserver }).ResizeObserver;
  /* istanbul ignore next */
  try {
    new (RO as any)(() => {}); // eslint-disable-line
  } catch (e) {
    RO = ((await import('resize-observer-polyfill')).default as unknown) as ResizeObserver;
  }
  return RO as ResizeObserver;
}

export default async function getResizeObserver(): Promise<ResizeObserver> {
  return RO !== undefined ? RO : init();
}
