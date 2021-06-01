import React from 'react'
import styles from '../styles/scss/styles.module.scss'

interface IError {
  error: string | Error
  status: string
}

const Error: React.FC<IError> = ({ error, status }) => {
  const eclass = status === '404' ? 'nfe' : status === '400' ? 'badrequest' : ''
  return (
    <div className={`${styles.errorComponent} ${eclass}`}>
      <span className={styles.errorBtn}>
        <a href='/'> ← Home</a>
      </span>
      <h3>
        Something went wrong | {status} {error}
      </h3>
    </div>
  )
}

export default Error
