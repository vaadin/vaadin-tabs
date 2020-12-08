describe('vaadin-tabs', () => {
  const locator = '#tabs-tests[data-ready]';

  ['lumo', 'material'].forEach((theme) => {
    it(`${theme}-horizontal-tabs`, function () {
      return this.browser
        .url(`horizontal-tabs.html?theme=${theme}`)
        .waitForVisible(locator, 15000)
        .assertView(`${theme}-horizontal-tabs`, locator);
    });

    it(`${theme}-vertical-tabs`, function () {
      return this.browser
        .url(`vertical-tabs.html?theme=${theme}`)
        .waitForVisible(locator, 15000)
        .assertView(`${theme}-vertical-tabs`, locator);
    });

    it(`${theme}-flex-child-tabs`, function () {
      return this.browser
        .url(`flex-child-tabs.html?theme=${theme}`)
        .waitForVisible(locator, 15000)
        .assertView(`${theme}-flex-child-tabs`, locator);
    });

    ['ltr', 'rtl'].forEach((dir) => {
      it(`${theme}-scrollable-tabs-${dir}`, function () {
        return this.browser
          .url(`scrollable-tabs.html?theme=${theme}&dir=${dir}`)
          .waitForVisible(locator, 15000)
          .assertView(`${theme}-scrollable-tabs`, locator);
      });

      it(`${theme}-anchor-tabs-${dir}`, function () {
        return this.browser
          .url(`anchor-tabs.html?theme=${theme}&dir=${dir}`)
          .waitForVisible(locator, 15000)
          .assertView(`${theme}-anchor-tabs`, locator);
      });
    });
  });

  it('lumo-equal-width-tabs', function () {
    return this.browser
      .url('equal-width-tabs-lumo.html')
      .waitForVisible(locator, 15000)
      .assertView('lumo-equal-width-tabs', locator);
  });
});
