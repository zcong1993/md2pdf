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
    default: 14
  })
  .option('font-family', {
    description: 'font family',
    default: 'Arial'
  })
  .option('paper-size', {
    description: 'paper size',
    default: 'a4'
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
  console.log(`\n ${chalk.gray.bgRed.bold('error')} source file is required! \n`)
  cli.showHelp()
  process.exit(1)
}

if (!source.endsWith('.md')) {
  console.log(`\n ${chalk.gray.bgRed.bold('error')} Only support '.md' file! \n`)
  process.exit(1)
}

const opts = {
  output: argv.output,
  fontSize: argv.fontSize,
  fontFamily: argv.fontFamily,
  paperSize: argv.paperSize
}

run(source, opts)
  .then(() => {
    console.log(`\n ${chalk.gray.bgGreen.bold('success')} Done, pdf file generate is ${opts.output}\n`)
    process.exit(0)
  })
  .catch(err => {
    if (/ebook-convert/.test(err.message)) {
      console.log(chalk.blue(`\nebook-convert is required, make sure you have installed Calibre, and set into path correctly. \n`))
      console.log(chalk.yellow(`Or you can install it from Calibre: https://calibre-ebook.com\n`))
    } else {
      console.log(`\n ${chalk.gray.bgRed.bold('error')} ${err.message} \n`)
    }
    process.exit(1)
  })

