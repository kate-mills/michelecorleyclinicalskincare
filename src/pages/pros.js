import React from 'react'
import { Router } from '@reach/router'

import { PrivateRoute, LoginRoute, Details, ProStatus } from '../components/Pros'

const Pros = props => {
  return (
    <>
      Hello Pros
      <ProStatus/>
    <Router primary={false}>
      <PrivateRoute path="/pros/manuals" component={Details} />
      <LoginRoute path="/pros/login" />
    </Router>
    </>
  )
}
export default Pros
