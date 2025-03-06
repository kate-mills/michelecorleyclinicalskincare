import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, Articles } from '../components'

export default function ArticlesPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Articles</h1>
      <Articles lst={data.allAirtable.articles} />
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "MccArticles" } }
      sort: { data: { mcc_id: ASC } }
    ) {
      articles: edges {
        node {
          id
          data {
            title
            mcc_id
            summary
            link
            image {
              localFiles {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: DOMINANT_COLOR
                    layout: CONSTRAINED
                    width: 750
                  )
                }
              }
            }
          }
        }
      }
    }
  }
`
