const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');


module.exports = {
  entry: './src/app.js',
	output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
  target:'node',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          }, 
        },
        exclude: /node_modules/,
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['css-loader','postcss-loader'],
        options: {
          publicPath: 'public/'
          }
      }
    ]
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./views/index.html",
      filename: "./index.html",
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), new UglifyJsPlugin()]
  }
}