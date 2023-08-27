const { merge } = require('webpack-merge')
const ManifestPlugin = require('webpack-assets-manifest')
const { baseConfig } = require('./webpack.base.config')

module.exports = merge(baseConfig, {
  mode: 'production',
  stats: {
    colors: true,
    children: true,
  },
  optimization: {
    minimize: true,
    usedExports: true,
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        react_data: {
          name: 'react-data-chunks.vendor',
          // See first warning of why we put [\\/] instead of \/
          // https://webpack.js.org/plugins/split-chunks-plugin/#optimizationsplitchunks
          test: /[\\/]node_modules[\\/]_?(react-redux|redux|redux-actions|redux-saga|reselect|seamless-immutable)/,
          priority: 1,
        },
        react_markdown: {
          name: 'react-markdown-chunks.vendor',
          test: /[\\/]node_modules[\\/]_?(react-syntax-highlighter|react-markdown|rehype-raw|remark-gfm|github-markdown-css)/,
          priority: 2,
        },
        stable: {
          name: 'stable-chunks.vendor',
          test: /[\\/]node_modules[\\/]_?(lodash|axios)/,
          priority: 3,
        },
        default: {
          name: 'react-core.vendor',
          test: /[\\/]node_modules[\\/]_?(react|react-dom|react-router-dom)/,
          // react core is in particular big and warrants more chunks
          maxSize: 100000, // this will result in 4 chunks over 1
          priority: 5,
        }
      },
    },
  },
  plugins: [
    new ManifestPlugin(),
  ],
})
