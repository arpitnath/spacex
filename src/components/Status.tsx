import React from 'react'
import styles from '../styles/scss/styles.module.scss'

type Props = {
  status: boolean | null
  from: string
}

const Status: React.FC<Props> = ({ status, from }) => {
  const checkStatus = () => {
    if (status === null) {
      return 'Upcoming'
    }
    if (status) {
      return 'Success'
    } else {
      return 'Failed'
    }
  }

  return (
    <div className={`${checkStatus()} ${styles.Status} ${from}`}>
      <span>{checkStatus()}</span>
    </div>
  )
}

export default Status
