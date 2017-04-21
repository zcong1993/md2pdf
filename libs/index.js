const path = require('path')
const os = require('os')
const fs = require('fs-promise')
const execa = require('execa')
const transform = require('./transform')
const createCmd = require('./cmd')
const { cwd } = require('./utils')

module.exports = (source, flags = {}) => {
  const html = cwd(source)
  const tmpPath = os.tmpdir()
  const tmpfile = path.resolve(tmpPath, 'tmp.html')
  const tmpPdf = path.resolve(tmpPath, 'tmp.pdf')
  return transform(html, tmpfile)
    .then(() => execa.shell('ebook-convert --version'))
    .then(() => {
      return createCmd(Object.assign({}, flags, {
        output: tmpPdf,
        input: tmpfile
      }))
    })
    .then(cmd => execa.shell(cmd))
    .then(() => fs.copy(tmpPdf, cwd(flags.output)))
}
