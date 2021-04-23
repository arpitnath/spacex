import React from 'react'
import commonStyles from '../styles/common.module.css'

const Status = ({ status }) => {
  return (
    <>
      <div className={`${status} ${commonStyles.Status}`}>
        {status.toUpperCase()}
      </div>
    </>
  )
}

export default Status
