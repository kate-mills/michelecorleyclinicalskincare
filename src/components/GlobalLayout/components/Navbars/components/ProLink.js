import React from 'react'
import { Link, navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../../../utils/auth'

const ProLink = () => {
  let details = ''

  if (!isLoggedIn()) {
    details = (
      <Link className="pros" to="/pros/">PROFESSIONALS</Link>
    )
  } else {
    details = (
      <span className={'span'}>
        <Link to="/pros/" className="pros">PROFESSIONALS</Link>
        <Link
          id="pros-logout"
          aria-hidden="true"
          className={'pros'}
          to="/pros/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/pros/`))
          }}
        >
          Logout
        </Link>
      </span>
    )
  }
  return <li className={`top-li`}>{details}</li>
}

export default ProLink
