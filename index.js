#!/usr/bin/env node
const chalk = require('chalk')
const alert = require('cli-alerts')
const init = require('./utils/init')

const log = console.log
const dim = chalk.dim
const italic = chalk.italic
const twitterColor = chalk.hex(`#1da1f2`).bold.inverse;
const githubColor = chalk.hex(`#6cc644`).bold.inverse;

(() => {
  init();

  log(`

${italic(`This is my description.`)}
${twitterColor(` Twitter `)} ${dim(`https://twitter.com/ScottHansonDE`)}
${githubColor(` GitHub `)} ${dim(`https://github.com/papascott`)}

`);

  alert({ type: 'info', msg: 'Check out my work!' });
})()
