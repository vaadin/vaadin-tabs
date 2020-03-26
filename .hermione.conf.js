module.exports = {
  browsers: {
    chrome: {
      baseUrl: 'http://localhost:8080/test/visual/',
      screenshotsDir: 'test/visual/screens',
      desiredCapabilities: {
        browserName: 'chrome',
        version: '80.0',
        platform: 'Windows 10'
      }
    }
  },
  plugins: {
    'hermione-esm': {
      port: 8080
    },
    'hermione-sauce': {
      verbose: false
    }
  }
};
