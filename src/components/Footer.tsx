import React from 'react'
import styles from '../styles/scss/styles.module.scss'
import { Image } from '../helpers/types'

const Footer: React.FC<Image> = ({ src, alt }) => {
  return (
    <div className={styles.Footer}>
      <div>
        <p>
          2021 | Build with{' '}
          <span
            className='iconify'
            data-icon='vscode-icons:file-type-reactjs'
            data-inline='false'></span>{' '}
          by{' '}
          <a
            href='https://github.com/arpitnath'
            target='_blank'
            rel='noreferrer'>
            {' '}
            <span>Arpit</span>
          </a>
        </p>
        <img alt={alt} src={src} />
      </div>
    </div>
  )
}

export default Footer
