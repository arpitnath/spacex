import React from 'react'
import Table from '../components/Table'
import styles from '../styles/scss/styles.module.scss'

const Launch: React.FC = () => {
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
        <div className={styles.Container}>
          <Table />
          {/* Pagination */}
        </div>
      </div>
    </>
  )
}

export default Launch
