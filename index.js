#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome')
const chalk = require('chalk')
const alert = require('cli-alerts')
const checkNode = require('cli-check-node')
const unhandled = require('cli-handle-unhandled')

const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse;
const githubColor = chalk.hex(`#6cc644`).bold.inverse;

unhandled()
checkNode('12')

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

log(`
${italic(`This is my description.`)}

${twitterColor(` Twitter `)} ${dim(`https://twitter.com/ScottHansonDE`)}
${githubColor(` GitHub `)} ${dim(
  `https://github.com/papascott`
)}

`);

alert({type: 'info', msg: 'Check out my work!'})
