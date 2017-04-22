const path = require('path')
const fs = require('fs-promise')
const marked3 = require('marked3')
const handlebars = require('handlebars')
const Prism = require('prismjs')
const { self } = require('./utils')

// override render method
const renderer = new marked3.Renderer()
renderer.link = (href, title, text) => {
  if (href.endsWith('.md')) {
    href = href.replace(/.md$/, '.html')
  }
  let out = `<a href="${href}"`
  if (title) {
    out += ` title="${title}"`
  }
  out += `>${text}</a>`
  return out
}

// renderer.image = (href, title, text) => {
//   if (!/^http/.test(href)) { // eslint-disable-line unicorn/prefer-starts-ends-with
//     href = path.resolve(__dirname, '..', href)
//   }
//   let out = `<img src="${href}" alt="${text}"`
//   if (title) {
//     out += ` title="${title}"`
//   }
//   out += '>'
//   return out
// }

module.exports = (source, dest) => {
  return fs.readFile(self('templates/template.html'), 'utf8')
    .then(tpl => {
      const template = handlebars.compile(tpl)

      const content = marked3(fs.readFileSync(source, 'utf8'), {
        renderer,
        highlight: (code, lang) => Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)
      })

      // const defaultStyles = [
      //   'css/pdf.css',
      //   'css/highlight/ebook.css',
      //   'css/highlight/prism.css'
      // ]

      // const styles = Array.from(defaultStyles, x => self(x))

      const html = template({
        title: path.basename(source, '.md') || 'index',
        content
      })

      return fs.writeFile(dest, html)
    })
}
