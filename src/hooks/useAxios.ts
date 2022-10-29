import { AxiosRequestConfig } from 'axios'
import { useState } from 'react'

import axios from '../api/index'

export const useAxios = (defaultParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<any>(undefined)
  const [error, setError] = useState<any>('')
  const [loading, setLoading] = useState<boolean>(false)

  const fetch = async (params: AxiosRequestConfig = defaultParams) => {
    try {
      setLoading(true)
      const { data } = await axios.request(params)
      setResponse(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  return { fetch, error, loading, response }
}
