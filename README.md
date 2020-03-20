# &lt;vaadin-tabs&gt;

[&lt;vaadin-tabs&gt;](https://vaadin.com/components/vaadin-tabs) is a Web Component providing item navigation part of the [Vaadin components](https://vaadin.com/components). It is designed for menu and tab components.

[Live Demo ↗](https://vaadin.com/components/vaadin-tabs/html-examples)
|
[API documentation ↗](https://vaadin.com/components/vaadin-tabs/html-api)

[![npm version](https://badgen.net/npm/v/@vaadin/vaadin-tabs)](https://www.npmjs.com/package/@vaadin/vaadin-tabs)
[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://webcomponents.org/element/vaadin/vaadin-tabs)
[![Build Status](https://travis-ci.org/vaadin/vaadin-tabs.svg?branch=next)](https://travis-ci.org/vaadin/vaadin-tabs)
[![Gitter](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/vaadin/web-components?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)
[![Published on Vaadin  Directory](https://img.shields.io/badge/Vaadin%20Directory-published-00b4f0.svg)](https://vaadin.com/directory/component/vaadinvaadin-tabs)
[![Stars on vaadin.com/directory](https://img.shields.io/vaadin-directory/stars/vaadinvaadin-tabs.svg)](https://vaadin.com/directory/component/vaadinvaadin-tabs)

> ⚠️ This is a pre-release version built with [`LitElement`](https://github.com/Polymer/lit-element), part of the [next generation of Vaadin web components](https://vaadin.com/blog/next-generation-vaadin-components).
>
> Looking for Vaadin 14 compatible version? Please see the following branches:
> - [3.0 branch](https://github.com/vaadin/vaadin-tabs/tree/3.0) (latest stable)
> - [3.1 branch](https://github.com/vaadin/vaadin-tabs/tree/3.1) (next minor version with incremental improvements)

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

  `theme/lumo/vaadin-tab.js`
  `theme/lumo/vaadin-tabs.js`

- The components with the Material theme:

  `theme/material/vaadin-tab.js`
  `theme/material/vaadin-tabs.js`

- Alias for `theme/lumo/vaadin-tab.js`
  `theme/lumo/vaadin-tabs.js`:

  `vaadin-tab.js`
  `vaadin-tabs.js`


## Running demos and API docs in a browser

1. Fork the `vaadin-tabs` repository and clone it locally.

1. Make sure you have [npm](https://www.npmjs.com/) installed.

1. When in the `vaadin-tabs` directory, run `npm install` to install dependencies.

1. Run `npm start`, browser will automatically open the component API documentation.


## Running tests from the command line

- When in the `vaadin-tabs` directory, run `npm test`

- To debug tests in the browser, run `npm run test:debug`


## Following the coding style

We are using [ESLint](http://eslint.org/) for linting TypeScript code. You can check if your code is following our standards by running `npm run lint`, which will automatically lint all `.ts` files.

## Big Thanks

Cross-browser Testing Platform and Open Source <3 Provided by [Sauce Labs](https://saucelabs.com).


## Contributing

To contribute to the component, please read [the guideline](https://github.com/vaadin/vaadin-core/blob/master/CONTRIBUTING.md) first.


## License

Apache License 2.0

Vaadin collects development time usage statistics to improve this product. For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.
