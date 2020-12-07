import { html } from '@polymer/polymer/lib/utils/html-tag.js';
import { PolymerElement } from '@polymer/polymer/polymer-element.js';
class TabsIntegrationDemos extends DemoReadyEventEmitter(TabsDemo(PolymerElement)) {
  static get template() {
    return html`
    <style include="vaadin-component-demo-shared-styles">
      :host {
        display: block;
      }
    </style>

    <h3>Content switcher with iron-pages</h3>
    <vaadin-demo-snippet id="tabs-integration-demos-integration-iron-pages">
      <template preserve-content="">
        <style>
          page {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        </style>
        <vaadin-tabs selected="{{page}}">
          <vaadin-tab>Page 1</vaadin-tab>
          <vaadin-tab>Page 2</vaadin-tab>
          <vaadin-tab>Page 3</vaadin-tab>
          <vaadin-tab>Page 4</vaadin-tab>
        </vaadin-tabs>

        <iron-pages selected="[[page]]">
          <page><h3>Page 1</h3>Hello World</page>
          <page><h3>Page 2</h3>Hi All</page>
          <page><h3>Page 3</h3>Good Morning</page>
          <page><h3>Page 4</h3>Welcome</page>
        </iron-pages>
      </template>
    </vaadin-demo-snippet>


    <h3>3rd Party Custom Items</h3>
    <vaadin-demo-snippet id="tabs-integration-demos-wrapping-custom-items">
      <template preserve-content="">
        <style>
          page {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
        </style>
        <vaadin-tabs>
          <vaadin-tab>
            <my-custom-item>
              <img src="https://api.adorable.io/avatars/100/Katie.png" width="100" height="100" alt="" slot="icon">
              Katie
              <span slot="badge">cool</span>
            </my-custom-item>
          </vaadin-tab>
          <vaadin-tab>
            <my-custom-item>
              <img src="https://api.adorable.io/avatars/100/John.png" width="100" height="100" alt="" slot="icon">
              John
              <span slot="badge">friendly</span>
            </my-custom-item>
          </vaadin-tab>
          <vaadin-tab aria-label="Settings">
            <iron-icon icon="lumo:cog"></iron-icon>
          </vaadin-tab>
        </vaadin-tabs>
      </template>
    </vaadin-demo-snippet>
`;
  }

  static get is() {
    return 'tabs-integration-demos';
  }
}
customElements.define(TabsIntegrationDemos.is, TabsIntegrationDemos);
