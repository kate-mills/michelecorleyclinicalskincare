import React from 'react'
import { Link } from 'gatsby'
import { navigate } from '@reach/router'
import { isLoggedIn, logout } from '../../../../../utils/auth'

const ProLink = ({ ariaCurrent = '' }) => {
  return (
    <li className={'top-li'} id="pro-li">
      {isLoggedIn() ? (
        <span>
          <Link to="/pros/manuals/" aria-current={ariaCurrent}>
            PROFESSIONALS
          </Link>
          <Link
            id="logout"
            to="/pros/login/"
            onClick={event => {
              event.preventDefault()
              logout(() => navigate(`/pros/login/`))
            }}
          >
            PRO LOGOUT
          </Link>
        </span>
      ) : (
        <span>
          <Link to="/pros/login/">PROFESSIONALS</Link>
        </span>
      )}
    </li>
  )
}

export default ProLink
