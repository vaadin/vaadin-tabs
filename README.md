# &lt;vaadin-tabs&gt;

> ⚠️ Starting from Vaadin 20, the source code and issues for this component are migrated to the [`vaadin/web-components`](https://github.com/vaadin/web-components/tree/master/packages/vaadin-tabs) monorepository.
> This repository contains the source code and releases of `<vaadin-tabs>` for the Vaadin versions 10 to 19.

[&lt;vaadin-tabs&gt;](https://vaadin.com/components/vaadin-tabs) is a Web Component providing item navigation part of the [Vaadin components](https://vaadin.com/components). It is designed for menu and tab components.

[Live Demo ↗](https://vaadin.com/components/vaadin-tabs/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-tabs/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-tabs)](https://www.npmjs.com/package/@vaadin/vaadin-tabs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/vaadin/vaadin-tabs)
[![Published on Vaadin Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-tabs)
[![Discord](https://img.shields.io/discord/732335336448852018?label=discord)](https://discord.gg/PHmkCKC)

<!--
```
<custom-element-demo>
  <template>
    <script src="../webcomponentsjs/webcomponents-lite.js"></script>
    <link rel="import" href="vaadin-tabs.html">
    <next-code-block></next-code-block>
  </template>
</custom-element-demo>
```
-->
```html
<vaadin-tabs selected="3">
  <vaadin-tab>Page 1</vaadin-tab>
  <vaadin-tab>Page 2</vaadin-tab>
  <vaadin-tab>Page 3</vaadin-tab>
  <vaadin-tab>Page 4</vaadin-tab>
</vaadin-tabs>
```

[<img src="https://raw.githubusercontent.com/vaadin/vaadin-tabs/master/screenshot.png" width="355" alt="Screenshot of vaadin-tabs, using the default Lumo theme">](https://vaadin.com/components/vaadin-tabs)

## Installation

The Vaadin components are distributed as Bower and npm packages.
Please note that the version range is the same, as the API has not changed.
You should not mix Bower and npm versions in the same application, though.

Unlike the official Polymer Elements, the converted Polymer 3 compatible Vaadin components
are only published on npm, not pushed to GitHub repositories.

### Polymer 2 and HTML Imports Compatible Version

Install `vaadin-tabs`:

```sh
bower i vaadin/vaadin-tabs --save
```

Once installed, import it in your application:

```html
<link rel="import" href="bower_components/vaadin-tabs/vaadin-tabs.html">
```
### Polymer 3 and ES Modules Compatible Version

Install `vaadin-tabs`:

```sh
npm i @vaadin/vaadin-tabs --save
```

Once installed, import it in your application:

```js
import '@vaadin/vaadin-tabs/vaadin-tabs.js';
```

## Getting started

Vaadin components use the Lumo theme by default.

To use the Material theme, import the correspondent file from the `theme/material` folder.

## Entry points

- The components with the Lumo theme:

  `theme/lumo/vaadin-tab.html`
  `theme/lumo/vaadin-tabs.html`

- The components with the Material theme:

  `theme/material/vaadin-tab.html`
  `theme/material/vaadin-tabs.html`

- Alias for `theme/lumo/vaadin-tab.html`
  `theme/lumo/vaadin-tabs.html`:

  `vaadin-tab.html`
  `vaadin-tabs.html`


## Running demos and tests in a browser

1. Fork the `vaadin-tabs` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) and [Bower](https://bower.io) installed.

1. When in the `vaadin-tabs` directory, run `npm install` and then `bower install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.

1. You can also open demo or in-browser tests by adding **demo** or **test** to the URL, for example:

  - http://127.0.0.1:3000/components/vaadin-tabs/demo
  - http://127.0.0.1:3000/components/vaadin-tabs/test


## Running tests from the command line

> [!WARNING]
> Running tests locally from the CLI does not work due to outdated dependencies. Run tests via SauceLabs or in the browser instead.

1. When in the `vaadin-tabs` directory, run `polymer test`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting JavaScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.js` files as well as JavaScript snippets inside `.html` files.


## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

  To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
