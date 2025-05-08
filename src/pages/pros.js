import React from 'react'
import { Router } from '@reach/router'

import { GlobalLayout, Seo } from '../components'
import { PrivateRoute, PublicLogin, Orders, Manuals, Kits, Facials, Classes } from '../components/Pros'

const Pros = props => {
  return (
    <GlobalLayout title="Professionals"  isPro={true} showSpaFndrLnk={false}>
      <Seo title="Michele Corley Professionals Only" noindex={true}/>
      <Router primary={false}>
        <PublicLogin path={`/pros/`} />
        <PrivateRoute path={`/pros/manuals/`} component={Manuals} />
        <PrivateRoute path={`/pros/kits/`} component={Kits} />
        <PrivateRoute path={`/pros/facials/`} component={Facials} />
        <PrivateRoute path={`/pros/classes/`} component={Classes} />
        <PrivateRoute path={`/pros/classes/:tag/`} component={Classes} />
        <PrivateRoute path={`/pros/orders/`} component={Orders} />
      </Router>
    </GlobalLayout>
  )
}
export default Pros
