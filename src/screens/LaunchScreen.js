import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { launchtableHead } from '../data'
import { getLaunchData, urls } from '../utils'
import axios from 'axios'
import FilterBtns from '../components/FilterBtns'

const LaunchScreen = () => {
  const source = axios.CancelToken.source()
  let path = History.location.pathname.split('/')[1]

  const fetchPost = async url => {
    const res = await axios.get(url)
    var data_arr = []
    getLaunchData(res.data, data_arr)

    setState({ data: data_arr, loading: true })
  }
  const [state, setState] = useState({ data: null, loading: false })
  const [filter, setFilter] = useState([])

  const [urlPath, setUrlPath] = useState(path)

  let params = History.location.search
  let q = params.split('=page')[1]
  let query = parseInt(q)

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = state.data?.slice(indexOfFirstpage, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  const applyFailFilter = state.data?.filter(x => x.status === false)
  const applySuccessFilter = state.data?.filter(x => x.status === true)

  function filterWithStatus(status) {
    let findFilter = filter.find(x => x === status)
    if (!findFilter) {
      if (status === 'success') {
        let newData = applySuccessFilter
        setState({ data: newData, loading: true })
        setFilter([status])
        setCurrentPage(1)
      }
      if (status === 'fail') {
        let newData = applyFailFilter
        setState({ data: newData, loading: true })
        setFilter([status])
        setCurrentPage(1)
      }
    }
  }

  function getUrl() {
    var Path = path
    var options = filter.join('&')
    var urlQuery = Path + '?filter=' + options

    return urlQuery
  }

  function updateUrl() {
    const urlQuery = getUrl()

    setUrlPath(urlQuery)
  }

  function removeFilter() {
    fetchPost(urls.launch)

    setFilter([])
    setUrlPath(path)
    setCurrentPage(1)
  }

  useEffect(() => {
    fetchPost(urls.launch)

    return () => {
      source.cancel()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    // const x = History.location.pathname.split('/')[1] + History.location.search

    if (filter.length !== 0) {
      updateUrl()
    }
  }, [History.location, filter])

  return (
    <div className='Wrapper'>
      <FilterBtns filter={filterWithStatus} Props={filter} />
      <button onClick={removeFilter}>No filter</button>

      {filter ? filter.map((item, idx) => <h4 key={idx}>{item}</h4>) : ''}
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
            route={urlPath}
          />
        </>
      )}
    </div>
  )
}

export default LaunchScreen
