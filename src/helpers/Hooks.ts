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

type PaginateState = {
  currentPage: number | null
  postsPerPage: number | null
  currentPost: launchDataRes[] | null
  paginate: (pageNumber: number) => void
}

export const usePaginate = (data: launchDataRes[] | null) => {
  const [state, setState] = useState<PaginateState>({
    currentPage: null,
    postsPerPage: null,
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
    setState({
      currentPage: currentPage,
      postsPerPage: postsPerPage,
      currentPost: currentPost,
      paginate: paginate
    })
    return () => {
      setState({
        currentPage: null,
        postsPerPage: null,
        currentPost: [],
        paginate: function () {
          return
        }
      })
      setLoading(false)
    }
  }, [loading])

  return state
}
