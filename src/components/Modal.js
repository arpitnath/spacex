import React from 'react'
import commonStyles from '../styles/common.module.css'
import picture from '../assets/Logo.svg'

const Modal = ({ setShowModal, data }) => {
  //useRef needs to be used

  return (
    <>
      <div className={commonStyles.ModalBg}>
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
