import React from 'react'
import styles from '../styles/scss/styles.module.scss'

type Props = {
  status: string
}

const Status: React.FC<Props> = ({ status }) => {
  return (
    <div className={`${status} ${styles.Status}`}>
      <span>{status}</span>
    </div>
  )
}

export default Status
