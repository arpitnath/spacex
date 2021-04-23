import React from 'react'
import commonStyles from '../styles/common.module.css'

const ShipModal = ({ data }) => {
  return (
    <>
      <div
        className={commonStyles.ModalContent}
        style={{
          background:
            'linear-gradient(to right, #2c3e50, #bdc3c7)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <h2>Ship Name: {data.ship_name}</h2>
        <h4 style={{ marginTop: '-15px' }}>Ship ID: {data.ship_id}</h4>
        <h4 style={{ marginTop: '-15px' }}>Type: {data.ship_type}</h4>
        <h4 style={{ marginTop: '-15px' }}>Built: {data.built} </h4>

        <h4 style={{ marginTop: '-15px' }}>Mission(s): </h4>
        <div className={commonStyles.MissionsWrapper}>
          {data.missions.map((item, idx) => (
            <span className={commonStyles.missions} key={idx}>
              {item.name}
            </span>
          ))}
        </div>
      </div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <img src={data.image} className={commonStyles.ModalImg} alt='demo' />
        <h4>Home Port: {data.home_port} </h4>
        {data.weight && (
          <>
            <h4>Weight (kg): {data.weight} kg</h4>
            <h4>Weight (lbs): {data.weight_lbs} lbs</h4>
          </>
        )}
        <a href={data.url} target='_blank' rel='noreferrer'>
          <button className={commonStyles.Button}>Learn More</button>
        </a>
      </div>
    </>
  )
}

export default ShipModal
