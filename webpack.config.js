var ngAnnotatePlugin = require('ng-annotate-webpack-plugin');

module.exports = {
    entry: {
        vendor: './app/vendor.js',
        bundle: './app/app.js'
    },
    output: {
        path: __dirname,
        filename: './dist/[name].js'
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
    },
    plugins: [
        new ngAnnotatePlugin({
            add: true,
            map: true
        })
    ]
};
