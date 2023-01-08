const { merge } = require('webpack-merge')
const { baseConfig } = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  performance: {
    hints: 'warning',
    maxAssetSize: 512000,
    maxEntrypointSize: 512000,
  },
})
