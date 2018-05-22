gemini.suite('vaadin-tabs', function(rootSuite) {

  function wait(actions, find) {
    actions.wait(5000);
  }

  function goToAboutBlank(actions, find) {
    // Firefox stops responding on socket after a test, workaround:
    return actions.executeJS(function(window) {
      window.location.href = 'about:blank'; // just go away, please!
    });
  }

  rootSuite
    .before(wait)
    .after(goToAboutBlank);

  gemini.suite('horizontal-tabs', (suite) => {
    suite
      .setUrl('horizontal-tabs.html')
      .setCaptureElements('#horizontal-tabs')
      .before((actions, find) => {
        actions.wait(6000);
      })
      .capture('horizontal-tabs');
  });

  gemini.suite('vertical-tabs', (suite) => {
    suite
      .setUrl('vertical-tabs.html')
      .setCaptureElements('#vertical-tabs')
      .before((actions, find) => {
        actions.wait(6000);
      })
      .capture('vertical-tabs');
  });

  gemini.suite('scrollable-tabs', (suite) => {
    suite
      .setUrl('scrollable-tabs.html')
      .setCaptureElements('#scrollable-tabs')
      .before((actions, find) => {
        actions.wait(6000);
      })
      .capture('scrollable-tabs');
  });

});
