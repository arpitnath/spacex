import Icon from '@iconify/react'
import React, { useEffect, useRef, useState } from 'react'
import History from '../helpers/History'
import { downIcon, filterIcon } from '../helpers/icons'
import styles from '../styles/scss/styles.module.scss'

interface IAccordion {
  children: React.ReactNode
  Title: string
}

const Accordion: React.FC<IAccordion> = ({ children, Title }) => {
  const [title, setTitle] = useState<string>(() => Title)
  const [setActive, setActiveState] = useState<string>('')
  const [setHeight, setHeightState] = useState<string>('0px')

  const content = useRef<HTMLInputElement>(null)

  function toggleAccordion() {
    setActiveState(setActive === '' ? 'accordion_active' : '')
    if (content && content.current) {
      console.log(content.current.scrollHeight)
      setHeightState(
        setActive === 'accordion_active'
          ? '0px'
          : `${content.current.scrollHeight}px`
      )
    }
  }

  const filter = History.location.search

  useEffect(() => {
    if (filter.includes('launch_success=true')) {
      setTitle('success')
      return
    }
    if (filter.includes('launch_success=false')) {
      setTitle('fail')
      return
    }
    if (filter.includes('upcoming')) {
      setTitle('upcoming')
      return
    }

    setTitle(Title)
  }, [Title, filter])

  return (
    <div className={styles.AccordionContainer}>
      <div
        className={`${styles.Accordion} ${setActive}`}
        onClick={toggleAccordion}>
        <button style={{ width: '153px' }} className={styles.Button}>
          <Icon icon={filterIcon} /> {title}{' '}
          <Icon className='react-icons' icon={downIcon} />
        </button>
      </div>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={styles.AccordionChildren}>
        {children}
      </div>
    </div>
  )
}

export default Accordion
