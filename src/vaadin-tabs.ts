import { customElement } from 'lit-element';
import { TabsBase } from './vaadin-tabs-base';
import { TabsMixin } from './vaadin-tabs-mixin';
import './vaadin-tab';

/**
 * `<vaadin-tabs>` is a Web Component for easy switching between different views.
 *
 * @attr {start | none | both} overflow - Attribute set depending on whether the items fit into viewport.
 *
 * @csspart back-button - Button for moving the scroll back
 * @csspart forward-button - Button for moving the scroll forward
 * @csspart tabs - The tabs container
 *
 * @event selected-changed - Fired when the `selected` property changes.
 * @event resize - Fired when the element is resized. Non-bubbling.
 */
@customElement('vaadin-tabs')
export class VaadinTabs extends TabsMixin(TabsBase) {
  static is = 'vaadin-tabs';

  static get version() {
    return '3.0.5';
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'vaadin-tabs': VaadinTabs;
  }
}