import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import roundCloseFullscreen from '@iconify-icons/ic/round-close-fullscreen'
import commonStyles from '../styles/common.module.css'
import picture from '../assets/Logo.svg'

const Modal = ({ setShowModal, data }) => {
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
            <h2>Mission : Falcon</h2>
            <h4 style={{ marginTop: '-15px' }}>Flight Number : 9</h4>
            <p style={{ marginTop: '-13px', padding: '5px' }}>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Accusamus maxime voluptas temporibus.
            </p>
          </div>
          <div
            className={commonStyles.ModalContent}
            style={{
              background: '#000',
              color: '#fff'
            }}
          >
            <img
              src='https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png'
              className={commonStyles.ModalImg}
              alt='react'
            />

            <h4>Rocket : {data ? <> {data.mission_name} </> : 'error'} </h4>
            <h4 style={{ marginTop: '-15px' }}>
              Launched : 24-03-2006 at 22.30
            </h4>
            <h4 style={{ marginTop: '-15px' }}>Manufacturer : United States</h4>
            <h4 style={{ marginTop: '-15px' }}>Type : Malcom II</h4>
            <h4 style={{ marginTop: '-15px' }}>Payload : G-4 II</h4>
            <h4 style={{ marginTop: '-15px' }}>Orbit : Leo</h4>
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
            <h4>Launch Status : Fail</h4>
            <h4 style={{ marginTop: '-15px' }}>Launch Failure Details :</h4>
            <p style={{ marginTop: '-13px', padding: '5px' }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
