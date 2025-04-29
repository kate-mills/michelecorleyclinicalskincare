import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, InThePress, Seo } from '../components'

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
export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo title="Michele Corley Featured In The Press" description="Award-winning skincare products featured in the press for all skin types, including dry, oily, sensitive, sun-damaged, and acne-prone skin, exclusively sold through licensed skincare professionals." pathname={pathname}/>
}

