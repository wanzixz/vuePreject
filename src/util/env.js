/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl : 路由地址域名
 *
 */
let baseUrl
let routerMode
let platForm = 1 // 登录平台，默认微信登录
let browser = window.navigator.userAgent
if (browser.match(/micromessenger/i)) { // 微信
  platForm = 1
} else if (browser.match(/alipayclient/i)) { // 支付宝
  platForm = 3
}
if (process.env.NODE_ENV === 'development') {
  baseUrl = '/api'
  routerMode = 'history'
} else {
  baseUrl = '/api'
  routerMode = 'history'
}

export {baseUrl, routerMode, platForm}
