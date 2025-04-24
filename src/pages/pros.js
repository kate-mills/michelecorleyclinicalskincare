import React from 'react'
import { Router } from '@reach/router'

import { PATH_PREFIX, PATH_DTL } from '../constants/pro-info'

import { GlobalLayout } from '../components'
import { PrivateRoute, PublicLogin, OrderDetails } from '../components/Pros'

const Pros = props => {
  return (
    <GlobalLayout title="Professionals" showLogo={false}>
      <Router primary={false}>
        <PrivateRoute path={PATH_DTL.private.path} component={OrderDetails} />
        <PrivateRoute path={`${PATH_PREFIX}/manuals`} component={OrderDetails} />
        <PrivateRoute path={`${PATH_PREFIX}/kits`} component={OrderDetails} />
        <PrivateRoute path={`${PATH_PREFIX}/facials`} component={OrderDetails} />
        <PrivateRoute path={`${PATH_PREFIX}/classes`} component={OrderDetails} />
        <PrivateRoute path={`${PATH_PREFIX}/orders`} component={OrderDetails} />
        <PublicLogin path={PATH_DTL.public.path} />
      </Router>
    </GlobalLayout>
  )
}
export default Pros
