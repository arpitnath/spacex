import axios from 'axios'
import { useEffect, useState } from 'react'

export const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: false })

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(url)
      setState({ data: res.data, loading: true })
    }
    fetchPost()
  }, [url, setState])

  return state
}
