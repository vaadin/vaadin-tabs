import { html, css } from 'lit-element';
import { VaadinElement } from '@vaadin/element-base/vaadin-element.js';

export class TabBase extends VaadinElement {
  static get styles() {
    return css`
      :host {
        display: flex;
        flex-shrink: 0;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }
    `;
  }

  protected render() {
    return html`
      <slot></slot>
    `;
  }
}
