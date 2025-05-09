import { useEffect, useState } from 'react'
import axios from 'axios'
import { API_BASE_URL } from '../constants'

const apiService = axios.create({
  baseURL: API_BASE_URL,
})

const useAPI = (url: string) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      setError(null)
      try {
        const response = await apiService.get(url)
        setData(response.data)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }
    getData();
  }, [url])

  return { data, loading, error }
}

export default useAPI
