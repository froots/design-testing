[![Build Status](https://travis-ci.org/froots/design-testing.svg?branch=master)](https://travis-ci.org/froots/design-testing)

# Galen Framework CSS testing examples

This repository contains companion code and example tests for the book [Automated Testing for Web Designers](https://gumroad.com/l/Dgbv), available to buy now on Gumroad.

In this repository you'll find examples of design tests using [Galen Gramework](http://galenframework.com/). HTML for the example search form and layout components, along with their CSS and JavaScript assets are in the `dist` directory. All the visual test suites, specs and helper files are in the `test/visual` directory.

You can clone this repository to your own computer and run the example tests. Tests can run on the headless PhantomJS browser, or on desktop browsers like Firefox, Chrome and Safari. You can also run tests against a wide range of desktop browsers and mobile device emulators using [BrowserStack](https://www.browserstack.com) or [Sauce Labs](https://saucelabs.com/).

These instructions are for OS X. They should also work for standard Linux distributions. The accompanying [book](https://gumroad.com/l/Dgbv) provides a full step-by-step guide to automated design testing using Galen.

## Pre-requisites

Required:

* [NodeJS](https://nodejs.org)
* [NPM](https://www.npmjs.com/)

Optional:

* [PhantomJS](http://phantomjs.org/) to run headless browser tests
* [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) to run tests on Chrome - install using `brew install chromedriver` for OS X
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 1.7 or above
* A [BrowserStack](https://www.browserstack.com) or [Sauce Labs](https://saucelabs.com/) automated testing account if you want to run tests using these services.

Note that Firefox bundles a WebDriver implementation, and Galen will attempt to install SafariDriver when you install it on OS X. So you should not need to do anything extra to run tests on these browsers.

## Setup

Clone this repository, then:

`npm install -g galenframework-cli && npm install`

## Cloud testing service accounts

Thanks to [BrowserStack](https://www.browserstack.com) and [Sauce Labs](https://saucelabs.com/) for providing free open source plans to test the examples here.

If you want to run tests on BrowserStack or Sauce Labs, you will need to set the following environment variables based on your own account's API credentials:

For Sauce Labs:

* `SAUCE_USER` - your Sauce Labs username
* `SAUCE_KEY` - your Sauce Labs access key

For BrowserStack:

* `BROWSERSTACK_USER` - your BrowserStack username
* `BROWSERSTACK_KEY` - your BrowserStack access key

## Surge deployment

Some of the test commands run tests against a static site hosted with [Surge](http://surge.sh/). The test components are at  [designtesting.surge.sh](http://designtesting.surge.sh/). You can run tests against that site, but if you want to make changes, you will need to deploy your own Surge site. You can change the config variables `surgeDomain` and `surgeBaseUrl` to your own Surge site domain.

Running `npm run deploy:surge` will deploy the contents of the `dist/` directory to Surge using the domain given, so you'll need to have permissions to deploy to the given site.

## Running tests

You can run these NPM scripts to run tests in different configurations:

* `npm test` - starts a local web server and runs tests using PhantomJS. This is the fastest test run.
* `npm test:all` - starts a local web server and runs tests using the locally installed browsers listed in `test/visual/browsers-local.test`.
* `npm test:dist` - runs tests using the same local browsers as `npm test:all`, but against the public Surge site.
* `npm test:browserstack` - runs tests using BrowserStack instances specified in `test/visual/browserstack.test` against the public Surge site.
* `npm test:saucelabs` - runs tests using Sauce Labs instances specified in `test/visual/saucelabs.test` against the public Surge site.

Each of the above tasks should open the test report once finished. You can run `npm run openreport` any time to open the report yourself.

Run `npm run` to see what other scripts are available.

## TravisCI integration

This project runs tests on PhantomJS via TravisCI. You can view the [build history on the Travis CI site](https://travis-ci.org/froots/design-testing).

Galen reports are published to an S3 bucket. [Here's an example](http://design-testing-travis.s3-website-us-east-1.amazonaws.com/froots/design-testing/52/52.1/report.html) 

It is also possible to run tests on Sauce Labs or Browserstack using TravisCI. Those tests take longer, so I've stuck with the PhantomJS tests for now.

## Issues, feedback, etc.

If you have problems getting set up, create an issue and I'll do my best to sort it out! I plan to extend and improve this repository as I develop the book further.

Happy testing!
