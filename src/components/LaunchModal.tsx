import React from 'react'
import styles from '../styles/scss/styles.module.scss'

interface IProps {
  data: string
}

const LaunchModal: React.FC<IProps> = ({ data }) => {
  return (
    <div className={styles.DataWrapper}>
      <div className={styles.DataContainer}>
        {/* header */}
        <div className={styles.ModalHeader}>
          {/* image */}
          {/* basic info */}
        </div>

        {/* content */}
        {/* info */}
      </div>
    </div>
  )
}

export default LaunchModal
