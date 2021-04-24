import React from 'react'
import Logo from '../assets/Logo.svg'
import Counter from '../components/Counters'
import { useFetch, useCounters } from '../Hooks'
import styles from '../styles/screens.module.css'
import commonStyles from '../styles/common.module.css'
import { urls } from '../utils'

const HomeScreen = () => {
  const { data, loading } = useFetch(urls.info)

  const { data: counter1 } = useCounters(
    `${urls.launch}?limit=0`,
    'spacex-api-count'
  )
  const { data: counter2 } = useCounters(
    `${urls.capsules}?limit=0`,
    'spacex-api-count'
  )
  const { data: counter3 } = useCounters(
    `${urls.events}?limit=0`,
    'spacex-api-count'
  )
  const { data: counter4 } = useCounters(
    `${urls.ships}?limit=0`,
    'spacex-api-count'
  )
  const { data: updated } = useCounters(
    `${urls.info}`,
    'spacex-api-response-time'
  )

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
          <div className={styles.InfoCard}>
            <div className={styles.InfoHeader}>
              <h2>{data.name}</h2>
            </div>
            <div className={styles.InfoBody}>
              <p className={styles.Paragraph}>{data.summary}</p>
              <a href={urls.spaceX} target='_blank' rel='noreferrer'>
                <button
                  className={`${commonStyles.Button2} ${commonStyles.Button}`}
                >
                  Learn More
                </button>
              </a>
              <div className={styles.InfoListWrapper}>
                <div className={styles.InfoList}>
                  CEO & CTO : <span>{data.ceo}</span>{' '}
                  <a
                    href={data.links.elon_twitter}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span
                      className={` iconify`}
                      data-icon='logos:twitter'
                      data-inline='false'
                      style={{
                        width: '15px !important',
                        height: '15px !important',
                        marginLeft: '10px'
                      }}
                    ></span>
                  </a>
                </div>
                <div className={styles.InfoList}>
                  COO : <span> {data.coo} </span>
                </div>
                <div className={styles.InfoList}>
                  CTO(propulsion) : <span>{data.cto_propulsion} </span>
                </div>
                <div className={styles.InfoList}>
                  Headquarters:{' '}
                  <span>
                    {data.headquarters.address}, {data.headquarters.city},{' '}
                    {data.headquarters.state}
                  </span>
                </div>
                <div className={styles.InfoList}>
                  Valuation(USD) : <span>{data.valuation} </span>
                </div>
                <div className={styles.InfoList}>
                  Employees : <span>{data.employees} </span>
                </div>
              </div>
            </div>
            <div className={styles.InfoLinks}>
              <a href={data.links.website} target='_blank' rel='noreferrer'>
                <span
                  className={`${commonStyles.Iconify} iconify`}
                  data-icon='fluent:globe-desktop-24-filled'
                  data-inline='false'
                ></span>
              </a>
              <a href={data.links.flickr} target='_blank' rel='noreferrer'>
                <span
                  className={`${commonStyles.Iconify} iconify`}
                  data-icon='logos:flickr'
                  data-inline='false'
                ></span>
              </a>
              <a href={data.links.twitter} target='_blank' rel='noreferrer'>
                <span
                  className={`${commonStyles.Iconify} iconify`}
                  data-icon='logos:twitter'
                  data-inline='false'
                ></span>
              </a>
            </div>
            <div className={styles.InfoFooter}>
              API response time: {updated}
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default HomeScreen
