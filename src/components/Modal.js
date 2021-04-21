import React, { useRef } from 'react'
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
          <img src={picture} className={commonStyles.ModalImg} alt='react' />
          <div className={commonStyles.ModalContent}>
            <h1>headling</h1>
            {data ? <p>{data.mission_name}</p> : 'No Data'}
            <button
              className={commonStyles.ModalCloseBtn}
              onClick={() => setShowModal(prev => !prev)}
            >
              x
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
