import { AxiosError, AxiosResponse } from 'axios'

interface UniToastOptions {
  title: string
  icon?: 'success' | 'loading' | 'error' | 'none'
  duration?: number
  mask?: boolean
}

// 请求状态错误
export const httpLogError = (error: AxiosError, msg: string) => {
  error.message = msg
  uni.showToast({
    title: msg,
    icon: 'error',
    duration: 2000
  } as UniToastOptions)
}

// api请求错误
export const requestError = (response: AxiosResponse) => {
  return new Promise((_, reject) => {
    const { data } = response
    const msg = `api请求出错 ${response.config.url}：${data.message}`
    uni.showToast({
      title: msg,
      icon: 'error',
      duration: 2000
    } as UniToastOptions)
    reject(data)
  })
}

// 登录失效
export const throttleToLogin = () => {
  // uni.navigateTo({ url: '/pages/login/login' })
}
