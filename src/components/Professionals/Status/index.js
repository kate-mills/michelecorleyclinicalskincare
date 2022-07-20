import React from 'react'
import { Link, navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../utils/auth'

import styles from './status.module.css'

export default () => {
  let details = ''

  if (!isLoggedIn()) {
    details = (
      <Link to="/app/login">
        EDUCATION
      </Link>
    )
  } else {
    details = (
      <span className={styles[`professional__status__span`]}>
        <Link to="/app/education">EDUCATION</Link>
        <Link
          aria-hidden="true"
          className={styles[`professional__logout__link`]}
          to="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </Link>
      </span>
    )
  }
  return <span className={`pro-education ${styles['pro__education']}`}>{details}</span>
}
