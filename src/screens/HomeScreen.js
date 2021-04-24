import React from 'react'
import Logo from '../assets/Logo.svg'
import Counter from '../components/Counters'
import { useFetch, useCounters } from '../Hooks'
import styles from '../styles/screens.module.css'

const HomeScreen = () => {
  const { data, loading } = useFetch('https://api.spacexdata.com/v3/info')

  const { data: counter1 } = useCounters(
    'https://api.spacexdata.com/v3/launches?limit=0'
  )
  const { data: counter2 } = useCounters(
    'https://api.spacexdata.com/v3/capsules?limit=0'
  )
  const { data: counter3 } = useCounters(
    'https://api.spacexdata.com/v3/history?limit=0'
  )
  const { data: counter4 } = useCounters(
    'https://api.spacexdata.com/v3/ships?limit=0'
  )

  return (
    <>
      {!loading ? (
        'loading...!'
      ) : (
        <>
          <div className={styles.Home}>
            <img src={Logo} className={styles.Logo} />
            <h1>{data.summary.split('The')[0]}</h1>
            <div className={styles.Counters}>
              <Counter
                link='/launch'
                icon='🚀'
                title='launches'
                number={counter1 && parseInt(counter1)}
              />
              <Counter
                link='/capsule'
                icon='🛰'
                title='capsules'
                number={counter2 && parseInt(counter2)}
              />
              <Counter
                link='/events'
                icon='📆'
                title='events'
                number={counter3 && parseInt(counter3)}
              />
              <Counter
                link='/ships'
                icon='⛴'
                title='ships'
                number={counter4 && parseInt(counter4)}
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
