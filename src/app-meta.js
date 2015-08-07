// Meta data is stored on the html element
var html = document.getElementsByTagName('html')[0];

// A helper to grab our meta data
function getData(name) {
  name = `data-${name}`;
  return html.hasAttribute(name) ? html.getAttribute(name) : undefined;
}

const ENV = getData('env');
const VERSION = getData('version');
const SHA = getData('sha');

export default {ENV, VERSION, SHA};
