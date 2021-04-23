import React, { useRef } from 'react'
import { Icon } from '@iconify/react'
import roundCloseFullscreen from '@iconify-icons/ic/round-close-fullscreen'
import commonStyles from '../styles/common.module.css'
import LaunchModal from './LaunchModal'
import CapsuleModal from './CapsuleModal'

const Modal = ({ setShowModal, data, statusprop, name }) => {
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
          <Icon
            icon={roundCloseFullscreen}
            className={commonStyles.ModalCloseBtn}
            onClick={() => setShowModal(prev => !prev)}
          />
          {name === 'launch' && (
            <LaunchModal data={data} statusprop={statusprop} />
          )}
          {name === 'capsule' && (
            <CapsuleModal data={data} statusprop={statusprop} />
          )}
        </div>
      </div>
    </>
  )
}

export default Modal
