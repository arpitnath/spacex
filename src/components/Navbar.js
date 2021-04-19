import React from 'react'
import commonStyles from '../styles/common.module.css'

const Navbar = ({ logo }) => {
  return (
    <div className={`${commonStyles.Navbar} ${commonStyles.navbarExpand}`}>
      <a href='/' className={commonStyles.NavLogo}>
        <img alt='spaceX logo' src={logo} />
      </a>
    </div>
  )
}

export default Navbar
