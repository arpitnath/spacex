import React from 'react'
import Counter from '../components/Counters'
import { useFetch } from '../Hooks'
import styles from '../styles/screens.module.css'

const HomeScreen = () => {
  const { data, loading } = useFetch('https://api.spacexdata.com/v3/info')

  return (
    <>
      {!loading ? (
        'loading...!'
      ) : (
        <>
          <div className={styles.Home}>
            <h1>{data.summary.split('The')[0]}</h1>
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
        </>
      )}
    </>
  )
}

export default HomeScreen
