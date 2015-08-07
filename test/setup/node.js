require('simple-jsdom').install();
var $ = require('jquery');

// Ensure that the document resembles the spec runner
$('html')
  .attr('data-version', '2.0.0')
  .attr('data-env', 'development');

global.chai = require('chai');
global.sinon = require('sinon');
global.chai.use(require('sinon-chai'));

require('babel-core/register');
require('./setup')();
