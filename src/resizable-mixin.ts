import { LitElement } from 'lit-element';
import getResizeObserver from './resize-observer-polyfill';
import { ResizableClass } from './resizable-class';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Constructor<T = object> = new (...args: any[]) => T;

export const ResizableMixin = <T extends Constructor<LitElement>>(base: T): T & Constructor<ResizableClass> => {
  class Resizable extends base {
    private _resizeObserver?: ResizeObserver;

    connectedCallback() {
      super.connectedCallback();

      this._initResizeObserver().then(() => {
        this._resizeObserver && this._resizeObserver.observe(this);
      });
    }

    disconnectedCallback() {
      super.disconnectedCallback();

      this._resizeObserver && this._resizeObserver.disconnect();
    }

    private async _initResizeObserver() {
      if (this._resizeObserver == null) {
        const ResizeObserver = await getResizeObserver();

        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        this._resizeObserver = new ResizeObserver((entries: ResizeObserverEntry[]) => {
          this._sizeChanged(entries[0].contentRect as DOMRect);
        });
      }
    }

    protected _sizeChanged(contentRect: DOMRect) {
      this.dispatchEvent(
        new CustomEvent('resize', {
          detail: {
            contentRect
          }
        })
      );
    }
  }

  return Resizable;
};
