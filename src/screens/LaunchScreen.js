import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import { useFetch, usePaginate } from '../Hooks'
import History from '../components/History'
import { launchtableHead } from '../data'
import axios from 'axios'

const LaunchScreen = () => {
  const base_url = 'https://api.spacexdata.com/v3/launches'
  const source = axios.CancelToken.source()

  const fetchPost = async url => {
    const res = await axios.get(url)
    setState(res.data)
  }

  const [state, setState] = useState([])

  let params = History.location.search
  let q = params.split('=page')[1]
  let query = parseInt(q)
  //<------||----->
  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = state?.slice(indexOfFirstpage, indexOfLastPost)

  const paginate = pageNumber => setCurrentPage(pageNumber)
  //<------||----->

  function filter() {
    var newData = state.filter(x => x.launch_success === false)

    setState(newData)
  }
  function filterYear() {
    var newData = state.filter(x => x.launch_year === '2008')

    setState(newData)
  }

  function launchYear() {
    fetchPost(`${base_url}?launch_year=2018`)
  }

  useEffect(() => {
    fetchPost(base_url)

    return () => {
      source.cancel()
    }
  }, [])

  return (
    <div className='Wrapper'>
      {!state ? (
        'loading...'
      ) : (
        <>
          <button onClick={filter}>Filter</button>
          <button onClick={launchYear}>2018</button>
          <button onClick={filterYear}>2008</button>
          <Tables data={currentPost} thead={launchtableHead} />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={state.length}
            currentPage={currentPage}
            query={query}
          />
        </>
      )}
    </div>
  )
}

export default LaunchScreen
