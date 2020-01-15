import { expect, fixture, html, aTimeout, oneEvent } from '@vaadin/vaadin-component-dev-dependencies/testing.js';
import {
  arrowDownKeyDown,
  arrowDownKeyUp,
  arrowLeftKeyDown,
  arrowLeftKeyUp,
  arrowRightKeyDown,
  arrowRightKeyUp,
  arrowUpKeyDown,
  arrowUpKeyUp,
  enterKeyDown,
  enterKeyUp,
  spaceKeyDown,
  spaceKeyUp
} from '@vaadin/vaadin-component-dev-dependencies/keys.js';
import { VaadinTabs } from '../../src/vaadin-tabs';
import { VaadinTab } from '../../src/vaadin-tab';

const { sinon } = window;

describe('tabs', () => {
  let tabs: VaadinTabs;
  let items: VaadinTab[];

  beforeEach(async () => {
    tabs = await fixture(html`
      <vaadin-tabs>
        <vaadin-tab>Tab one</vaadin-tab>
        <vaadin-tab>Tab two</vaadin-tab>
        <vaadin-tab>Tab three</vaadin-tab>
        <vaadin-tab>Tab four</vaadin-tab>
        <vaadin-tab>
          <a>Tab five</a>
        </vaadin-tab>
      </vaadin-tabs>
    `);

    items = tabs.items as VaadinTab[];
  });

  describe('custom element definition', () => {
    let tagName: string;

    beforeEach(() => {
      tagName = tabs.tagName.toLowerCase();
    });

    it('should be defined in custom element registry', () => {
      expect(customElements.get(tagName)).to.be.ok;
      expect(tabs instanceof VaadinTabs).to.be.ok;
    });

    it('should have a valid static "is" getter', () => {
      expect(customElements.get(tagName).is).to.equal(tagName);
    });

    it('should have a valid version number', () => {
      expect(customElements.get(tagName).version).to.match(/^(\d+\.)?(\d+\.)?(\d+)(-(alpha|beta)\d+)?$/);
    });
  });

  ['horizontal', 'vertical'].forEach(orientation => {
    describe(`${orientation} orientation`, () => {
      beforeEach(async () => {
        tabs.orientation = orientation;
        await tabs.updateComplete;
      });

      it(`should set orientation attribute on tabs when ${orientation} orientation is set`, () => {
        items.forEach(tab => expect(tab.getAttribute('orientation')).to.equal(orientation));
      });

      it(`should remove orientation attribute on tabs when orientation is set to null`, async () => {
        tabs.orientation = null;
        await tabs.updateComplete;
        items.forEach(tab => expect(tab.hasAttribute('orientation')).to.equal(false));
      });
    });

    describe(`${orientation} overflow`, () => {
      beforeEach(async () => {
        tabs.orientation = orientation;
        await tabs.updateComplete;
      });

      describe('large viewport', () => {
        it(`should not have overflow attribute with ${orientation} orientation`, () => {
          expect(tabs.hasAttribute('overflow')).to.be.false;
        });
      });

      describe('small viewport', () => {
        let scroller: HTMLElement;

        beforeEach(async () => {
          scroller = tabs.renderRoot.querySelector('[part=tabs]') as HTMLElement;

          tabs.style.width = '100px';
          tabs.style.height = '50px';
          // Wait for ResizableMixin event.
          await oneEvent(tabs, 'resize');
        });

        it(`should have "end" overflow with "${orientation}" orientation when scroll is at the beginning`, async () => {
          expect(tabs.getAttribute('overflow')).to.equal('end');
        });

        it(`should have "start" overflow with "${orientation}" orientation when scroll is at the end`, async () => {
          tabs.selected = 4;
          await oneEvent(scroller, 'scroll');
          await tabs.updateComplete;
          expect(tabs.getAttribute('overflow')).to.be.equal('start');
        });

        it(`should have "start end" overflow with "${orientation}" orientation when scroll at the middle`, async () => {
          tabs.selected = 2;
          await oneEvent(scroller, 'scroll');
          await tabs.updateComplete;
          expect(tabs.getAttribute('overflow')).to.be.equal('start end');
        });

        it(`should not have "start" overflow with "${orientation}" orientation when over-scrolling`, async () => {
          // Cannot set negative values to native scroll, monkey patching the properties
          let pixels = 0;
          Object.defineProperty(scroller, orientation === 'horizontal' ? 'scrollLeft' : 'scrollTop', {
            get: () => pixels,
            set: v => {
              pixels = v;
            }
          });
          (tabs as any)._scroll(-1); // eslint-disable-line @typescript-eslint/no-explicit-any
          scroller.dispatchEvent(new CustomEvent('scroll'));
          await tabs.updateComplete;
          expect(tabs.getAttribute('overflow')).to.be.equal('end');
        });
      });
    });
  });

  describe('scroll', () => {
    let scroller: HTMLElement;

    beforeEach(() => {
      scroller = tabs.renderRoot.querySelector('[part="tabs"]') as HTMLElement;
    });

    describe('horizontal', () => {
      beforeEach(async () => {
        tabs.style.width = '200px';
        // Wait for ResizableMixin event.
        await oneEvent(tabs, 'resize');
        tabs.orientation = 'horizontal';
        await tabs.updateComplete;
      });

      it('should show one extra item on the right edge of the viewport on "arrow-right" on last visible tab', async () => {
        tabs.selected = 2;
        await tabs.updateComplete;
        items[2].focus();
        arrowRightKeyDown(items[2]);
        arrowRightKeyUp(items[2]);
        await tabs.updateComplete;
        expect(scroller.getBoundingClientRect().right).to.be.closeTo(items[4].getBoundingClientRect().right, 1);
      });

      it('should show one extra item on the left edge of the viewport on "arrow-left" on first visible tab', async () => {
        // Scroll so the first tab will be out of visible part
        tabs.selected = 4;
        await tabs.updateComplete;
        items[4].focus();
        // Move focus and choose the first visible tab selected
        tabs.selected = 2;
        await tabs.updateComplete;
        items[2].focus();
        arrowLeftKeyDown(items[2]);
        arrowLeftKeyUp(items[2]);
        await tabs.updateComplete;
        expect(scroller.getBoundingClientRect().left).to.be.closeTo(items[0].getBoundingClientRect().left, 1);
      });

      it('should scroll forward when arrow button is clicked', async () => {
        const btn = tabs.renderRoot.querySelector('[part="forward-button"]') as HTMLElement;
        btn.click();
        await oneEvent(scroller, 'scroll');
        expect(scroller.scrollLeft).to.equal(scroller.scrollWidth - scroller.offsetWidth);
      });

      it('should scroll back when arrow button is clicked', async () => {
        tabs.selected = 4;
        await tabs.updateComplete;
        const btn = tabs.renderRoot.querySelector('[part="back-button"]') as HTMLElement;
        btn.click();
        await oneEvent(scroller, 'scroll');
        expect(scroller.scrollLeft).to.be.equal(0);
      });
    });

    describe('vertical', () => {
      beforeEach(async () => {
        tabs.style.height = '60px';
        // Wait for ResizeObserver.
        await aTimeout(20);
        tabs.orientation = 'vertical';
        await tabs.updateComplete;
      });

      it('should show one extra item on the bottom edge of the viewport on "arrow-down" on last visible tab', async () => {
        tabs.selected = 2;
        await tabs.updateComplete;
        items[2].focus();
        const scrollPosition = items[4].getBoundingClientRect().bottom;
        arrowDownKeyDown(items[2]);
        arrowDownKeyUp(items[2]);
        await tabs.updateComplete;
        expect(items[4].getBoundingClientRect().bottom).to.be.lessThan(scrollPosition);
      });

      it('should show one extra item on the top edge of the viewport on "arrow-up" on first visible tab', async () => {
        // Scroll so the first tab will be out of visible part
        tabs.selected = 4;
        await tabs.updateComplete;
        items[4].focus();
        // Move focus and choose the first visible tab selected
        tabs.selected = 2;
        await tabs.updateComplete;
        items[2].focus();
        const scrollPosition = items[4].getBoundingClientRect().bottom;
        arrowUpKeyDown(items[2]);
        arrowUpKeyUp(items[2]);
        await tabs.updateComplete;
        expect(items[4].getBoundingClientRect().bottom).to.be.greaterThan(scrollPosition);
      });
    });
  });

  describe('slotted anchor', () => {
    let anchor: HTMLAnchorElement;
    let spy: sinon.SinonSpy;
    let tab: VaadinTab;

    beforeEach(async () => {
      anchor = tabs.querySelector('a') as HTMLAnchorElement;
      tab = anchor.parentElement as VaadinTab;
      spy = sinon.spy();
      anchor.addEventListener('click', spy);
    });

    it('should propagate click to the anchor element when Enter key pressed', () => {
      enterKeyDown(tab);
      enterKeyUp(tab);
      expect(spy).to.be.calledOnce;
    });

    it('should propagate click to the anchor element when Space key pressed', () => {
      spaceKeyDown(tab);
      spaceKeyUp(tab);
      expect(spy).to.be.calledOnce;
    });

    it('should not propagate click to the anchor when other key pressed', () => {
      arrowDownKeyDown(tab);
      arrowDownKeyUp(tab);
      expect(spy).to.not.be.called;
    });
  });

  describe('ARIA roles', () => {
    it('should set "tablist" role on the tabs container', () => {
      expect(tabs.getAttribute('role')).to.equal('tablist');
    });

    it('should set "tab" role on the tabs elements', () => {
      items.forEach(tab => expect(tab.getAttribute('role')).to.equal('tab'));
    });
  });

  describe('a11y', () => {
    it('should pass accessibility test', async () => {
      await expect(tabs).to.be.accessible();
    });
  });
});
