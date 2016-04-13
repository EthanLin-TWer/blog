module.exports = {
    entry: './app/app.js',
    output: {
        path: __dirname,
        filename: './dist/bundle.js'
    },
    resolve: {
        extensions: ['', '.js']
    },
    modulesDirectories: ["node_modules"],
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel', // 'babel-loader' is also a legal name to reference
          query: {
            presets: ['es2015', 'stage-1']
          }
        }
      ]
    }

};
