import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'
import WeatherService from 'services/weatherService'

export const useAxios = (defaultParams?: AxiosRequestConfig) => {
  const [response, setResponse] = useState<any>(undefined)
  const [error, setError] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async (params: AxiosRequestConfig | undefined = defaultParams) => {
    try {
      setLoading(true)
      const response = await WeatherService.requestWeather(params!)
      setResponse(response)
      setError('')
    } catch (error) {
      setError(error)
      setResponse(undefined)
    } finally {
      setLoading(false)
    }
  }

  return { fetch, error, loading, response }
}
