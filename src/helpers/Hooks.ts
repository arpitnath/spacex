import axios from 'axios'
import { useEffect, useState } from 'react'
import {
  launchDataRes,
  StateData,
  Error,
  InfoData,
  CapsuleData,
  capsuleDataRes
} from './types'
import { parseLaunchData, handleError } from './utils'
import History from './History'

const source = axios.CancelToken.source()
export const useFetch = (url: string, api: string) => {
  const [data, setData] = useState<StateData>({ state: null, loading: false })
  const [info, setInfo] = useState<InfoData>({ state: null, loading: false })
  const [capsule, setCapsule] = useState<CapsuleData>({
    state: null,
    loading: false
  })
  const [error, setError] = useState<Error>({
    status: 100,
    message: 'continue'
  })

  useEffect(() => {
    const _locaton: string = History.location.search
    ;(async function () {
      if (_locaton.includes('filter') === false) {
        try {
          const { data, status } = await axios.get(url)

          if (api === 'launch') {
            const dataArr: launchDataRes[] = []
            parseLaunchData(data, dataArr)
            setData({ state: dataArr, loading: true })
          }

          if (api === 'info' || api === 'capsule') {
            setInfo({ state: data, loading: true })
          }

          if (api === 'capsule') {
            setCapsule({ state: data, loading: true })
          }

          console.log(status === 200 && 'OK!')
        } catch (error) {
          if (axios.isAxiosError(error)) {
            const err = handleError(error)
            console.log(err)
            if (err) {
              setError({ status: err?.status, message: err?.msg })
            }
          }
        }
      }
    })()

    return () => {
      source.cancel()
    }
    // eslint-disable-next-line
  }, [])

  return { data, setData, error, info, capsule }
}

export interface IPaginateState {
  currentPage: number
  postsPerPage: number
  currentPost: capsuleDataRes[] | null
  paginate: (pageNumber: number) => void
}

export const usePaginate = (data: capsuleDataRes[] | null) => {
  const [pgState, setPgState] = useState<IPaginateState>({
    currentPage: 0,
    postsPerPage: 10,
    currentPost: [],
    paginate: function () {
      return
    }
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const [loading, setLoading] = useState(false)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = data
    ? data.slice(indexOfFirstpage, indexOfLastPost)
    : null

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber)
    setLoading(true)
  }

  useEffect(() => {
    setPgState({
      currentPage: currentPage,
      postsPerPage: postsPerPage,
      currentPost: currentPost,
      paginate: paginate
    })
    return () => {
      setPgState({
        currentPage: 0,
        postsPerPage: 10,
        currentPost: [],
        paginate: function () {
          return
        }
      })
      setLoading(false)
    }
    // eslint-disable-next-line
  }, [loading])

  return pgState
}

interface ICounter {
  data: string
}

export const useCounter = (url: string, type: string) => {
  const [state, setState] = useState<ICounter>({ data: '0' })

  useEffect(() => {
    ;(async function () {
      try {
        const res = await axios.get(url)
        const counter = await res.headers[`${type}`]
        setState({ data: counter })
      } catch (error) {
        if (axios.isAxiosError(error)) {
          const err = handleError(error)
          console.log(err)
          if (err) {
            console.error(err.status, err.msg)
          }
        }
      }
    })()

    return () => {
      source.cancel()
    }
  }, [url, type])

  return state
}
