var path = require('path');
var FaviconsWebpackPlugin = require('favicons-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
        // new FaviconsWebpackPlugin('./app/img/favicon.png'),
        new HtmlWebpackPlugin({
            template: 'app/index.html',
        }),
    ],
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
};