import React, { useState } from 'react'
import ScrollLock from 'react-scrolllock'
import screenStyles from '../styles/screens.module.css'
import Modal from './Modal'
import Status from './Status'

const Tables = ({ data, loading, thead, name }) => {
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
          name={name}
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
            {name === 'launch' && (
              <>
                {data?.map(item => (
                  <tr key={item.serial_number} onClick={() => openModal(item)}>
                    <td>{item.serial_number}</td>
                    <td>{item.date}</td>
                    <td>{item.location}</td>
                    <td>{item.mission}</td>
                    <td>{item.orbit}</td>
                    <td>{check(item.status)}</td>
                    <td>
                      <span
                        className='iconify'
                        data-icon='noto:rocket'
                        data-inline='false'
                      ></span>{' '}
                      {item.rocket}
                    </td>
                  </tr>
                ))}
              </>
            )}
            {name === 'capsule' && (
              <>
                {data?.map((item, idx) => (
                  <tr key={idx} onClick={() => openModal(item)}>
                    <td>{item.serial_number}</td>
                    <td>{item.date}</td>
                    <td>{item.status}</td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </ScrollLock>
    </>
  )
}

export default Tables
