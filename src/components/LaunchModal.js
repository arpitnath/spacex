import React from 'react'
import commonStyles from '../styles/common.module.css'

const LaunchModal = ({ data, statusprop }) => {
  return (
    <>
      <div className={commonStyles.ModalContent}>
        <h2>Mission : {data.mission}</h2>
        <h4 style={{ marginTop: '-15px' }}>
          Flight Number : {data.serial_number}
        </h4>
        <h4 style={{ marginTop: '-15px' }}>
          Launch Site: {data.full_location}
        </h4>

        <div className={commonStyles.ModalSocialLinkWrapper}>
          {data.article_link && (
            <a href={data.article_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='ph:article-medium-light'
                data-inline='false'
              ></span>
            </a>
          )}
          {data.wikipedia_link && (
            <a href={data.wikipedia_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='flat-color-icons:wikipedia'
                data-inline='false'
              ></span>
            </a>
          )}
          {data.video_link && (
            <a href={data.video_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='logos:youtube-icon'
                data-inline='false'
              ></span>
            </a>
          )}
        </div>
        {data.description && (
          <p style={{ marginTop: '-13px', padding: '5px' }}>
            {' '}
            <span>Breif :</span> {data.description}
          </p>
        )}
      </div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <img
          src={data.img}
          className={commonStyles.ModalImg}
          alt={`${data.rocket}`}
        />

        <h4>Rocket : {data.rocket} </h4>
        <h4 style={{ marginTop: '-15px' }}>Launched : {data.date}</h4>
        <h4 style={{ marginTop: '-15px' }}>
          Manufacturer : {data.manufacturer}
        </h4>
        <h4 style={{ marginTop: '-15px' }}>Type : {data.rocket_type}</h4>
        <h4 style={{ marginTop: '-15px' }}>Payload : {data.payload}</h4>
        <h4 style={{ marginTop: '-15px' }}>
          Payload type : {data.payload_type}
        </h4>
        <h4 style={{ marginTop: '-15px' }}>Orbit : {data.orbit}</h4>
      </div>
      <div className={commonStyles.ModalContent}></div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <h4>Launch Status : {statusprop(data.status)}</h4>
        {data.status === false && (
          <h4 style={{ marginTop: '-15px' }}>
            Launch Failure Details : {data.failed_details}
          </h4>
        )}
      </div>
    </>
  )
}

export default LaunchModal
