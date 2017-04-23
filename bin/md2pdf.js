#!/usr/bin/env node
const yargs = require('yargs')
const update = require('update-notifier')
const chalk = require('chalk')

const run = require('../libs')
const pkg = require('../package.json')

update({ pkg }).notify()

const cli = yargs
  .usage('Usage: $0 <file> [options]')
  .option('output', {
    description: 'output filename',
    default: 'index.pdf'
  })
  .option('font-size', {
    description: 'font size',
    default: 12,
    type: 'number'
  })
  .option('font-family', {
    description: 'font family',
    default: 'Arial',
    type: 'string'
  })
  .option('paper-size', {
    description: 'paper size',
    default: 'a4',
    choices: ['a0', 'a1', 'a2', 'a3', 'a4', 'a5', 'a6', 'b0', 'b1', 'b2', 'b3', 'b4', 'b5', 'b6', 'legal', 'letter']
  })
  .option('no-page-numbers', {
    description: 'no page numbers',
    default: false,
    type: 'boolean'
  })
  .option('css', {
    description: 'external css file',
    type: 'string'
  })
  .version(pkg.version)
  .alias('v', 'version')
  .alias('h', 'help')
  .alias('o', 'output')
  .alias('f', 'font-size')
  .alias('p', 'paper-size')
  .help()

const argv = cli.argv

const source = argv._[0]

if (!source) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} Source file is required! \n`)
  cli.showHelp()
  process.exit(1)
}

if (!source.endsWith('.md')) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} Only support '.md' file! \n`)
  process.exit(1)
}

if (isNaN(argv.fontSize)) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} Option '--font-size' should be a number! \n`)
  process.exit(1)
}

const opts = {
  output: argv.output,
  fontSize: argv.fontSize,
  fontFamily: argv.fontFamily,
  paperSize: argv.paperSize,
  noPageNumbers: argv.noPageNumbers,
  css: argv.css
}
// debug
// console.log(argv)
// process.exit(0)

run(source, opts)
  .then(() => {
    console.log(`\n ${chalk.gray.bgGreen.bold('success')} Done, pdf file generate is ${opts.output}\n`)
    process.exit(0)
  })
  .catch(err => {
    if (/ebook-convert --version/.test(err.message)) {
      console.log(chalk.blue(`\nebook-convert is required, make sure you have installed Calibre, and set into path correctly. \n`))
      console.log(chalk.yellow(`Or you can install it from Calibre: https://calibre-ebook.com\n`))
    } else if (/markup on page breaks and flow limits/.test(err.message)) {
      console.log(`\n ${chalk.gray.bgRed.bold('error')} Maybe external css not work\n`)
    } else {
      console.log(`\n ${chalk.gray.bgRed.bold('error')} ${err.message} \n`)
    }
    process.exit(1)
  })

