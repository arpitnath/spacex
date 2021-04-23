import React from 'react'
import commonStyles from '../styles/common.module.css'
import image from '../assets/space-shuttle.svg'

const CapsuleModal = ({ data }) => {
  return (
    <>
      <div
        className={commonStyles.ModalContent}
        style={{
          background:
            'linear-gradient(to right, #2c3e50, #bdc3c7)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <h2>Serial Number: {data.serial_number}</h2>
        <h2>Capsule ID: {data.capsule_id}</h2>
        <h2>Type: {data.type}</h2>
        <h2>Launched: {data.date} </h2>
        {data.mission.map((item, idx) => (
          <h2 key={idx}>Mission(s): {item.name}</h2>
        ))}
        <h3>Re-use Count: {data.reuse}</h3>
      </div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <img src={image} className={commonStyles.ModalImg} alt='demo' />
        <h2>Status: {data.status.toUpperCase()} </h2>
        <h2>Landings: {data.landings} </h2>
        <h2>
          Brief: <span style={{ fontSize: '80%' }}>{data.description}</span>
        </h2>
      </div>
    </>
  )
}

export default CapsuleModal
