// 压缩js插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge')
const beseConfig = require('./base.config')

// 支持导出
module.exports = webpackMerge(beseConfig, {
  plugins: [
    new UglifyjsWebpackPlugin()
  ]
})