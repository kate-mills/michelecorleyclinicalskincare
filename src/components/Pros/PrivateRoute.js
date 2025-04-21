import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"
import {PATH_DTL} from '../../constants/pro-info'


const PrivateRoute = ({ component: Component, location, ...rest }) => {

  if (!isLoggedIn() && location.pathname !== PATH_DTL.public.path) {
    // If not logged in, redirect to the login page
    navigate(PATH_DTL.public.path)
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
