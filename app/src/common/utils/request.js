const baseUrl = 'https://unidemo.dcloud.net.cn/api'
const request = ({ url = '', method = 'GET', date = {}, header = {} }) => {
  return new Promise((resolve, reject) => {
    uni
      .request({
        method: method,
        url: baseUrl + url,
        data: date,
        header: header,
        dataType: 'json'
      })
      .then((response) => {
        setTimeout(function () {
          uni.hideLoading()
        }, 200)
        resolve(response[1].data)
      })
      .catch((error) => {
        reject(error[0])
      })
  })
}

const requestObj = {
  get: (url, params = {}) => {
    return request({ url, data: params })
  },
  request
}

export default requestObj
