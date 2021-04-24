import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = (url, data_function = null) => {
  const source = axios.CancelToken.source()
  const [state, setState] = useState({ data: null, loading: false })

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(url)
      var data_arr = []
      if (data_function !== null) {
        data_function(res.data, data_arr)
        setState({ data: data_arr, loading: true })
      } else {
        setState({ data: res.data, loading: true })
      }
    }
    fetchPost()

    return () => {
      source.cancel()
    }
  })

  return state
}

export const usePaginate = data => {
  const [state, setState] = useState({
    currentPage: null,
    postsPerPage: null,
    currentPost: null,
    paginate: null
  })

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = data
    ? data.slice(indexOfFirstpage, indexOfLastPost)
    : null

  const paginate = pageNumber => setCurrentPage(pageNumber)

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
        currentPost: null,
        paginate: null
      })
    }
    // eslint-disable-next-line
  }, [data])

  return state
}

export const useCounters = (url, type) => {
  const source = axios.CancelToken.source()
  const [state, setState] = useState({ data: null })

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(url)
      const counter = await res.headers[`${type}`]

      setState({ data: counter })
    }
    fetchPost()

    return () => {
      source.cancel()
    }
    // eslint-disable-next-line
  }, [url])

  return state
}
