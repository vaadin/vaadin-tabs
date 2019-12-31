import { customElement } from 'lit-element';
import { TabsBase } from './vaadin-tabs-base';
import { TabsMixin } from './vaadin-tabs-mixin';
import './vaadin-tab';

/**
 * `<vaadin-tabs>` is a Web Component for easy switching between different views.
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
