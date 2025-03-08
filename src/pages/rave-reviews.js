import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, RaveReviews } from '../components'

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
