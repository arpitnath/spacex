import React, { useCallback, useState } from 'react'
import Table from '../components/Table'
import { launchApi } from '../helpers/utils'

import styles from '../styles/scss/styles.module.scss'
import { launchHead } from '../helpers/tableheadData'
import History from '../helpers/History'
import { useFetch, usePaginate } from '../helpers/Hooks'
import Pagination from '../components/Pagination'
import Icon from '@iconify/react'
import { calender, downIcon } from '../helpers/icons'
import Accordion from '../components/Accordion'

const Launch: React.FC = () => {
  const path = History.location.pathname.split('/')[1]
  const loc = History.location.search
  const params = History.location.search
  const q = params.split('=page')[1]
  const query = parseInt(q)

  const { data, setData, error } = useFetch(launchApi)
  const { pgState, setPgState } = usePaginate(data.state)
  const { currentPage, postsPerPage, paginate, currentPost } = pgState

  // const pagination = paginate
  //** */
  const [urlPath, setUrlPath] = useState<string>(path)

  // const updateUrl = useCallback(() => {
  //   const Path = path
  //   const options = filter.join('&')
  //   const urlQuery = Path + '?filter=' + options

  //   setUrlPath(urlQuery)
  // }, [path])

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
              <div className={styles.FilterWrapper}>
                <div className={styles.FilterBtnContainer}>
                  <button className={styles.Button}>
                    <Icon className='react-icons' icon={calender} />
                    <span>{'datePicker'}</span>
                    <Icon className='react-icons' icon={downIcon} />
                  </button>
                  {/* if filters */}
                  <button className={styles.Button}>reset</button>
                </div>
                {/* calender modal */}
                <Accordion Title='All launches'>{<p>accordion</p>}</Accordion>
                {/* accordion */}
              </div>
            </div>

            {data.state !== null && (
              <div className={styles.Container}>
                <Table thead={launchHead} data={currentPost} />
                <Pagination
                  paginate={paginate}
                  postsPerPage={postsPerPage}
                  totalPosts={data.state?.length}
                  currentPage={currentPage}
                  query={query}
                  route={urlPath}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  )
}

export default Launch
