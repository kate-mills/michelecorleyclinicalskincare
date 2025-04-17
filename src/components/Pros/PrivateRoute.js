import React from 'react'
import PropTypes from 'prop-types'
import {navigate} from 'gatsby'
import {isLoggedIn} from  '../../utils/auth'


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // below is now on ProLayout
  //if (!isLoggedIn() && location.pathname !== `/app/login`) { // If we’re not logged in, redirect to the login page.  navigate(`/app/login`) return null }

  if(!isLoggedIn() && location?.pathname !== `/pros/login`){
    navigate(`/pros/login`)
    return null
  }
  return <Component {...rest}/>
}

PrivateRoute.propTypes = {
  component: PropTypes.any.isRequired,
}

export default PrivateRoute
