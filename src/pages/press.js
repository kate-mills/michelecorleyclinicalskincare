import * as React from 'react'
import { graphql } from 'gatsby'

import {GlobalLayout, PressList} from '../components'

export default function PressPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Press Page</h1>
      <PressList lst={data.allAirtable.nodes}/>
    </GlobalLayout>
  )
}


export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "Press"}}, sort: {data: {sortOrder: DESC}}) {
      nodes {
        id
        data {
          sortOrder
          mcc_id
          title
          summary
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(width: 500)
              }
            }
          }
          link
          relativeLink
        }
      }
    }
  }
`
