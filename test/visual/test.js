gemini.suite('vaadin-tabs', rootSuite => {
  function wait(actions) {
    return actions.waitForJSCondition(window => {
      return window.webComponentsAreReady;
    }, 15000);
  }

  rootSuite.before(wait);

  ['lumo', 'material'].forEach(theme => {
    gemini.suite(`horizontal-tabs-${theme}`, suite => {
      suite
        .setUrl(`horizontal-tabs.html?theme=${theme}`)
        .setCaptureElements('#horizontal-tabs')
        .capture('horizontal-tabs');
    });

    gemini.suite(`vertical-tabs-${theme}`, suite => {
      suite
        .setUrl(`vertical-tabs.html?theme=${theme}`)
        .setCaptureElements('#vertical-tabs')
        .capture('vertical-tabs');
    });

    gemini.suite(`scrollable-tabs-${theme}`, suite => {
      suite
        .setUrl(`scrollable-tabs.html?theme=${theme}`)
        .setCaptureElements('#scrollable-tabs')
        .capture('scrollable-tabs');
    });

    gemini.suite(`anchor-tabs-${theme}`, suite => {
      suite
        .setUrl(`anchor-tabs.html?theme=${theme}`)
        .setCaptureElements('#anchor-tabs')
        .capture('anchor-tabs');
    });

    gemini.suite(`flex-child-tabs-${theme}`, suite => {
      suite
        .setUrl(`flex-child-tabs.html?theme=${theme}`)
        .setCaptureElements('#flex-child-tabs')
        .capture('flex-child-tabs');
    });
  });

  gemini.suite('equal-width-tabs-lumo', suite => {
    suite
      .setUrl('equal-width-tabs-lumo.html')
      .setCaptureElements('#equal-width-tabs')
      .capture('equal-width-tabs');
  });
});
