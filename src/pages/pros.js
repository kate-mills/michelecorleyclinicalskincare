import React from 'react'
import { Router } from '@reach/router'

import { ProLayout, ProLogin, PrivateRoute, Manuals } from '../components/Pros'

const Pros = props => {
  return (
    <Router primary={false}>
      <PrivateRoute path="/pros" component={Manuals} />
      <PrivateRoute path="/pros/manuals" component={Manuals} />
      <PrivateRoute path="/pros/kits" component={Manuals} />
      <PrivateRoute path="/pros/facials" component={Manuals} />
      <PrivateRoute path="/pros/classes" component={Manuals} />
      <PrivateRoute path="/pros/orders" component={Manuals} />
      <ProLogin path="/pros/login"/>
    </Router>
  )
}
export default Pros
