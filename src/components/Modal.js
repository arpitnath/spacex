import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import roundCloseFullscreen from '@iconify-icons/ic/round-close-fullscreen'
import commonStyles from '../styles/common.module.css'
import { getDate } from '../utils'

const Modal = ({ setShowModal, data, statusprop }) => {
  // console.log(data)
  const modRef = useRef()
  const closeModel = e => {
    if (modRef.current === e.target) {
      setShowModal(false)
    }
  }

  return (
    <>
      <div className={commonStyles.ModalBg} ref={modRef} onClick={closeModel}>
        <div className={commonStyles.ModalWrapper}>
          {/**<img src={picture} className={commonStyles.ModalImg} alt='react' /> */}
          <Icon
            icon={roundCloseFullscreen}
            className={commonStyles.ModalCloseBtn}
            onClick={() => setShowModal(prev => !prev)}
          />

          <div className={commonStyles.ModalContent}>
            <h2>Mission : {data.mission_name}</h2>
            <h4 style={{ marginTop: '-15px' }}>
              Flight Number : {data.flight_number}
            </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Launch Site: {data.launch_site.site_name_long}
            </h4>
            {data.details && (
              <p style={{ marginTop: '-13px', padding: '5px' }}>
                {' '}
                <span>Breif :</span> {data.details}
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
              src={data.links.mission_patch_small}
              className={commonStyles.ModalImg}
              alt='react'
            />

            <h4>Rocket : {data.rocket.rocket_name} </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Launched : {getDate(data.launch_date_utc)}
            </h4>
            <h4 style={{ marginTop: '-15px' }}>Manufacturer : United States</h4>
            <h4 style={{ marginTop: '-15px' }}>
              Type : {data.rocket.rocket_type}
            </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Payload : {data.rocket.second_stage.payloads[0].payload_id}
            </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Payload type : {data.rocket.second_stage.payloads[0].payload_type}
            </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Orbit : {data.rocket.second_stage.payloads[0].orbit}
            </h4>
          </div>
          <div className={commonStyles.ModalContent}>
            <h4 style={{ paddingTop: '30px' }}>Links</h4>
            <div className={commonStyles.ModalSocialLinkWrapper}>
              <p>article link</p>
              <p>wikipedia link</p>
              <p>youtube link</p>
            </div>
          </div>
          <div
            className={commonStyles.ModalContent}
            style={{
              background: '#000',
              color: '#fff'
            }}
          >
            <h4>Launch Status : {statusprop(data.launch_success)}</h4>
            {data.launch_success === 'false' && (
              <h4 style={{ marginTop: '-15px' }}>
                Launch Failure Details : {data.launch_failure_details.reason}
              </h4>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
