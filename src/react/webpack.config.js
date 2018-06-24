const path = require('path')

const HtmlWebpackPlugin = require('html-webpack-plugin')

const HtmlPlugin = new HtmlWebpackPlugin({
  // TODO: [Linesh][2018/6/24] bad smell: template is relative to src/react, yet filename is relative to root
  template: './index.html',
  filename: './index.html',
})

module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js',
    // TODO: [Linesh][2018/6/24] not quite modularized to put dist in two upper directories
    path: path.resolve(__dirname, '../../dist'),
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [HtmlPlugin],
}
