import React, { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import { useFetch } from '../useFetch'

const LaunchScreen = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const [currentPage, setCurrentPage] = useState(1)
  const [postsPerPage] = useState(10)

  const indexOfLastPost = currentPage * postsPerPage
  const indexOfFirstpage = indexOfLastPost - postsPerPage
  const currentPost = data
    ? data.slice(indexOfFirstpage, indexOfLastPost)
    : null

  const paginate = pageNumber => setCurrentPage(pageNumber)

  // useEffect(() => {
  //   //query need to add
  //   paginate(url)
  // })

  return (
    <div className='Wrapper'>
      <h1>Launch Screen</h1>

      {!data ? (
        'loading...'
      ) : (
        <>
          <Tables data={currentPost} loading={loading} />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            currentPage={currentPage}
          />
        </>
      )}
    </div>
  )
}

export default LaunchScreen
