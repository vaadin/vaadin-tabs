import { LitElement, PropertyValues } from 'lit-element';
import { Constructor } from '@vaadin/mixin-utils';
import { ActiveStateMixin } from '@vaadin/active-state-mixin/active-state-mixin.js';
import { ActiveStateClass } from '@vaadin/active-state-mixin/active-state-class.js';
import { DisabledStateMixin, DisabledStateInterface } from '@vaadin/disabled-state-mixin/disabled-state-mixin.js';
import { FocusVisibleMixin, FocusVisibleInterface } from '@vaadin/focus-visible-mixin/focus-visible-mixin.js';
import { SelectedStateMixin, SelectedStateInterface } from '@vaadin/selected-state-mixin/selected-state-mixin.js';

export type Tab = DisabledStateInterface & FocusVisibleInterface & ActiveStateClass & SelectedStateInterface;

export const TabMixin = <T extends Constructor<LitElement>>(base: T): T & Constructor<Tab> => {
  class Tab extends SelectedStateMixin(FocusVisibleMixin(ActiveStateMixin(DisabledStateMixin(base)))) {
    protected firstUpdated(props: PropertyValues) {
      super.firstUpdated(props);

      this.setAttribute('role', 'tab');
    }

    protected _onKeyUp(event: KeyboardEvent) {
      const willClick = this.hasAttribute('active');

      super._onKeyUp && super._onKeyUp(event);

      if (willClick) {
        const anchor = this.querySelector('a');
        if (anchor) {
          anchor.click();
        }
      }
    }
  }

  return Tab;
};
