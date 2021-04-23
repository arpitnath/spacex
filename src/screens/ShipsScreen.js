import React from 'react'
import { useFetch, usePaginate } from '../Hooks'
import Pagination from '../components/Pagination'
import Tables from '../components/Tables'
import History from '../components/History'
import { shiptableHead } from '../data'
import { getShipData } from '../utils'

const ShipsScreen = () => {
  const { data, loading } = useFetch(
    'https://api.spacexdata.com/v3/ships',
    getShipData
  )
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
            thead={shiptableHead}
            loading={loading}
            name='ship'
          />
          <Pagination
            paginate={paginate}
            postsPerPage={postsPerPage}
            totalPosts={data.length}
            currentPage={currentPage}
            query={query}
            route='ships'
          />
        </>
      )}
    </div>
  )
}

export default ShipsScreen
