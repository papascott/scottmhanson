const welcome = require('cli-welcome');
const checkNode = require('cli-check-node');
const unhandled = require('cli-handle-unhandled');
const pkgJSON = require('./../package.json');

module.exports = () => {
  unhandled();

  welcome({
    title: 'Scott Hanson',
    tagLine: 'Howdy, nice meet to you!',
    description: pkgJSON.description,
    version: pkgJSON.version,
    bgColor: `#6937ff`,
    color: `#000000`,
    bold: true,
    clear: true,
  });

  checkNode('12');
};
