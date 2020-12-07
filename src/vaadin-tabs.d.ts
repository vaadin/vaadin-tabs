import {PolymerElement} from '@polymer/polymer/polymer-element.js';

import {ThemableMixin} from '@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js';

import {ListMixin} from '@vaadin/vaadin-list-mixin/vaadin-list-mixin.js';

import {IronResizableBehavior} from '@polymer/iron-resizable-behavior/iron-resizable-behavior.js';

import {ElementMixin} from '@vaadin/vaadin-element-mixin/vaadin-element-mixin.js';

import {html} from '@polymer/polymer/lib/utils/html-tag.js';

import {afterNextRender} from '@polymer/polymer/lib/utils/render-status.js';

import {mixinBehaviors} from '@polymer/polymer/lib/legacy/class.js';

/**
 * `<vaadin-tabs>` is a Web Component for easy switching between different views.
 *
 * ```
 *   <vaadin-tabs selected="4">
 *     <vaadin-tab>Page 1</vaadin-tab>
 *     <vaadin-tab>Page 2</vaadin-tab>
 *     <vaadin-tab>Page 3</vaadin-tab>
 *     <vaadin-tab>Page 4</vaadin-tab>
 *   </vaadin-tabs>
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name         | Description
 * ------------------|--------------------------------------
 * `back-button`     | Button for moving the scroll back
 * `tabs`            | The tabs container
 * `forward-button`  | Button for moving the scroll forward
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `orientation` | Tabs disposition, valid values are `horizontal` and `vertical`. | :host
 * `overflow` | It's set to `start`, `end`, none or both. | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 */
declare class TabsElement extends
  ElementMixin(
  ListMixin(
  ThemableMixin(
  PolymerElement))) {
  readonly _scrollerElement: HTMLElement;

  /**
   * The index of the selected tab.
   */
  selected: number|null|undefined;

  /**
   * Set tabs disposition. Possible values are `horizontal|vertical`
   */
  orientation: ListOrientation;
  readonly _scrollOffset: number;
  ready(): void;
}

declare global {

  interface HTMLElementTagNameMap {
    "vaadin-tabs": TabsElement;
  }
}

export {TabsElement};

import {ListOrientation} from '@vaadin/vaadin-list-mixin/interfaces';
