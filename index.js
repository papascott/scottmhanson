#!/usr/bin/env node
const pkgJSON = require('./package.json');
const welcome = require('cli-welcome')
const chalk = require('chalk')
const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse;
const githubColor = chalk.hex(`#6cc644`).bold.inverse;


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
