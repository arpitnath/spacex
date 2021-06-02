import React from 'react'
import CountUp from 'react-countup'
import styles from '../styles/scss/styles.module.scss'

interface IProps {
  icon: string
  number: number
  title: string
  link: string
}

const Counters: React.FC<IProps> = ({ icon, number, title, link }) => {
  return (
    <>
      <a
        style={{ textDecoration: 'none' }}
        href={link}
        className={styles.CounterContent}
        target='_blank'
        rel='noreferrer'>
        <div className={styles.CounterCircle}>
          <svg>
            <circle className={styles.Circle} cx='100' cy='100' r='75' />
          </svg>
          <div className={styles.CounterIcon}>
            <span>{icon}</span>
          </div>
        </div>
        <div className={styles.CounterNumber}>
          <CountUp end={number} delay={0.3} />
        </div>
        <div className={styles.CounterLabel}>{title}</div>
      </a>
    </>
  )
}

export default Counters
