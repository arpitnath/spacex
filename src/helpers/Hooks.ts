import axios from 'axios'
import { useEffect, useState } from 'react'
import { launchDataRes, StateData, Error } from './types'
import { parseLaunchData, handleError } from './utils'

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
