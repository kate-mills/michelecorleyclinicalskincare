import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../../../utils/auth'

const ProLink = () => {
  return (
    <li className={'top-li'}>
      {isLoggedIn() ? (
        <span>
          <Link className="pros" to="/pros/manuals/">
            PROFESSIONALS
          </Link>
          <Link className={'pros'} to="/pros/login/"
            onClick=
            {event => {
              event.preventDefault()
              logout(() => navigate(`/pros/login/`))
            }}>Logout
          </Link>
        </span>
      ) : (
        <span className={'span'}>
          <Link className="pros" to="/pros/login/">
            PROFESSIONALS
          </Link>
          {/*<Link id="pros-logout" className={'pros'} to="/pros/login/" onClick={event => { event.preventDefault() logout(() => navigate(`/pros/login/`)) }} > Logout </Link>*/}
        </span>
      )}
    </li>
  )
}

export default ProLink
