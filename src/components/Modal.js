import React from 'react'
import commonStyles from '../styles/common.module.css'
import picture from '../assets/Logo.svg'

const Modal = ({ setShowModal }) => {
  return (
    <>
      <div className={commonStyles.ModalBg}>
        <div className={commonStyles.ModalWrapper}>
          <img src={picture} className={commonStyles.ModalImg} alt='react' />
          <div className={commonStyles.ModalContent}>
            <h1>headling</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
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
