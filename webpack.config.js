let path = require('path');
let FaviconsWebpackPlugin = require('favicons-webpack-plugin');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
    entry: ['@babel/polyfill', './app/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
            {
                test: /\.(png|eot|svg|gif)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            },
        ]
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new FaviconsWebpackPlugin('./app/img/favicon.png'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
        // Used to copy all files in public folder to root of dist bundle
        new CopyWebpackPlugin([
            { from: 'public'}
        ])
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};