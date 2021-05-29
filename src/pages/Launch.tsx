import React from 'react'
import Table from '../components/Table'
import { launchApi } from '../helpers/utils'

import styles from '../styles/scss/styles.module.scss'

import { launchHead } from '../helpers/tableheadData'

import { delData } from '../del'
import { useFetch } from '../helpers/Hooks'

const Launch: React.FC = () => {
  const { data, setData } = useFetch(launchApi)

  const update = () => {
    setData(() => ({ state: delData, loading: false }))

    console.log(data)
  }

  // console.log(data)
  return (
    <>
      {/* Loading state => `spinner` */}
      <div className={styles.LaunchWrapper}>
        {/* Filters */}
        <div className={styles.Container}>
          {/* Filter wrapper */}
          {/* buttons */}
          {/* calender modal */}
          {/* accordion */}
        </div>
        <button onClick={update}>update</button>
        <div className={styles.Container}>
          <Table thead={launchHead} data={data.state} />
          {/* Pagination */}
        </div>
      </div>
    </>
  )
}

export default Launch
