import React from 'react'
import Counter from '../components/Counters'
import styles from '../styles/screens.module.css'

const HomeScreen = () => {
  return (
    <div className='Wrapper'>
      <h1>HomeScreen</h1>
      <div className={styles.Home}>
        <div className={styles.Counters}>
          <Counter
            link='/users'
            icon='😅'
            title='title'
            number={parseInt('448')}
          />
          <Counter
            link='/institutions/companies'
            icon='💙'
            title='title'
            number={parseInt('556')}
          />
          <Counter
            link='/institutions/startups'
            icon='🔐'
            title='title'
            number={parseInt('112')}
          />
          <Counter
            link='/requests'
            icon='🛠'
            title='title'
            number={parseInt('22')}
          />
        </div>
      </div>
      <div>something</div>
    </div>
  )
}

export default HomeScreen
