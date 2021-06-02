import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import { useFetch } from '../helpers/Hooks'
import { uri } from '../helpers/utils'
import styles from '../styles/scss/styles.module.scss'

const Capsules = () => {
  const apiUrl = process.env.REACT_APP_SPACEX_BASE_API + uri.CAPSULES

  const { capsule, error } = useFetch(apiUrl, 'capsule')

  if (capsule) {
    console.log(capsule)
  }

  return (
    <div className={styles.CapsuleWrapper}>
      {error.status !== 100 && (
        <Error error={error.message} status={error.status.toString()} />
      )}

      {!capsule.loading && error.status === 100 ? (
        <Loader />
      ) : (
        <div className={styles.Container}>
          <h2>Capsule Page</h2>
          {/* Table */}
          {/* Pagination */}
        </div>
      )}
    </div>
  )
}

export default Capsules
