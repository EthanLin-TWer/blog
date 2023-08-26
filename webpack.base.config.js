const path = require('path')
const { ProvidePlugin } = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const DotenvPlugin = require('dotenv-webpack')
const dotenv = require('dotenv')

const rules = [
  { test: /\.(css)$/i, use: ['style-loader', 'css-loader'] },
  { test: /\.(styl)$/i, use: ['style-loader', 'css-loader', 'stylus-loader'] },
  {
    test: /\.(png|svg|jpg|jpeg|gif)$/i,
    type: 'asset/resource',
    generator: {
      filename: './assets/images/[hash][ext][query]',
    },
  },
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
    generator: {
      filename: './assets/fonts/[hash][ext][query]',
    },
  },
  { test: /\.(mts|ts|tsx)$/, use: 'ts-loader' },
]

const environment = process.env.NODE_ENV === 'production' ? 'production' : 'development'
const dotenvFilePath = `./.env.${environment}`

const plugins = [
  new HtmlWebpackPlugin({
    template: path.resolve(__dirname, './src/react/index.html'),
    filename: 'index.html',
    inject: 'body',
    minify: true,
  }),
  new ProvidePlugin({
    React: 'react',
    process: 'process/browser.js'
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.resolve(__dirname, './public'),
        to: path.resolve(__dirname, './dist'),
        noErrorOnMissing: true,
        filter: async (resourcePath) => {
          const resourcePathChange = resourcePath.substr(resourcePath.indexOf('public'))
          return !resourcePathChange.match(/(index\.html)$/gi)
        },
      },
    ],
  }),
  new DotenvPlugin({ path: dotenvFilePath })
]

const devServer = {
  compress: true,
  hot: true,
  open: true,
  port: process.env.PORT || 3000,
  // contentBase: path.join(__dirname, 'src/react'),
  proxy: {
    '/api': {
      target: 'http://127.0.0.1:4000',
      changeOrigin: true,
      secure: false,
    },
  },
  client: {
    overlay: false,
  },
}

const config = {
  entry: './src/react/index.tsx',
  target: ['web'],
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[hash][ext][query]',
    publicPath: dotenv.config({ path: dotenvFilePath }).parsed.CDN_URL,
  },
  resolve: {
    extensions: ['.*', '.js', '.ts', '.tsx'],
    extensionAlias: {
      '.mjs': ['.mjs', '.mts'],
    },
    fallback: {
      buffer: false,
    }
  },
  module: {
    rules,
  },
  plugins,
  devServer,
}

module.exports = {
  baseConfig: config,
  webpackBaseRules: rules,
  webpackBasePlugins: plugins,
  webpackDevServerSettings: devServer,
}
