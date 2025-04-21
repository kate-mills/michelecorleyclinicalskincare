import React from 'react'
import { Router } from '@reach/router'

import { PrivateRoute, PublicLogin, Details, ProStatus } from '../components/Pros'

const Pros = props => {
  return (
    <>
      Hello Pros
      <ProStatus/>
    <Router primary={false}>
      <PrivateRoute path="/pros/manuals" component={Details} />
      <PublicLogin path="/pros/login" />
    </Router>
    </>
  )
}
export default Pros
