import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, ListItemImg, Seo } from '../components'

export default function PressPage({
  data: {
    allAirtable: { nodes },
  },
}) {
  return (
    <GlobalLayout>
      <h1>In the Press</h1>
      <p className="sr-only">
        Award-winning professional skin care in the press for dry and oily skin
        types to sensitive, sun-damaged, and acne-prone skin exclusively sold
        through licensed skincare professionals.
      </p>
      <ul>
        {nodes.map(({ id, data }) => {
          return <ListItemImg key={id} data={data}/>
        })}
      </ul>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Press" } }
      sort: { data: { mcc_id: DESC } }
    ) {
      nodes {
        id
        data {
          summary
          link
          linkTxt
          relativeLink
          title
          alt
          image {
            localFiles {
              childImageSharp {
                gatsbyImageData(width: 640)
              }
            }
          }
        }
      }
    }
  }
`
export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Michele Corley Featured In The Press"
      description="Award-winning skincare products featured in the press for all skin types, including dry, oily, sensitive, sun-damaged, and acne-prone skin, exclusively sold through licensed skincare professionals."
      pathname={pathname}
    />
  )
}
