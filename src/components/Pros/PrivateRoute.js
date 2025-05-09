import React from 'react'
import { navigate } from '@reach/router'
import { isLoggedIn } from '../../utils/auth'
import Container from './components/Container'
import Navigation from './components/Navigation'
import PublicOrders from './components/PublicOrders'
import Form from './components/Form'

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  if (!isLoggedIn() && location.pathname !== `/pros/`) {
    // If not logged in, redirect to the login page
    navigate(`/pros/`)
    return (
      <Container title="Please Login" isPro={false}>
        <Form />
        <PublicOrders />
      </Container>
    )
  }

  return (
    <Container title="Professionals">
      <Navigation location={location} />
      <Component {...rest} />
    </Container>
  )
}

export default PrivateRoute
