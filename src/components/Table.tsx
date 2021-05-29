import React from 'react'
import styles from '../styles/scss/styles.module.scss'
import { Thead } from '../helpers/tableheadData'
import { launchDataRes } from '../helpers/types'

interface Props {
  thead: Thead[]
  data: launchDataRes[] | null
}

const Table: React.FC<Props> = ({ thead, data }) => {
  console.log(data)
  return (
    <>
      {/* Modal */}

      <table className={styles.Table}>
        <thead>
          <tr>
            {thead.map((item) => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((item, index) => (
            <tr key={index}>
              <td>{item.serial_number}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
              <td>{item.mission}</td>
              <td>{item.orbit}</td>
              <td>{item.status}</td>
              <td>{item.rocket}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
