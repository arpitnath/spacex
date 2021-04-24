import React from 'react'
import { useFetch, usePaginate } from '../Hooks'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { capsuletableHead } from '../data'
import { getCapsuleData, urls } from '../utils'

const CapsuleScreen = () => {
  const { data, loading } = useFetch(urls.capsules, getCapsuleData)
  const { currentPage, postsPerPage, paginate, currentPost } = usePaginate(data)

  let params = History.location.search
  let q = params.split('=page')[1]
  let query = parseInt(q)

  return (
    <div className='Wrapper'>
      {!data ? (
        'loading...'
      ) : (
        <>
          <Tables
            data={currentPost}
            thead={capsuletableHead}
            loading={loading}
            name='capsule'
          />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            currentPage={currentPage}
            query={query}
            route='capsule'
          />
        </>
      )}
    </div>
  )
}

export default CapsuleScreen
