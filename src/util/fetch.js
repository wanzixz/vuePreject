import 'whatwg-fetch'
import { baseUrl, platForm } from './env'

export default (type = 'GET', url = '', data = {}, defaultMode, old, returnFlag) => {
  return new Promise((resolve, reject) => { // 返回一个promise
    type = type.toUpperCase()
    let requestObj = {
      credentials: 'include',
      method: type,
      headers: {
        'callbackurl': window.location.href,
        'x-platform-type': platForm
      }
    }
    requestObj.headers['Content-Type'] = 'application/json;charset=UTF-8'

    if (type === 'GET') {
      let dataStr = '' // 数据拼接字符串
      Object.keys(data).forEach(key => {
        if (data[key] === 0 || data[key]) {
          dataStr += key + '=' + data[key] + '&'
        }
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
    } else if (type === 'POST') {
      Object.defineProperty(requestObj, 'body', {
        value: JSON.stringify(data)
      })
    } else if (type === 'PUT') {
      Object.defineProperty(requestObj, 'body', {
        value: JSON.stringify(data)
      })
    } else {
      reject('error type') // eslint-disable-line
    }
    fetch(baseUrl + url, requestObj).then(res => {
      if (res.status === 400) {
        return res.json()
      } else if (res.status === 401) {
        localStorage.clear()
        location.href = '/'
      } else {
        return res.json()
      }
    }).then(data => {
      if (data) {
        resolve(data)
      } else {
        reject('no data') // eslint-disable-line
      }
    }).catch(err => {
      reject(err)
    })
  })
}
