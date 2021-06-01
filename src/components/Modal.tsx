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
  callBack: React.Dispatch<React.SetStateAction<boolean>>
  children: React.ReactNode
  name: string
}

const Modal: React.FC<Props> = ({ callBack, children, name }) => {
  const [modalStyles, setModalStyles] = useState<ModalStyles>(modalInital)

  const modalRef = useRef<HTMLDivElement | null>(null)

  const closeModal = (e: React.MouseEvent<HTMLDivElement>) => {
    if (modalRef.current === e.target) {
      console.log('clicked close modal')
      callBack(false)
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
        <span onClick={() => callBack((prev) => !prev)}>
          <Icon
            style={modalStyles.closeIcon}
            icon={close}
            className={styles.ModalCloseIcon}
          />
        </span>
        {children}
      </div>
    </div>
  )
}

export default Modal
