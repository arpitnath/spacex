import React, { useState } from 'react'
import styles from '../styles/scss/styles.module.scss'
import { Thead } from '../helpers/tableheadData'
import { capsuleDataRes, launchDataRes } from '../helpers/types'
import Modal from './Modal'
import LaunchModal from './LaunchModal'
import NoData from './Nodata'
import TableBody from './TableBody'

interface IProps {
  thead: Thead[]
  data: launchDataRes[] | capsuleDataRes[] | null
}

const Table: React.FC<IProps> = ({ thead, data }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<launchDataRes | null>(null)

  const openModal = (itemData: launchDataRes) => {
    setModalData(itemData)
    setShowModal((prev) => !prev)
  }
  return (
    <>
      {/* Modal */}

      {showModal && (
        <Modal name={'dataModal'} callBack={setShowModal}>
          <LaunchModal data={modalData} />
        </Modal>
      )}

      <table className={styles.Table}>
        <thead>
          <tr>
            {thead.map((item) => (
              <th key={item.id}>{item.title}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.length === 0 || data === null ? (
            <>
              <tr>
                <td>
                  <NoData />
                </td>
              </tr>
            </>
          ) : (
            <TableBody data={data} openModal={openModal} />
          )}
        </tbody>
      </table>
    </>
  )
}

export default Table
