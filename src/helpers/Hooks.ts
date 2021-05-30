import axios from 'axios'
import { useEffect, useState } from 'react'
import { launchDataRes, StateData, Error } from './types'
import { parseLaunchData, handleError } from './utils'
import History from './History'

export const useFetch = (url: string) => {
  const source = axios.CancelToken.source()
  const [data, setData] = useState<StateData>({ state: null, loading: false })
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

          const dataArr: launchDataRes[] = []
          parseLaunchData(data, dataArr)
          console.log(status === 200 && 'OK!')
          setData({ state: dataArr, loading: true })
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

  return { data, setData, error }
}

export interface IPaginateState {
  currentPage: number
  postsPerPage: number
  currentPost: launchDataRes[] | null
  paginate: (pageNumber: number) => void
}

export const usePaginate = (data: launchDataRes[] | null) => {
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

  return { pgState, setPgState }
}
