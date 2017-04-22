const fs = require('fs-promise')
const handlebars = require('handlebars')
const { self } = require('./utils')

module.exports = opts => {
  const defaultOpts = {
    fontSize: 14,
    fontFamily: 'Arial',
    paperSize: 'a4'
  }
  const options = Object.assign({}, defaultOpts, opts)

  return fs.readFile(self('templates/cmd.tpl'), 'utf8')
    .then(tpl => {
      const template = handlebars.compile(tpl)
      return template(options)
    })
}
