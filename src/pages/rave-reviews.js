import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, RaveReviews, Seo } from '../components'

export default function RaveReviewsPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Rave Reviews</h1>
      <section>
        <RaveReviews lst={data.allAirtable.reviews} />
      </section>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "RaveReviews" } }
      sort: { data: { mcc_id: ASC } }
    ) {
      reviews: nodes {
        id
        data {
          review
          signature
        }
      }
    }
  }
`
export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo title="Rave Reviews from Licensed Skincare Professionals" description="Licensed skincare professionals share the transformative power of Michele Corley Clinical Skin Care products, customer service, and the education that empowers them." pathname={pathname}/>
}

