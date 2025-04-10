import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, InThePress } from '../components'

export default function PressPage({ data:{allAirtable:{lst}} }) {
  return (
    <GlobalLayout>
      <h1>In the Press</h1>
      <p>
        Award-winning professional skin care in the press for dry and oily skin
        types to sensitive, sun-damaged, and acne-prone skin exclusively sold
        through licensed skincare professionals.
      </p>
      <ul>
        {lst.map(({ id, data }) => {
          return <InThePress key={id} data={data} />
        })}
      </ul>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Press" } }
      sort: { data: { sortOrder: DESC } }
    ) {
      lst:nodes {
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
