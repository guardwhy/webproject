// 1.获得路径
const path = require('path');

// 支持导出
module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename:'bundle.js'
  },
}