import axios from 'axios'
import { useEffect, useState } from 'react'
import { launchDataRes, StateData } from './types'
import { parseLaunchData } from './utils'

export const useFetch = (url: string) => {
  const CancelToken = axios.CancelToken
  const source = CancelToken.source()
  const [data, setData] = useState<StateData>({ state: null, loading: false })

  useEffect(() => {
    ;(async function () {
      try {
        const { data } = await axios.get(url)
        const dataArr: launchDataRes[] = []
        parseLaunchData(data, dataArr)

        setData({ state: dataArr, loading: true })
      } catch (error) {
        console.log('error: ', error)
      }
    })()
    return () => {
      source.token
    }
  }, [url])

  return { data, setData }
}
