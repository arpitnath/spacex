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
  const checkStatus = data => {
    if (data === 'retired') {
      return <Status status='retired' />
    }
    if (data === 'active') {
      return <Status status='Active' />
    }
    if (data === 'destroyed') {
      return <Status status='destroyed' />
    }
    if (data === 'unknown') {
      return <Status status='unknown' />
    }
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
          statusprop={checkStatus}
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
                    <td>{checkStatus(item.status)}</td>
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
                    <td>{checkStatus(item.status)}</td>
                  </tr>
                ))}
              </>
            )}

            {name === 'ship' && (
              <>
                {data?.map((item, idx) => (
                  <tr key={idx} onClick={() => openModal(item)}>
                    <td>{item.ship_id}</td>
                    <td>{item.ship_name}</td>
                    <td>{item.weight}</td>
                    <td>{item.built}</td>
                  </tr>
                ))}
              </>
            )}

            {name === 'event' && (
              <>
                {data?.map((item, idx) => (
                  <tr key={idx} onClick={() => openModal(item)}>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.date}</td>
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
