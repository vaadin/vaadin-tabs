import { LitElement, html, PropertyValues } from 'lit-element';
import {
  KeyboardDirectionMixin,
  KeyboardDirectionInterface
} from '@vaadin/keyboard-direction-mixin/keyboard-direction-mixin.js';
import { OrientationMixin, OrientationInterface } from '@vaadin/orientation-mixin/orientation-mixin.js';
import { RovingTabIndexMixin } from '@vaadin/roving-tabindex-mixin/roving-tabindex-mixin.js';
import { SelectionInViewMixin } from '@vaadin/selection-in-view-mixin/selection-in-view-mixin.js';
import { SelectionInViewClass } from '@vaadin/selection-in-view-mixin/selection-in-view-class.js';
import {
  SingleSelectionMixin,
  SingleSelectionInterface
} from '@vaadin/single-selection-mixin/single-selection-mixin.js';
import { SlottedItemsMixin, SlottedItemsInterface } from '@vaadin/slotted-items-mixin/slotted-items-mixin.js';
import { ResizableMixin } from './resizable-mixin';
import { ResizableClass } from './resizable-class';
import { tabsStyles } from './vaadin-tabs-css';

type TabsBase = new () => LitElement;

type Tab = new () => LitElement &
  SlottedItemsInterface &
  KeyboardDirectionInterface &
  OrientationInterface &
  ResizableClass &
  SingleSelectionInterface &
  SelectionInViewClass;

export const TabsMixin = <T extends TabsBase>(base: T): Tab => {
  class Tabs extends ResizableMixin(
    SelectionInViewMixin(
      SingleSelectionMixin(OrientationMixin(RovingTabIndexMixin(KeyboardDirectionMixin(SlottedItemsMixin(base)))))
    )
  ) {
    private _scroller?: HTMLElement;

    constructor() {
      super();

      this.selected = 0;

      // TODO: change CSS and remove
      this.orientation = 'horizontal';
    }

    static get styles() {
      return tabsStyles;
    }

    protected render() {
      return html`
        <div @click="${this._scrollBack}" part="back-button"></div>

        <div part="tabs" @scroll="${this._onScroll}">
          <slot></slot>
        </div>

        <div @click="${this._scrollForward}" part="forward-button"></div>
      `;
    }

    protected firstUpdated(props: PropertyValues) {
      super.firstUpdated(props);

      this.setAttribute('role', 'tablist');
      this._scroller = this.renderRoot.querySelector('[part="tabs"]') as HTMLElement;

      // Wait for the vaadin-tab elements to upgrade and get styled
      const tabsComplete = this.items.map(tab => (tab as LitElement).updateComplete);
      Promise.all(tabsComplete).then(() => {
        this._updateOverflow();
      });
    }

    protected updated(props: PropertyValues) {
      if (props.has('orientation') || props.has('_items')) {
        this.items.forEach(item => {
          if (this.orientation) {
            item.setAttribute('orientation', this.orientation);
          } else {
            item.removeAttribute('orientation');
          }
        });

        this._updateOverflow();
      }

      // Ensure scroll to item is called after "overflow" update
      super.updated(props);
    }

    protected _sizeChanged(contentRect: DOMRect) {
      this._updateOverflow();

      super._sizeChanged && super._sizeChanged(contentRect);
    }

    private _onScroll() {
      this._updateOverflow();
    }

    private get _overflow() {
      const { scrollTop, scrollLeft, scrollHeight, scrollWidth } = this._scrollTarget;
      const scrollPosition = this._vertical ? scrollTop : scrollLeft;
      let scrollSize = this._vertical ? scrollHeight : scrollWidth;

      // In Edge we need to adjust the size in 1 pixel
      scrollSize -= 1;

      let result = scrollPosition > 0 ? 'start' : '';
      result += scrollPosition + this._scrollOffset < scrollSize ? ' end' : '';
      return result.trim();
    }

    private _scrollForward() {
      this._scroll && this._scroll(this._scrollOffset);
    }

    private _scrollBack() {
      this._scroll && this._scroll(-1 * this._scrollOffset);
    }

    private get _scrollOffset() {
      return this._vertical ? this._scrollTarget.offsetHeight : this._scrollTarget.offsetWidth;
    }

    private get _scrollTarget() {
      return this._scroller as HTMLElement;
    }

    private _updateOverflow() {
      const overflow = this._overflow;
      if (overflow) {
        this.setAttribute('overflow', overflow);
      } else {
        this.removeAttribute('overflow');
      }
    }
  }

  return Tabs;
};
