import React, { useState } from 'react'
import ScrollLock from 'react-scrolllock'
import screenStyles from '../styles/screens.module.css'
import Modal from './Modal'
import Status from './Status'

const Tables = ({ data, loading, thead }) => {
  const [showModal, setShowModal] = useState(false)
  const [modalData, setModalData] = useState(null)

  const openModal = data => {
    setModalData(data)
    setShowModal(prev => !prev)
  }

  if (!loading) {
    return <h2>Loading...</h2>
  }
  const check = data => {
    if (data === null) {
      return <Status status='upcoming' />
    }
    if (data) {
      return <Status status='success' />
    } else {
      return <Status status='failed' />
    }
  }
  return (
    <>
      {showModal ? (
        <Modal
          setShowModal={setShowModal}
          data={modalData}
          statusprop={check}
        />
      ) : null}
      <ScrollLock>
        <table className={screenStyles.Table}>
          <thead>
            <tr>
              {thead.map(th => (
                <th key={th.id}>{th.title}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map(launch => (
              <tr key={launch.serial_number} onClick={() => openModal(launch)}>
                <td>{launch.serial_number}</td>
                <td>{launch.date}</td>
                <td>{launch.location}</td>
                <td>{launch.mission}</td>
                <td>{launch.orbit}</td>
                <td>{check(launch.status)}</td>
                <td>
                  <span
                    className='iconify'
                    data-icon='noto:rocket'
                    data-inline='false'
                  ></span>{' '}
                  {launch.rocket}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ScrollLock>
    </>
  )
}

export default Tables
