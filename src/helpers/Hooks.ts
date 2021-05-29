import axios, { AxiosError } from 'axios'
import { useEffect, useState } from 'react'
import { launchDataRes, StateData, Error } from './types'
import { parseLaunchData } from './utils'

export const useFetch = (url: string) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  const [data, setData] = useState<StateData>({ state: null, loading: false })
  const [error, setError] = useState<Error>({
    status: 102,
    message: 'Processing'
  })

  useEffect(() => {
    ;(async function () {
      try {
        const { data, status } = await axios.get(url)

        const dataArr: launchDataRes[] = []
        parseLaunchData(data, dataArr)

        setData({ state: dataArr, loading: true })
        setError({ status: status, message: status === 200 ? 'OK' : '' })
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const err = handleError(error)
          console.log(err)
          if (err) {
            setError({ status: err?.status, message: err?.msg })
          }
        }
      }
    })()
    return () => {
      source.token
    }
  }, [url])

  return { data, setData, error }
}

const handleError = (error: AxiosError) => {
  console.log(error.config)
  if (error.response) {
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
    return { status: error.response.status, msg: error.response.data }
  } else if (error.request) {
    console.log(error.request)
    return { status: 400, msg: 'Bad Request' }
  } else {
    console.log('Error', error.message)
    return { status: 400, msg: 'Bad Request' }
  }
}
