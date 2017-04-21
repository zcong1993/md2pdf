const fs = require('fs-promise')
const handlebars = require('handlebars')

module.exports = opts => {
  const defaultOpts = {
    fontSize: 16,
    fontFamily: 'Arial',
    paperSize: 'a4'
  }
  const options = Object.assign({}, defaultOpts, opts)

  return fs.readFile('./templates/cmd.tpl', 'utf8')
    .then(tpl => {
      const template = handlebars.compile(tpl)
      return template(options)
    })
}
