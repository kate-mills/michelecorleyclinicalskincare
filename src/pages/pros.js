import React from 'react'
import { Router } from '@reach/router'

import { ProLayout, ProLogin, PrivateRoute, Manuals } from '../components/Pros'

const Pros = props => {
  return (
    <Router primary={false}>
      <ProLayout path="/pros">
        <PrivateRoute path="/" component={Manuals}/>
        <PrivateRoute path="/manuals" component={Manuals}/>
      </ProLayout>
      <ProLogin path="/pros/login" />
    </Router>
  )
}
export default Pros
