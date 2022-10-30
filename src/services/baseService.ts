import _axios, { AxiosRequestConfig } from 'axios'
export default class BaseService {
  private static axios = _axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  static async request(params: AxiosRequestConfig) {
    try {
      const response = await BaseService.axios.request(params)
      if (response) {
        return response.data
      }
    } catch (error) {
      BaseService.handleErrors(error)
      return Promise.reject(error)
    }
  }

  static async get(url: string) {
    try {
      const response = await BaseService.axios.get(url)
      if (response) {
        return response.data
      }
    } catch (error) {
      BaseService.handleErrors(error)
      return Promise.reject(error)
    }
  }

  static async post(url: string, body: object) {
    try {
      const response = await BaseService.axios.post(url, body)
      if (response) {
        return response.data
      }
    } catch (error) {
      BaseService.handleErrors(error)
      return Promise.reject(error)
    }
  }

  private static handleErrors(e: any) {
    if (e.response) {
      const message = e.response.data.message
      const errorMessage = message ? message : 'Something went wrong'
      console.log(errorMessage)
    } else {
      console.log('Something went wrong')
    }
  }
}
