const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config  = {
    mode: 'development',
    entry: './src/index.js',
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
      clean: true,
      publicPath: '/',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    devServer: {
        static: path.resolve(__dirname, 'src'),
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
}

module.exports = () => {
    return config;
};