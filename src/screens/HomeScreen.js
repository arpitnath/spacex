import React from 'react'
import Logo from '../assets/Logo.svg'
import Counter from '../components/Counters'
import { useFetch, useCounters } from '../Hooks'
import styles from '../styles/screens.module.css'
import { urls } from '../utils'

const HomeScreen = () => {
  const { data, loading } = useFetch(urls.info)

  const { data: counter1 } = useCounters(`${urls.launch}?limit=0`)
  const { data: counter2 } = useCounters(`${urls.capsules}?limit=0`)
  const { data: counter3 } = useCounters(`${urls.events}?limit=0`)
  const { data: counter4 } = useCounters(`${urls.ships}?limit=0`)

  return (
    <>
      {!loading ? (
        'loading...!'
      ) : (
        <>
          <div className={styles.Home}>
            <img src={Logo} alt='spacex_logo' className={styles.Logo} />
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
