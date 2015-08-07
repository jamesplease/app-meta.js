(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.meta = factory();
})(this, function () {
  'use strict';

  // Meta data is stored on the html element
  var html = document.getElementsByTagName('html')[0];

  // A helper to grab our meta data
  function getData(name) {
    name = 'data-' + name;
    return html.hasAttribute(name) ? html.getAttribute(name) : undefined;
  }

  var ENV = getData('env');
  var VERSION = getData('version');
  var SHA = getData('sha');

  var app_meta = { ENV: ENV, VERSION: VERSION, SHA: SHA };

  return app_meta;
});
//# sourceMappingURL=app-meta.js.map