import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';
import { tabsStyles } from './vaadin-tabs-css';

export class TabsBase extends VaadinElement {
  static get styles() {
    return tabsStyles;
  }
}
