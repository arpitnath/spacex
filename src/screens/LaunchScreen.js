import React from 'react'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import { useFetch, usePaginate } from '../Hooks'

const LaunchScreen = () => {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts'
  )

  const { currentPage, postsPerPage, paginate, currentPost } = usePaginate(data)

  // useEffect(() => {
  //   //query need to add
  //   paginate(url)
  // })

  return (
    <div className='Wrapper'>
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
