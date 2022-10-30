import { AxiosRequestConfig } from 'axios'
import BaseService from './baseService'

export default class WeatherService {
  static requestWeather(params: AxiosRequestConfig) {
    return BaseService.request(params)
  }

  static getWeather(url: string) {
    return BaseService.get(url)
  }
}
