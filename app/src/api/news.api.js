import request from '@/common/utils/request'
const baseUrl = `${process.uniEnv.GATEWAY_URL}/api`
export const getNewsList = () => {
  console.log('url', baseUrl)
  return request.get({url: `${baseUrl}/news`})
}
