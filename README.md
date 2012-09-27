TiddlyBone
==========

An example tsapp using Backbone.js and various other libraries and frameworks.

Local Development
=================

Requires:

* [Node](http://nodejs.org/) and NPM
* [PhantomJS](http://phantomjs.org/)
* [tsapp](https://github.com/cdent/tsapp).  The documentation there should suffice.

Run `npm install` to fetch the required node modules.

Run `jam install` to fetch the required JavaScript dependencies.

Run `grunt copy-deps` to copy JavaScript dependencies into the assets folder so that they can be used by tsapp.

Testing
=======

run `grunt jasmine` to run tests in the terminal or `grunt jasmine-server` to run in a browser.

Space Inclusion
===============

From your space, include tiddlybone then navigate to /tiddlybone.

Todo
====

* Further testing.
* Error handling.
* Tiddler validation.
* grunt wrapper for jam.