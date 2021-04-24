import React from 'react'
import commonStyles from '../styles/common.module.css'
import image from '../assets/bg.png'

const CapsuleModal = ({ data, statusprop }) => {
  return (
    <>
      <div
        className={commonStyles.ModalContent}
        style={{
          background:
            'linear-gradient(to right, #2c3e50, #bdc3c7)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <h3>Serial Number: {data.serial_number}</h3>
        <h4 style={{ marginTop: '-15px' }}>Capsule ID: {data.capsule_id}</h4>
        <h4 style={{ marginTop: '-15px' }}>Type: {data.type}</h4>
        <h4 style={{ marginTop: '-15px' }}>Launched: {data.date} </h4>
        <div className={commonStyles.MissionsWrapper}>
          {data.mission.map((item, idx) => (
            <span className={commonStyles.missions} key={idx}>
              {item.name}
            </span>
          ))}
        </div>
        <h4>Re-use Count: {data.reuse}</h4>
      </div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <img src={image} className={commonStyles.ModalImg} alt='demo' />
        <h4>Status: {statusprop(data.status)} </h4>
        <h4>Landings: {data.landings} </h4>
        {data.description && (
          <h4>
            Brief: <span style={{ fontSize: '80%' }}>{data.description}</span>
          </h4>
        )}
      </div>
    </>
  )
}

export default CapsuleModal
