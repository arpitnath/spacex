import React from 'react'
import styles from '../styles/scss/styles.module.scss'
import { launchHead } from '../utils/tableheadData'

const Table = () => {
  return (
    <>
      {/* Modal */}

      <table className={styles.Table}>
        <thead>
          <tr>
            {launchHead.map((item) => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
          <tr>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
            <td>tcontent</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Table
