/* Our client cide (in client/homePage.jsx) needs to be built so
   that it can be run by the chromium browser inside of electron.

   We will import the terser plugin to prevent webpack from
   generating licensing files for each of our bundles that
   imports React.
*/

const path = require('path');
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    entry: {
        homePage: './client/homePage.jsx'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                },
            },
        ],
    },
    optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            extractComments: false,
          }),
        ],
    },
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'hosted'),
        filename: '[name]bundle.js',
    },
};