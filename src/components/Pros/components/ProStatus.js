import React from 'react'
import { navigate } from '@reach/router'
import { Link } from 'gatsby'
import { getCurrentUser, isLoggedIn, logout } from '../../../utils/auth'

const ProStatus = () => {
  let details
  if (!isLoggedIn()) {
    details = (
      <p className={'status__text'}>
        To get the full pro experience, you’ll need to
        {` `}
        <Link to="/pros/login">log in</Link>.
      </p>
    )
  } else {
    const { name } = getCurrentUser()

    details = (
      <p className={'status__text'}>
        Logged in as {name}!  {` `}
        <a
          href="/"
          onClick={event => {
            event.preventDefault()
            logout(() => navigate(`/pros/login`))
          }}
        >
          log out
        </a>
      </p>
    )
  }

  return <div className={'status'}>{details}</div>
}

export default ProStatus
