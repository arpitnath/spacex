import React from 'react'
import commonStyles from '../styles/common.module.css'

const Footer = ({ logo }) => {
  return (
    <div className={commonStyles.Footer}>
      <div>
        <p>
          2021 - All rights reserved. Build with{' '}
          <span
            className='iconify'
            data-icon='vscode-icons:file-type-reactjs'
            data-inline='false'
          ></span>{' '}
          by{' '}
          <a
            href='https://github.com/arpitnath'
            target='_blank'
            rel='noreferrer'
          >
            {' '}
            <span>Arpit</span>
          </a>
        </p>
        <img alt='spaceX logo' src={logo} />
      </div>
    </div>
  )
}

export default Footer
