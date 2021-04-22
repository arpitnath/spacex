import React, { useState } from 'react'
import ScrollLock from 'react-scrolllock'
import screenStyles from '../styles/screens.module.css'
import { getDate } from '../utils'
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
              <tr key={launch.flight_number} onClick={() => openModal(launch)}>
                <td>{launch.flight_number}</td>
                <td>{getDate(launch.launch_date_utc)}</td>
                <td>{launch.launch_site.site_name}</td>
                <td>{launch.mission_name}</td>
                <td>{launch.rocket.second_stage.payloads[0].orbit}</td>
                <td>{check(launch.launch_success)}</td>
                <td>
                  <span
                    className='iconify'
                    data-icon='noto:rocket'
                    data-inline='false'
                  ></span>{' '}
                  {launch.rocket.rocket_name}
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
