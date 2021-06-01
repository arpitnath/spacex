import React, { useEffect, useRef, useState } from 'react'
import { Icon, close } from '../helpers/icons'
import styles from '../styles/scss/styles.module.scss'

const modalInital = {
  modalSize: {
    width: '544px',
    height: '740px'
  },
  modalBg: {
    marginTop: '99px'
  },
  closeIcon: {
    top: '26px',
    left: '230px'
  }
}

type ModalStyles = {
  modalSize: {
    width: string
    height: string
  }
  modalBg: {
    marginTop: string
  }
  closeIcon: {
    top: string
    left: string
  }
}

type Props = {
  callBack: () => void
  children: React.ReactNode
  name: string
}

const Modal: React.FC<Props> = ({ callBack, children, name }) => {
  const [modalStyles, setModalStyles] = useState<ModalStyles>(modalInital)

  const modalRef = useRef<HTMLDivElement | null>(null)

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log('e: ', e.target)
    console.log(modalRef.current)
    //need to fix
    if (modalRef.current === e.target) {
      console.log('clicked close modal')
      callBack()
    }
  }

  useEffect(() => {
    if (name === 'datePicker') {
      setModalStyles({
        modalSize: {
          width: '720px',
          height: '383px'
        },
        modalBg: {
          marginTop: '0px'
        },
        closeIcon: {
          top: '8px',
          left: '330px'
        }
      })
    }
  }, [name])

  return (
    <div
      style={modalStyles.modalBg}
      className={styles.ModalBg}
      ref={modalRef}
      onClick={closeModal}>
      <div style={modalStyles.modalSize}>
        <Icon
          style={modalStyles.closeIcon}
          icon={close}
          className={styles.ModalCloseIcon}
          //onclick to set the state of the modal from parent
        />
        <p>{name}</p>
        {children}
      </div>
    </div>
  )
}

export default Modal