const path = require('path')
const os = require('os')
const fso = require('fs')
const fs = require('fs-promise')
const execa = require('execa')
const transform = require('./transform')
const createCmd = require('./cmd')
const { cwd, self } = require('./utils')

module.exports = (source, flags = {}) => {
  const html = cwd(source)
  const tmpRoot = os.tmpdir()
  const tmpPath = fs.mkdirsSync(path.join(tmpRoot, 'md2pdf' + Date.now()))
  // console.log(tmpPath)
  const tmpfile = path.resolve(tmpPath, 'tmp.html')
  const tmpPdf = path.resolve(tmpPath, 'tmp.pdf')
  return transform(html, tmpfile, flags)
    .then(() => execa.shell('ebook-convert --version'))
    .then(() => fs.copy(self('css'), path.resolve(tmpPath, 'css')))
    .then(() => {
      if (fso.existsSync(cwd('assets'))) {
        return fs.copy(cwd('assets'), path.resolve(tmpPath, 'assets'))
      }
      return Promise.resolve(true)
    })
    .then(() => {
      return createCmd(Object.assign({}, flags, {
        output: tmpPdf,
        input: tmpfile
      }))
    })
    .then(cmd => execa.shell(cmd))
    .then(() => fs.copy(tmpPdf, cwd(flags.output)))
    .then(() => fs.remove(tmpPath))
}
