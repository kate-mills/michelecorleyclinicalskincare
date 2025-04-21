import React from 'react'
import { Router } from '@reach/router'

import { PATH_DTL } from '../constants/pro-info'

import { GlobalLayout } from '../components'
import { PrivateRoute, PublicLogin, OrderDetails } from '../components/Pros'

const Pros = props => {
  return (
    <GlobalLayout>
      <Router primary={false}>
        <PrivateRoute path={PATH_DTL.private.path} component={OrderDetails} />
        <PublicLogin path={PATH_DTL.public.path} />
      </Router>
    </GlobalLayout>
  )
}
export default Pros
