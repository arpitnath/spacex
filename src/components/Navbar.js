import React from 'react'
import commonStyles from '../styles/common.module.css'

const Navbar = ({ logo }) => {
  return (
    <div className={`${commonStyles.Navbar} ${commonStyles.navbarExpand}`}>
      <a href='/' className={commonStyles.NavLogo}>
        <img alt='spaceX logo' src={logo} />
      </a>
      <div className={commonStyles.NavLinks}>
        <a href='/launch' className={commonStyles.NavLogo}>
          launches
        </a>
        <a href='/ships' className={commonStyles.NavLogo}>
          ships
        </a>
        <a href='/events' className={commonStyles.NavLogo}>
          events
        </a>
        <a href='/capsule' className={commonStyles.NavLogo}>
          capsules
        </a>
      </div>
    </div>
  )
}

export default Navbar
