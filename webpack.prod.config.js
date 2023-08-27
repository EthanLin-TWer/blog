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
      cacheGroups: {
        react_data: {
          name: 'react-data-chunks.vendor',
          test: /\/node_modules\/_?(react-redux|redux|redux-actions|redux-saga|redux-reselect|seamless-immutable)/,
          chunks: 'all',
          priority: 1,
        },
        react_markdown: {
          name: 'react-markdown-chunks.vendor',
          test: /\/node_modules\/_?(react-syntax-highlighter|react-markdown|rehype-raw|remark-gfm|github-markdown-css)/,
          chunks: 'all',
          priority: 2,
        },
        stable: {
          name: 'stable-chunks.vendor',
          test: /\/node_modules\/_?(lodash|axios)/,
          chunks: 'all',
          priority: 3,
        },
        default: {
          name: 'react-core.vendor',
          reuseExistingChunk: true,
          priority: 5,
        }
      },
    },
  },
  plugins: [
    new ManifestPlugin(),
  ],
})
