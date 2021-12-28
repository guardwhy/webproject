// 获得路径
const webpackMerge = require('webpack-merge')
const baseConfig = require('./base.config')

// 支持导出
module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist',
    inline: true
  }
})