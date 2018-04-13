import fetch from '../util/fetch'

// 获取添加购物车是否成功
const fetchTest = params => fetch('POST', '/comment/get.action', params)

// 获取添加购物车是否成功
const fetchAddCart = params => fetch('POST', '/123', params)

export {
  fetchTest,
  fetchAddCart
}
