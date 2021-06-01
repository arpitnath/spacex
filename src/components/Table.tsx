import React, { useState } from 'react'
import styles from '../styles/scss/styles.module.scss'
import { Thead } from '../helpers/tableheadData'
import { launchDataRes } from '../helpers/types'
import Status from './Status'
import Modal from './Modal'
import LaunchModal from './LaunchModal'

interface IProps {
  thead: Thead[]
  data: launchDataRes[] | null
}

const Table: React.FC<IProps> = ({ thead, data }) => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [modalData, setModalData] = useState<launchDataRes | null>(null)

  const checkStatus = (data: boolean | null) => {
    if (data === null) {
      return <Status status='Upcoming' />
    }
    if (data) {
      return <Status status='Success' />
    } else {
      return <Status status='Failed' />
    }
  }

  const openModal = (itemData: launchDataRes) => {
    setModalData(itemData)
    setShowModal((prev) => !prev)
  }
  return (
    <>
      {/* Modal */}

      {showModal && (
        <Modal name={'dataModal'} callBack={setShowModal}>
          <LaunchModal data={modalData} checkStatus={checkStatus} />
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
          {data?.map((item) => (
            <tr key={item.id} onClick={() => openModal(item)}>
              <td>{item.serial_number}</td>
              <td>{item.date}</td>
              <td>{item.location}</td>
              <td>{item.mission}</td>
              <td>{item.orbit}</td>
              <td>{checkStatus(item.status)}</td>
              <td>{item.rocket}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

export default Table
