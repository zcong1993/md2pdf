const path = require('path')

exports.cwd = p => path.resolve(process.cwd(), p)

exports.self = p => path.resolve(__dirname, '..', p)
