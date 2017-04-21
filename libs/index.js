const fs = require('fs-promise')
const execa = require('execa')
const transform = require('./transform')
const createCmd = require('./cmd')
const { cwd, root } = require('./utils')

module.exports = (source, flags = {}) => {
  const html = cwd(source)
  const tmpfile = root('.tmp/tmp.html')
  const tmpPdf = root('.tmp/tmp.pdf')
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
