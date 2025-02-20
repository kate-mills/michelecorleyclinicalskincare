import React from 'react'
import { Link, navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../utils/auth'

import styles from './status.module.css'

export default () => {
  let details = ''

  if (!isLoggedIn()) {
    details = (
      <Link to="/pro/login">PROFESSIONALS</Link>
    )
  } else {
    details = (
      <span className={styles[`professional__status__span`]}>
        <Link to="/pro/manuals">PROFESSIONALS</Link>
        <Link
          className={`logout-link ${styles[`professional__logout__link`]}`}
          to="/pro/login"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/pro/login`))
          }}
        >
         Logout
        </Link>
      </span>
    )
  }
  return <span className={`pro-education ${styles['pro__education']}`}>{details}</span>
}
