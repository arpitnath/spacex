import React from 'react'
import { Image } from '../helpers/types'
import styles from '../styles/scss/styles.module.scss'

const Navbar: React.FC<Image> = ({ src, alt }) => {
  return (
    <div className={styles.Navbar}>
      <a href='/'>
        <img src={src} alt={alt} />
      </a>
    </div>
  )
}

export default Navbar
