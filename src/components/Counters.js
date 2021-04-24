import React from 'react'
import CountUp from 'react-countup'
import headerStyles from '../styles/screens.module.css'

const Counters = ({ icon, number, title, link }) => {
  return (
    <a
      href={link}
      className={headerStyles.CounterContent}
      target='_blank'
      rel='noreferrer'
    >
      <div className={headerStyles.CounterCircle}>
        <svg>
          <circle className={headerStyles.Circle} cx='100' cy='100' r='75' />
        </svg>
        <div className={headerStyles.CounterIcon}>
          <span>{icon}</span>
        </div>
      </div>
      <div className={headerStyles.CounterNumber}>
        <CountUp end={number} delay={0.3} />
      </div>
      <div className={headerStyles.CounterLabel}>{title}</div>
    </a>
  )
}

export default Counters
