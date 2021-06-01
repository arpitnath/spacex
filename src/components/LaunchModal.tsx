import React from 'react'
import { launchDataRes } from '../helpers/types'
import styles from '../styles/scss/styles.module.scss'

interface IProps {
  data: launchDataRes | null
  checkStatus: (data: boolean | null) => JSX.Element
}

const LaunchModal: React.FC<IProps> = ({ data, checkStatus }) => {
  console.log(data)

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
                <>{checkStatus(data?.status)}</>
              )}
            </div>
          </div>
        </div>

        {/* content */}
        <div className={styles.ModalDescription}>
          <p>decription wikipedia link</p>
        </div>
        {/* info */}
        <div className={styles.ModalMainInfo}>
          {/* everything for thr api */}
        </div>
      </div>
    </div>
  )
}

export default LaunchModal
