# Galen Framework CSS testing example

This repository contains companion code and example tests for the book [Automated Testing for Web Designers](https://gumroad.com/l/Dgbv), available to buy now on Gumroad.

These instructions are currently for OS X only. They should also work for standard Linux distros.

## Pre-requisites

* [NodeJS](https://nodejs.org)
* [NPM](https://www.npmjs.com/)
* [PhantomJS](http://phantomjs.org/)
* [Chromedriver](https://sites.google.com/a/chromium.org/chromedriver/) - install using `brew install chromedriver` for OS X
* [Java JDK](http://www.oracle.com/technetwork/java/javase/downloads/index.html) 1.7 or above
* A webserver

## Setup

Clone this repository, then:

`npm install -g galenframework-cli && npm install`

## Running tests

Run a webserver to serve the directory, preferably with a port number of 8000. For OS X, run `python -m SimpleHTTPServer` from a command prompt.

From another prompt:

* Run `npm run suite` to run the full suite of tests across PhantomJS, Chrome and Firefox and then open the resulting report. If you don't have all of the browsers, or the necessary WebDriver implementations, you can remove them from the table in `test/visual/suite.test`.

Some tests are designed to fail so you can see the output.

If you have problems getting set up, create an issue and I'll do my best to sort it out! I plan to extend and improve this repository as I develop the book further.

Happy testing!