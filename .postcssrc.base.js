const autoprefixer = require('autoprefixer')
const cssnanoPlugin = require('cssnano')
const atImport = require('postcss-import')

module.exports = {
  plugins: [atImport, autoprefixer, cssnanoPlugin]
}
