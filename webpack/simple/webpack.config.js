/*
 * @Author: xwen
 * @Date: 2020-04-08 10:01:00
 * @LastEditTime: 2020-04-08 14:22:38
 * @LastEditors: xwen
 * @Description:
 */

const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

  entry: './src/index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'index.js',
    publicPath: '/assets/'
  },

  devServer: {
    port: 8888,
    host: '127.0.0.1',
    publicPath: '/assets/',
    // compress: true, // 一切服务都启用 gzip 压缩
    overlay: { // 出现编译错误或警告时，在浏览器中显示全屏覆盖
      warnings: false,
      errors: true
    }
    // noInfo: true
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif|eot|ttf|woff|woff2|svg|svgz)(\?.+)?$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunksSortMode: 'none'
    })
  ]
}
