import React from 'react'
import commonStyles from '../styles/common.module.css'

const Footer = ({ logo }) => {
  return (
    <div className={commonStyles.Footer}>
      <div>
        <img alt='spaceX logo' src={logo} />
        <p>
          2021 - All rights reserved. Made with ❤ by{' '}
          <a
            href='https://github.com/arpitnath'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <span>Arpit</span>
          </a>
        </p>
      </div>
    </div>
  )
}

export default Footer
