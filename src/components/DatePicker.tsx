import React, { useState } from 'react'
import moment from 'moment'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import styles from '../styles/scss/styles.module.scss'

const dateFilters = [
  {
    id: 0,
    title: 'Past week',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(7, 'd').format('YYYY-MM-DD')
    }
  },
  {
    id: 1,
    title: 'Past month',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(1, 'M').format('YYYY-MM-DD')
    }
  },
  {
    id: 2,
    title: 'Past 3 month',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(3, 'M').format('YYYY-MM-DD')
    }
  },
  {
    id: 3,
    title: 'Past 6 month',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(6, 'M').format('YYYY-MM-DD')
    }
  },
  {
    id: 4,
    title: 'Past year',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(1, 'y').format('YYYY-MM-DD')
    }
  },
  {
    id: 5,
    title: 'Past 2 year',
    params: {
      end: moment().format('YYYY-MM-DD'),
      start: moment().subtract(2, 'y').format('YYYY-MM-DD')
    }
  }
]
interface IProps {
  getDateParams: (data: never | string, activeFilter: never | string) => void
}

const DatePickerModal: React.FC<IProps> = ({ getDateParams }) => {
  const [startDate, setStartDate] = useState()
  const [endDate, setEndDate] = useState()
  const start = moment(startDate).format('YYYY-MM-DD')
  const end = moment(endDate).format('YYYY-MM-DD')
  const paramsDate = `?start=${start}&end=${end}`

  const onStartChange = (date: never) => {
    setStartDate(date)
  }
  const onEndChange = (date: never) => {
    setEndDate(date)
  }

  const rangePicker = (
    params: never | string,
    activeFilter: never | string
  ) => {
    return getDateParams(params, activeFilter)
  }
  return (
    <div className={styles.ModalWrapper}>
      <div className={styles.DateModalContent}>
        <div>
          {/* given date filters  */}
          {dateFilters.map((filter) => (
            <p
              onClick={() =>
                rangePicker(
                  `?start=${filter.params.start}&end=${filter.params.end}`,
                  filter.title
                )
              }
              style={{ cursor: 'pointer', lineHeight: '16px' }}
              key={filter.id}>
              {filter.title}
            </p>
          ))}
        </div>
      </div>
      {/* content */}
      <div className={styles.ModalContent}>
        <div className={styles.Finder}>
          <div className={styles.DateValue}>
            <span>
              {/* display the start to end date range selected */}
              {start} <i>to</i> {end}
            </span>
            {/*  */}
            <button
              className={styles.SearchBtn}
              onClick={() => rangePicker(paramsDate, `${start} to ${end}`)}>
              Search
            </button>
          </div>
        </div>

        {/* Calender */}
        <div className={styles.CalenderWrapper}>
          <DatePicker
            selected={startDate}
            startDate={startDate}
            endDate={endDate}
            inline
            onChange={onStartChange}
          />
          <DatePicker
            selected={endDate}
            startDate={endDate}
            inline
            onChange={onEndChange}
          />
        </div>
      </div>
    </div>
  )
}

export default DatePickerModal
