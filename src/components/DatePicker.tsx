import React, { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../styles/scss/styles.module.scss'

interface Props {
  str: string
}

const DatePickerModal: React.FC<Props> = ({ str }) => {
  const [startDate, setStartDate] = useState(new Date())
  return (
    <div style={{ color: '#fff' }} className={styles.ModalWrapper}>
      <div className={styles.DateModalContainer}>
        <div>
          <p>{str}</p>
          {/* given date filters  */}
        </div>
        {/* content */}
        <div className={styles.ModalContent}>
          <div className={styles.Finder}>
            <div className={styles.DateValue}>
              <span>
                {/* display the start to end date range selected */}
                {str} to {str}
              </span>
              <button>Search</button>
            </div>
          </div>
        </div>
        {/* Calender */}
        <div className={styles.CalenderWrapper}>
          <DatePicker
            selected={startDate}
            inline
            onChange={(date) => setStartDate(new Date())}
          />
        </div>
      </div>
    </div>
  )
}

export default DatePickerModal
