# Uphold Wallet End-To-End Tests

---

# What's inside

- [Mocha](https://mochajs.org/) - Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and fun.
- [Nightwatch.js](http://nightwatchjs.org/) - Write End-to-End tests in Node.js quickly and effortlessly that run against a Selenium server.
- [selenium-download](https://github.com/groupon/selenium-download) - Allow downloading of latest Selenium standalone server and Chromedriver.

# Setup

1. Clone the project:

  ```sh
  $ git clone git@github.com:uphold/wallet-e2e.git
  ```

2. Install dependencies:

  ```sh
  $ yarn
  ```

# Tasks

| Task     | Description                                                                       |
|----------|-----------------------------------------------------------------------------------|
| `lint`   | Run linter.                                                                       |
| `start`  | Run `end-2-end` test suites using Nightwatch against Chrome in headless mode.     |

> To run end-to-end tests against Chrome in normal mode simply run `nightwatch`.

