import request from '@/common/utils/request'

export const getNewsList = () => {
  return request.get('/news')
}
