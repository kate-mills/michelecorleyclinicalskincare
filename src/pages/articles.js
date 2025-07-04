import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, ListItemImg, Seo } from '../components'

export default function ArticlesPage({
  data: {
    allAirtable: { nodes },
  },
}) {
  return (
    <GlobalLayout>
      <h1>Articles</h1>
      <p className="sr-only">
        Articles by Michele Corly on sensitive skin and various skin conditions,
        featured in Dermascope magazine.
      </p>
      <ul className="articles">
        {nodes.map(({ id, data }) => {
          return <ListItemImg key={id} data={data} />
        })}
      </ul>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "MccArticles" } }
      sort: { data: { mcc_id: ASC } }
    ) {
      nodes {
        id
        data {
          summary
          link
          linkTxt
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

export const Head = ({ location, params, data, pageContext }) => {
  return (
    <Seo
      title="Articles Written By Michele Corley"
      description="Find articles about sensitive skin and various skin conditions by Michele Corley featured in Dermascope magazine."
    />
  )
}
