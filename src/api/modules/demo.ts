/**
 * 命名=》API_xxx_methodName
 */

import { request } from '@/api/request'

interface ApiMethods {
  API_DEMO_POST: <T = any>(data?: Record<string, any>) => Promise<T>
  API_DEMO_GET: <T = any>(params?: Record<string, any>) => Promise<T>
}

const api: ApiMethods = {
  API_DEMO_POST<T = any>(data = {}) {
    return request<T>({
      url: 'demo/mock',
      method: 'post',
      data
    })
  },

  API_DEMO_GET<T = any>(params = {}) {
    return request<T>({
      url: '/demo/get',
      method: 'get',
      params
    })
  }
}

export default api
