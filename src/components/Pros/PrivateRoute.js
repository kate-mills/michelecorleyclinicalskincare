import React from "react"
import { navigate } from "gatsby"
import { isLoggedIn } from "../../utils/auth"
import {PATH_DTL} from '../../constants/pro-info'
import Container from './components/Container'


const PrivateRoute = ({ component: Component, location, ...rest }) => {

  if (!isLoggedIn() && location.pathname !== PATH_DTL.public.path) {
    // If not logged in, redirect to the login page
    navigate(PATH_DTL.public.path)
    return null
  }

  return <Container title="Professionals">
    <Component {...rest} />
  </Container>
}

export default PrivateRoute
