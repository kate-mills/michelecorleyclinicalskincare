import React from 'react'
import { Router } from '@reach/router'

import { PATH_PREFIX, PATH_DTL } from '../constants/pro-info'

import { GlobalLayout } from '../components'
import { PrivateRoute, PublicLogin, Orders, Manuals, Kits } from '../components/Pros'

const Pros = props => {
  return (
    <GlobalLayout title="Professionals"  isPro={true}>
      <Router primary={false}>
        <PrivateRoute path={PATH_DTL.private.path} component={Orders} />
        <PrivateRoute path={`${PATH_PREFIX}/manuals`} component={Manuals} />
        <PrivateRoute path={`${PATH_PREFIX}/kits`} component={Kits} />
        <PrivateRoute path={`${PATH_PREFIX}/facials`} component={Orders} />
        <PrivateRoute path={`${PATH_PREFIX}/classes`} component={Orders} />
        <PublicLogin path={PATH_DTL.public.path} />
      </Router>
    </GlobalLayout>
  )
}
export default Pros
