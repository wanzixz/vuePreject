// 引入mockjs
const Mock = require('mockjs')

// 使用mockjs模拟数据
module.exports = {
  getComment: Mock.mock({
    'error': 0,
    message: 'success',
    'result|40': [{
      'author': '@name',
      'comment': '@cparagraph',
      'data': '@datetime',
      'ready': '@integer'
    }]
  })
}
