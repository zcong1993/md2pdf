const transform = require('./transform')
const createCmd = require('./cmd')
const { cwd, root } = require('./utils')

module.exports = (input, flags = {}) => {
  const { source, dest } = input
  const html = cwd(source)
  const tmpfile = root('.tmp/tmp.html')
  const tmpPdf = root('.tmp/tmp.pdf')
  return transform(html, tmpfile)
    .then(() => {
      return createCmd(Object.assign(flags, {
        output: tmpPdf,
        input: tmpfile
      }))
    })
}
