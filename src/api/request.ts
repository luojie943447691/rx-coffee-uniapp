import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { service } from './service'

interface RequestConfig extends AxiosRequestConfig {
  // 可以在这里添加自定义配置
  showLoading?: boolean
  showError?: boolean
}

function createRequest(service: AxiosInstance) {
  function request<T = any>(config: RequestConfig): Promise<T> {
    // config 自定义配置
    // axios默认配置
    const configDefault: RequestConfig = {
      baseURL: import.meta.env.VITE_APP_API_BASEURL, // 所有通过此配置的基础地址 在.env文件配置
      timeout: 15000, // 请求超时时间
      responseType: 'json', // 响应类型
      headers: {
        // 请求头配置...
      }
    }
    const requestConfig = Object.assign(configDefault, config)
    return service(requestConfig) as Promise<T>
  }
  return request
}

export const request = createRequest(service)
