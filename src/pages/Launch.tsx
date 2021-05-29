import React from 'react'
import Table from '../components/Table'
import { launchApi } from '../helpers/utils'

import styles from '../styles/scss/styles.module.scss'

import { launchHead } from '../helpers/tableheadData'
import History from '../helpers/History'
// import { delData } from '../del'
import { useFetch, usePaginate } from '../helpers/Hooks'

const Launch: React.FC = () => {
  const { data, setData, error } = useFetch(launchApi)
  const { currentPage, postsPerPage, paginate, currentPost } = usePaginate(
    data.state
  )
  const params = History.location.search
  const q = params.split('=page')[1]
  const query = parseInt(q)

  return (
    <>
      {/* Loading state => `spinner` */}
      <div className={styles.LaunchWrapper}>
        {/* Filters */}
        {error.status !== 200 ? (
          <>{error.message}</>
        ) : (
          <>
            <div className={styles.Container}>
              {/* Filter wrapper */}
              {/* buttons */}
              {/* calender modal */}
              {/* accordion */}
            </div>

            <div className={styles.Container}>
              <Table thead={launchHead} data={data.state} />
              {/* Pagination */}
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default Launch
