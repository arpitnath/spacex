import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { launchtableHead } from '../data'
import { getLaunchData, urls } from '../utils'
import axios from 'axios'

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

  const applyFailFilter = state.data?.filter(x => x.status === true)
  useEffect(() => {
    fetchPost(urls.launch)

    return () => {
      source.cancel()
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    let x = History.location.search
    let partX = x.split('?q')[0]

    console.log(x)
    console.log('partX: ', partX)
    if (partX) {
      let finalQ = partX.split('?')[1]
      console.log('finalQ: ', finalQ)
      let fData = state.data?.filter(x => x.status === true)
      setState({ data: fData, loading: true })
    }
  }, [])

  //<---||--->
  function filterFail() {
    var newData = applyFailFilter

    setState({ data: newData, loading: true })
    // setCurrentPage(1)

    var findFilter = filter.find(x => x === 'success')

    if (!findFilter) {
      setFilter([...filter, 'success'])
    }
  }

  function testCheck() {
    var x = path
    var y = filter.join('&')
    var z = x + '?' + y

    setUrlPath(z)
  }

  function removeFilter() {
    fetchPost(urls.launch)

    setFilter([])
    setUrlPath(path)

    console.log(urlPath)
  }

  useEffect(() => {
    let x = History.location.search
    let partX = x.split('?q')[0]

    if (partX) {
      let finalQ = partX.split('?')[1]
      console.log('finalQ: ', finalQ)
      filterFail()
    }
  }, [History.location, query])

  useEffect(() => {
    if (filter.length !== 0) {
      testCheck()
    }
  }, [filter])

  return (
    <div className='Wrapper'>
      <button onClick={filterFail}>Filter</button>
      <button onClick={removeFilter}>No filter</button>
      {filter ? filter.map(item => <h4>{item}</h4>) : ''}
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
