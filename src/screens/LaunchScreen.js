import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { launchtableHead } from '../data'
import { getLaunchData, urls } from '../utils'
import axios from 'axios'

const LaunchScreen = () => {
  const source = axios.CancelToken.source()
  let path = History.location.pathname + History.location.search

  const fetchPost = async url => {
    const res = await axios.get(url)
    var data_arr = []
    getLaunchData(res.data, data_arr)

    setState({ data: data_arr, loading: true })
  }
  const [state, setState] = useState({ data: null, loading: false })
  const [filter, setFilter] = useState([])

  let params = History.location.search
  let q = params.split('=page')[1]
  let query = parseInt(q)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = state.data?.slice(indexOfFirstpage, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(() => {
    fetchPost(urls.launch)

    return () => {
      source.cancel()
    }
    // eslint-disable-next-line
  }, [])

  //<---||--->
  function filterFail() {
    var newData = state.data.filter(x => x.status === false)

    // setState(newData)
    setState({ data: newData, loading: true })
    setFilter([...filter, 'fail'])
  }

  function removeFilter() {
    fetchPost(urls.launch)

    setFilter([])
  }

  useEffect(() => {
    console.log(filter)
  }, [filter])
  // function filterSuccess() {
  //   var newData = state.data.filter(x => x.status === true)

  //   // setState(newData)
  //   setState({ data: newData, loading: true })
  // }

  return (
    <div className='Wrapper'>
      <button onClick={filterFail}>Success</button>
      <button onClick={removeFilter}>No filter</button>

      {!state.data ? (
        'loading...'
      ) : (
        <>
          <Tables
            data={currentPost}
            thead={launchtableHead}
            loading={state.loading}
            name='launch'
          />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={state.data.length}
            currentPage={currentPage}
            query={query}
            route='launch'
          />
        </>
      )}
    </div>
  )
}

export default LaunchScreen
