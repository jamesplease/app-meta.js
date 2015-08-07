# app-meta

Access meta data about an application.

[![Travis build status](http://img.shields.io/travis/jmeas/app-meta.js.svg?style=flat)](https://travis-ci.org/jmeas/app-meta.js)
[![Code Climate](https://codeclimate.com/github/jmeas/app-meta.js/badges/gpa.svg)](https://codeclimate.com/github/jmeas/app-meta.js)
[![Test Coverage](https://codeclimate.com/github/jmeas/app-meta.js/badges/coverage.svg)](https://codeclimate.com/github/jmeas/app-meta.js)
[![Dependency Status](https://david-dm.org/jmeas/app-meta.js.svg)](https://david-dm.org/jmeas/app-meta.js)
[![devDependency Status](https://david-dm.org/jmeas/app-meta.js/dev-status.svg)](https://david-dm.org/jmeas/app-meta.js#info=devDependencies)

A common feature that I include in my client side apps is meta information about the application itself. Three common values are:

- the version of the app
- the commit SHA that is deployed
- the environment that the app is running in

This library provides a simple method to store and access those bits of data that you can use across all of your apps.

### Getting Started

Set up your server to send over the meta data as `data` attributes on the `html` element. This might look like:

```hbs
<html
  lang='en'
  data-version='<%= version %>'
  data-sha='<%= sha %>',
  data-env='<%= env %>'
  >
```

Then, require in this library.

```js
import meta from 'path/to/app-meta';

console.log(
  'Got some data:', 
  meta.VERSION,
  meta.SHA,
  meta.ENV
);
```

### Browser Support

Should work in IE6+

### Module Support

It exports UMD, so it's compatible with AMD, CJS, and as a browser global (`window.meta`).