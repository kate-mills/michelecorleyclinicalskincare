import React from 'react'

import { graphql } from 'gatsby'
import { Router } from '@reach/router'
import {
  PrivateRoute,
  DefaultRoute,
  Orders,
  Manuals,
  Kits,
  Facials,
  Classes,
} from '../components/Pros'
import { GlobalLayout, Seo } from '../components'

const Pros = props => {
  const { location } = props
  return (
    <GlobalLayout title="Professionals" isPro={true} showSpaFndrLnk={false}>
      <Router primary={false}>
        <PrivateRoute
          path={`/pros/manuals/`}
          component={Manuals}
          location={location}
        />
        <PrivateRoute
          path={`/pros/kits/`}
          component={Kits}
          location={location}
        />
        <PrivateRoute
          path={`/pros/facials/`}
          component={Facials}
          location={location}
        />
        <PrivateRoute
          path={`/pros/classes/`}
          location={location}
          component={Classes}
        />
        <PrivateRoute
          path={`/pros/classes/:tag/`}
          location={location}
          component={Classes}
        />
        <PrivateRoute
          path={`/pros/orders/`}
          location={location}
          component={Orders}
        />
        <DefaultRoute path={`/pros/*`} location={location} default />
      </Router>
    </GlobalLayout>
  )
}
export default Pros

export const query = graphql`
  {
    media: airtableField(
      localFiles: { elemMatch: { name: { eq: "Catalog & Manual." } } }
    ) {
      localFiles {
        publicURL
      }
    }
  }
`
export const Head = ({location: {pathname}, params, data:{media:{localFiles}}, pageContext}) => {
  let [f] = localFiles
  return (
    <Seo
      title="Professionals Only"
      description="Get access to our exclusive information and education for skin care professionals."
      image={f?.publicURL}
    />
  )
}
