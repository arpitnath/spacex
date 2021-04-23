import React from 'react'
import commonStyles from '../styles/common.module.css'
import image from '../assets/Logo.svg'

const EventModal = ({ data }) => {
  console.log(data)
  return (
    <>
      <div
        className={commonStyles.ModalContent}
        style={{
          background:
            'linear-gradient(to right, #2c3e50, #bdc3c7)' /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
        }}
      >
        <h3>ID: {data.id}</h3>
        <h3 style={{ marginTop: '-15px' }}>
          Title: {data.title.toUpperCase()}
        </h3>
        <h4 style={{ marginTop: '-15px' }}>Flight Number: {data.flight_no}</h4>
        <h4 style={{ marginTop: '-15px' }}>Event date: {data.date} </h4>
      </div>
      <div
        className={commonStyles.ModalContent}
        style={{
          background: '#000',
          color: '#fff'
        }}
      >
        <img
          style={{ padding: '0px', marginTop: '-25px' }}
          src={image}
          className={commonStyles.ModalImg}
          alt='demo'
        />

        {data.description && (
          <h4 style={{ marginTop: '-25px' }}>
            Brief: <span style={{ fontSize: '80%' }}>{data.description}</span>
          </h4>
        )}
        <div className={commonStyles.ModalSocialLinkWrapper}>
          {data.article_link && (
            <a href={data.article_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='ph:article-medium-light'
                data-inline='false'
              ></span>
            </a>
          )}
          {data.wikipedia_link && (
            <a href={data.wikipedia_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='flat-color-icons:wikipedia'
                data-inline='false'
              ></span>
            </a>
          )}
          {data.reddit_link && (
            <a href={data.reddit_link} target='_blank' rel='noreferrer'>
              <span
                className={`${commonStyles.Iconify} iconify`}
                data-icon='logos:reddit-icon'
                data-inline='false'
              ></span>
            </a>
          )}
        </div>
      </div>
    </>
  )
}

export default EventModal
