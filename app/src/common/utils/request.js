const http = ({
  url = '',
  method = 'GET',
  data = {},
  header = {},
  showLoading = true,
  loadingTitle = 'loading'
}) => {
  const token = uni.getStorageSync('accessToken')
  const defaultHeader = {
    'Content-Type': 'application/json',
    Authorization: token ? 'Bearer ' + token : ''
  }
  header = {
    ...defaultHeader,
    ...header
  }
  return new Promise((resolve, reject) => {
    if (showLoading) {
      uni.showLoading({
        title: loadingTitle,
        mask: true
      })
    }
    uni.request({
      url: url,
      data: data,
      header: header,
      timeout: 10000,
      method: method,
      dataType: 'json',
      success: res => {
        if (res.statusCode == 200) {
          resolve(res.data)
        } else if (res.statusCode == 401) {
          reject(new Error('User Not Authorized'))
        } else {
          reject(new Error('server error'))
        }
      },
      complete: () => {
        if (showLoading) {
          uni.hideLoading()
        }
      },
      fail: () => {
        reject(new Error('request failed'))
      }
    })
  })
}
const request = {
  get: ({ url, params = {}, header = {}, showLoading = true, loadingTitle = 'loading' }) => {
    return http({ url, data: params, header, showLoading, loadingTitle })
  },
  post: ({ url, data = {}, header = {}, showLoading = true, loadingTitle = 'loading' }) => {
    return http({ url, method: 'POST', data, header, showLoading, loadingTitle })
  },
  put: ({ url, data = {}, header = {}, showLoading = true, loadingTitle = 'loading' }) => {
    return http({ url, method: 'PUT', data, header, showLoading, loadingTitle })
  },
  delete: ({ url, data = {}, header = {}, showLoading = true, loadingTitle = 'loading' }) => {
    return http({ url, method: 'DELETE', data, header, showLoading, loadingTitle })
  },
  request: http
}

export default request
