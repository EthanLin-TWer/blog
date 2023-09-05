const { merge } = require('webpack-merge')
const ManifestPlugin = require('webpack-assets-manifest')
const { baseConfig } = require('./webpack.base.config')

const defaultChunksConfiguration = {
  reuseExistingChunk: true,
  // this yields chunks within ~[20K, 40K] sizes gzipped
  minSize: 150 * 1000,
  maxSize: 300 * 1000,
}
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
          priority: 5,
        },
        react_markdown: {
          name: 'react-markdown-chunks.vendor',
          test: /[\\/]node_modules[\\/]_?(react-syntax-highlighter|react-markdown|rehype-raw|remark-gfm|github-markdown-css)/,
          priority: 4,
        },
        react_core: {
          name: 'react-core.vendor',
          test: /[\\/]node_modules[\\/]_?(react|react-dom|react-router-dom)/,
          // react core is in particular big and warrants more chunks
          // maxSize: 100000, // this will result in 4 chunks over 1
          priority: 3,
        },
        mermaid: {
          name: 'mermaid-chunks.vendor',
          test: /[\\/]node_modules[\\/]_?(mermaid)/,
          // this yields 6 19-40K sized chunks and in total 196.04K gzipped,
          // still 5x larger than react (~40K) but way better original (~702K)
          //  where elkjs+cytospace is added to the bundle.
          // this is still insane but the problem lays in mermaid core, which is
          // barely acceptable, but we should look into optimizing this.
          ...defaultChunksConfiguration,
          priority: 2,
        },
        stable: {
          name: 'stable-chunks.vendor',
          test: /[\\/]node_modules[\\/]_?(lodash|axios)/,
          priority: 1,
        },
        default: {
          name: 'default.vendor',
          test: /[\\/]node_modules[\\/]/,
          ...defaultChunksConfiguration,
          priority: 0,
        }
      },
    },
  },
  plugins: [
    new ManifestPlugin(),
  ],
})
