# app-meta

Access meta data about an application.

[![Travis build status](http://img.shields.io/travis/jmeas/app-meta.svg?style=flat)](https://travis-ci.org/jmeas/app-meta)
[![Code Climate](https://codeclimate.com/github/jmeas/app-meta/badges/gpa.svg)](https://codeclimate.com/github/jmeas/app-meta)
[![Test Coverage](https://codeclimate.com/github/jmeas/app-meta/badges/coverage.svg)](https://codeclimate.com/github/jmeas/app-meta)
[![Dependency Status](https://david-dm.org/jmeas/app-meta.svg)](https://david-dm.org/jmeas/app-meta)
[![devDependency Status](https://david-dm.org/jmeas/app-meta/dev-status.svg)](https://david-dm.org/jmeas/app-meta#info=devDependencies)

Often, you will want to know meta information about the application you are working on. Three common values are:

- the version
- the commit SHA that is deployed
- the environment

This library provides a system to store and access those bits of data.

### Use

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

console.log(`Got some data:
  meta.VERSION, 
  meta.SHA, 
  meta.ENV
`);
```
