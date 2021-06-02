import React from 'react'
import Error from '../components/Error'
import Loader from '../components/Loader'
import { useCounter, useFetch } from '../helpers/Hooks'
import { uri } from '../helpers/utils'
import Logo from '../assets/Logo.svg'

import styles from '../styles/scss/styles.module.scss'
import Counters from '../components/Counters'

enum api_type {
  RESPOONSE_TIME = 'spacex-api-response-time',
  SPACEX = 'spacex-api-count'
}

const Home: React.FC = () => {
  const apiUrl = process.env.REACT_APP_SPACEX_BASE_API + uri.INFO
  const { info, error } = useFetch(apiUrl, 'info')

  const { data: counter1 } = useCounter(
    `${process.env.REACT_APP_SPACEX_BASE_API}${uri.LAUNCH}?limit=0`,
    api_type.SPACEX
  )

  const { data: counter2 } = useCounter(
    `${process.env.REACT_APP_SPACEX_BASE_API}${uri.CAPSULES}?limit=0`,
    api_type.SPACEX
  )
  const { data: counter3 } = useCounter(
    `${process.env.REACT_APP_SPACEX_BASE_API}${uri.EVENTS}?limit=0`,
    api_type.SPACEX
  )
  const { data: counter4 } = useCounter(
    `${process.env.REACT_APP_SPACEX_BASE_API}${uri.SHIPS}?limit=0`,
    api_type.SPACEX
  )
  const { data: updated } = useCounter(
    `${process.env.REACT_APP_SPACEX_BASE_API}${uri.INFO}?limit=0`,
    api_type.RESPOONSE_TIME
  )

  return (
    <div className={styles.HomeWrapper}>
      {error.status !== 100 && (
        <Error error={error.message} status={error.status.toString()} />
      )}
      {!info.loading && error.status === 100 ? (
        <Loader />
      ) : (
        <>
          <img src={Logo} alt='spaceX_logo' />
          <h1>{info.state?.summary.split('The')[0]}</h1>
          <div className={styles.Counters}>
            <Counters
              link='/launch'
              icon='🚀'
              title='launches'
              number={Number(counter1)}
            />
            <Counters
              link='/capsule'
              icon='🛰'
              title='capsules'
              number={Number(counter2)}
            />
            <Counters
              link='/events'
              icon='📆'
              title='events'
              number={Number(counter3)}
            />
            <Counters
              link='/ships'
              icon='⛴'
              title='ships'
              number={Number(counter4)}
            />
          </div>
          <div className={styles.Content}>
            <div className={styles.InfoHeader}>
              <h2>{info.state?.name}</h2>
            </div>
            <div className={styles.InfoBody}>
              <p className={styles.Paragraph}>{info.state?.summary}</p>
              <a
                href={'https://www.spacex.com/'}
                target='_blank'
                rel='noreferrer'>
                <button className={styles.Btn}>Learn More</button>
              </a>
              <div className={styles.InfoListWrapper}>
                <div className={styles.InfoList}>
                  CEO & CTO : <span>{info.state?.ceo}</span>{' '}
                  <a
                    href={info.state?.links.elon_twitter}
                    target='_blank'
                    rel='noreferrer'>
                    <span
                      className={` iconify`}
                      data-icon='logos:twitter'
                      data-inline='false'
                      style={{
                        width: '15px !important',
                        height: '15px !important',
                        marginLeft: '10px'
                      }}></span>
                  </a>
                </div>
                <div className={styles.InfoList}>
                  COO : <span> {info.state?.coo} </span>
                </div>
                <div className={styles.InfoList}>
                  CTO(propulsion) : <span> {info.state?.cto_propulsion} </span>
                </div>
                <div className={styles.InfoList}>
                  {/* last */}
                  Headquarters: <span>headquaters address</span>
                </div>
                <div className={styles.InfoList}>
                  Valuation(USD) : <span>{info.state?.valuation} </span>
                </div>
                <div className={styles.InfoList}>
                  Employees : <span>{info.state?.employees} </span>
                </div>
              </div>
            </div>
            <div className={styles.InfoLinks}>
              <a
                href={'data?.state.links.website'}
                target='_blank'
                rel='noreferrer'>
                <span
                  className={`${styles.Iconify} iconify`}
                  data-icon='fluent:globe-desktop-24-filled'
                  data-inline='false'></span>
              </a>
              <a
                href={info.state?.links.flickr}
                target='_blank'
                rel='noreferrer'>
                <span
                  className={`${styles.Iconify} iconify`}
                  data-icon='logos:flickr'
                  data-inline='false'></span>
              </a>
              <a
                href={info.state?.links.twitter}
                target='_blank'
                rel='noreferrer'>
                <span
                  className={`${styles.Iconify} iconify`}
                  data-icon='logos:twitter'
                  data-inline='false'></span>
              </a>
            </div>
            <div className={styles.InfoFooter}>
              {/* counter hook */}
              API response time: {updated}
            </div>
          </div>
        </>
      )}
      {/* footer */}
    </div>
  )
}

export default Home
