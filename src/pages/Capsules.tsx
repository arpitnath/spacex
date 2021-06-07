import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import Table from '../components/Table'
import { useFetch, usePaginate } from '../helpers/Hooks'
import { uri } from '../helpers/utils'
import { capsuleHead } from '../helpers/tableheadData'
import History from '../helpers/History'

import styles from '../styles/scss/styles.module.scss'
import Pagination from '../components/Pagination'

const Capsules = () => {
  const apiUrl = process.env.REACT_APP_SPACEX_BASE_API + uri.CAPSULES

  const { capsule, error } = useFetch(apiUrl, 'capsule')
  const { currentPage, postsPerPage, paginate, currentPost } = usePaginate(
    capsule.state
  )

  const params = History.location.search
  const q = params.split('=page')[1]
  const query = parseInt(q)

  return (
    <div className={styles.CapsuleWrapper}>
      {error.status !== 100 && (
        <Error error={error.message} status={error.status.toString()} />
      )}

      {!capsule.loading && error.status === 100 ? (
        <Loader />
      ) : (
        <div className={styles.Container}>
          <Table data={currentPost} thead={capsuleHead} />
          {capsule.state !== null && (
            <Pagination
              paginate={paginate}
              postsPerPage={postsPerPage}
              totalPosts={capsule.state.length}
              currentPage={currentPage}
              query={query}
              route='capsule'
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Capsules
