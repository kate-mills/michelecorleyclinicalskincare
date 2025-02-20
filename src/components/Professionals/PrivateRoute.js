import React from 'react'


const PrivateRoute = ({ component: Component, location, ...rest }) => {
  // below is now on ProLayout
  //if (!isLoggedIn() && location.pathname !== `/app/login`) { // If we’re not logged in, redirect to the login page.  navigate(`/app/login`) return null }

  return <Component {...rest}/>
}

//PrivateRoute.propTypes = { component: PropTypes.any.isRequired, }

export default PrivateRoute
