import 'whatwg-fetch'
// import {Message, MessageBox} from 'element-ui'

export default async (type = 'GET', url = '', data = {}, baseUrl = 'browser') => {
  let ajaxUrl = baseUrl + url
  type = type.toUpperCase()
  if (type === 'GET') {
    let datas = []
    Object.keys(data).forEach(key => {
      datas.push(key + '=' + data[key])
    })
    ajaxUrl += '?' + datas.join('&')
  }
  let requestConfig = {
    credentials: 'same-origin',
    method: type,
    headers: {
      'Accept': 'application/json',
      // 'Content-Type': 'application/json',

      'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      // token: store.state.userInfo.token

    },
    mode: 'same-origin'
  }
  if (type === 'POST') {
    let value = Object.keys(data).map((key) => {
      return encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
    })
    Object.defineProperty(requestConfig, 'body', {
      // value: JSON.stringify(data) // 转为json字符串
      value: value.join('&')
      // 转为key-value
    })
  }
  try {
    let response = await fetch(ajaxUrl, requestConfig)
    let responseJson = await response.json()

    if (responseJson.code === 30002 || responseJson.code === 30003) {
      // store.commit(types.CLEAR_USERINFO)

      // MessageBox.alert('登录超时，请重新登录', undefined, {
      //   callback: action => {
      //     let redirect = '/index'
      //     // let autoLoad =
      //     if (window.location.hash) {
      //       redirect = encodeURIComponent(window.location.hash.substring(1))
      //     }
      //     window.location.href = `${window.location.origin}#/login?redirect=${redirect}`
      //   }
      // })
    }
    // else {
    //   // if (responseJson.code !== 200 && !ajaxUrl.includes('/api/user/wechat/login')) {
    //   //   // Message({
    //   //   //   // message: responseJson.message
    //   //   //   // iconClass: 'icon-hide'
    //   //   // })
    //   // }
    // }
    return responseJson
  } catch (error) {
    throw new Error(error)
  }
}
