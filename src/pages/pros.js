import React from 'react'
import { Router } from '@reach/router'

import { GlobalLayout } from '../components'
import { PrivateRoute, PublicLogin, Details } from '../components/Pros'

const Pros = props => {
  return (
    <GlobalLayout>
    <Router primary={false}>
      <PrivateRoute path="/pros/manuals" component={Details} />
      <PublicLogin path="/pros/login" />
    </Router>
    </GlobalLayout>
  )
}
export default Pros
