#!/usr/bin/env node

const pkgJSON = require('./package.json');
const welcome = require('cli-welcome')

welcome({
  title: pkgJSON.name,
  tagLine: 'Howdy, nice meet to you!',
  description: pkgJSON.description,
  version: pkgJSON.version,
  bgColor: `#FADC00`,
  color: `#000000`,
  bold: true,
  clear: true,
});

console.log(`
Scott Hanson

Twitter: https://twitter.com/ScottHansonDE
GitHub: https://github.com/papascott

`)
