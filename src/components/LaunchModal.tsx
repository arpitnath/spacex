import React from 'react'
import { launchDataRes } from '../helpers/types'
import styles from '../styles/scss/styles.module.scss'
import Status from './Status'

interface IProps {
  data: launchDataRes | null
}

const LaunchModal: React.FC<IProps> = ({ data }) => {
  const modalData = [
    {
      id: 0,
      title: 'Flight Number',
      data: data?.serial_number
    },
    {
      id: 1,
      title: 'Mission Name',
      data: data?.mission
    },
    {
      id: 2,
      title: 'Rocket Name',
      data: data?.rocket
    },
    {
      id: 3,
      title: 'Manufacturer',
      data: data?.manufacturer
    },
    {
      id: 4,
      title: 'Nationality',
      data: data?.nationality
    },
    {
      id: 5,
      title: 'Launch Date',
      data: data?.date
    },
    {
      id: 6,
      title: 'Payload',
      data: data?.payload
    },
    {
      id: 7,
      title: 'Orbit',
      data: data?.orbit
    },
    {
      id: 8,
      title: 'Location Site',
      data: data?.location
    }
  ]

  return (
    <div className={styles.DataWrapper}>
      <div className={styles.DataContainer}>
        {/* header */}
        <div className={styles.ModalHeader}>
          {/* image */}
          <img src={data?.img} alt={`${data?.rocket}`} />
          {/* basic info */}
          <div className={styles.ModalHeadInfo}>
            <div className={styles.HeadContent}>
              <h3>{data?.mission}</h3>
              <p>{data?.rocket}</p>

              <div className={styles.LinkWrapper}>
                {data?.article_link && (
                  <a href={data?.article_link} target='_blank' rel='noreferrer'>
                    <span
                      className={`${styles.Iconify} iconify`}
                      data-icon='ph:article-medium-light'
                      data-inline='false'></span>
                  </a>
                )}
                {data?.wikipedia_link && (
                  <a
                    href={data?.wikipedia_link}
                    target='_blank'
                    rel='noreferrer'>
                    <span
                      className={`${styles.Iconify} iconify`}
                      data-icon='icomoon-free:wikipedia'
                      data-inline='false'></span>
                  </a>
                )}
                {data?.video_link && (
                  <a href={data?.video_link} target='_blank' rel='noreferrer'>
                    <span
                      className={`${styles.Iconify} iconify`}
                      data-icon='ph:youtube-logo-thin'
                      data-inline='false'></span>
                  </a>
                )}
              </div>
            </div>
            <div className={styles.ModalStatus}>
              {data?.status === undefined ? null : (
                <Status status={data.status} from='modalStatus' />
              )}
            </div>
          </div>
        </div>

        {/* content */}
        <div className={styles.ModalDescription}>
          <p>
            {data?.description ? (
              data.description
            ) : (
              <span className={styles.noDescription}>
                * No Description Available *
              </span>
            )}
            {data?.wikipedia_link && (
              <a href={data.wikipedia_link} target='_blank' rel='noreferrer'>
                {' '}
                Wikipedia
              </a>
            )}
          </p>
        </div>
        {/* info */}
        <div className={styles.ModalMainInfo}>
          {/* everything for thr api */}
          {modalData.map((item) => (
            <div key={item.id} className={styles.ContentBody}>
              <span>{item.title}</span>
              <span className={styles.ItemData}>{item.data}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default LaunchModal
