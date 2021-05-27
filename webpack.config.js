const HtmlWebPackPlugin = require("html-webpack-plugin");
const dev = process.env.NODE_ENV === 'dev';
const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  template: "./src/index.html", 
  filename: "./index.html"
});

module.exports = {

    entry: ["@babel/polyfill", "./src/index.js"],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "[name].js"
    },
    plugins: [
        htmlPlugin,
        new MiniCssExtractPlugin({
            filename: `[name].min.css`,
            chunkFilename: '[id].css',
        })
    ],
    module: {
        
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /.(css|scss)$/,
                use: [
                    dev ? 'style-loader' : { loader: MiniCssExtractPlugin.loader, options: {publicPath: ''} }, 
                    'css-loader', 
                    'sass-loader'
                ]
            },
        ]
    }
};