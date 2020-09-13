import React from 'react'
import { Link, navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../utils/auth'

import styles from './status.module.css'

export default () => {
  let details = ''

  if (!isLoggedIn()) {
    details = (
      <Link to="/app/login" className={styles[`professional__link`]}>
        PROFESSIONALS
      </Link>
    )
  } else {
    details = (
      <>
        <Link className={styles[`professional__link`]} to="/app/professionals">
          PROFESSIONALS
        </Link>
        <Link
          className={styles[`professional__logout__link`]}
          to="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/app/login`))
          }}
        >
          Logout
        </Link>
      </>
    )
  }
  return <span className="professionals">{details}</span>
}
