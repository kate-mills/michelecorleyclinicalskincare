import React from 'react'
import { Router } from '@reach/router'

import { ProLayout, ProLogin, PrivateRoute, Manuals } from '../components/Pros'

const Pros = props => {
  return (
    <Router primary={false}>
      <ProLayout path="/professionals">
        <PrivateRoute path="/" component={Manuals}/>
        <PrivateRoute path="/manuals" component={Manuals}/>
        <PrivateRoute path="/kits" component={Manuals}/>
        <PrivateRoute path="/facials" component={Manuals}/>
        <PrivateRoute path="/classes" component={Manuals}/>
        <PrivateRoute path="/orders" component={Manuals}/>
      </ProLayout>
      <ProLogin path="/professionals/login" />
    </Router>
  )
}
export default Pros
