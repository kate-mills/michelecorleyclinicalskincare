import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, BeforeAndAfter } from '../components'

export default function BeforeAndAfterPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Before & After Page</h1>
      <p style={{ paddingBottom: 0 }}>
        These photos are provided by my dear clients utilizing only Michele
        Corley Clinical Skin Care Products (unless noted). The results were
        achieved by using proper home care product daily and most clients also
        received regular facials. No equipment beyond a steamer and magnifying
        lamp were used. These photos are not retouched and are generally taken
        with cellular phones.
      </p>
      <ul className="before-and-afters">
        {
          data.allAirtable.nodes.map(({id, data}) => {
            return <BeforeAndAfter key={id} data={data}/>
          })
        }
      </ul>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "BeforeAfter" } }
      sort: { data: { name: ASC } }
    ) {
      nodes {
        id
        data {
          name
          notes
          media {
            localFiles {
              childImageSharp {
                gatsbyImageData(
                  width: 1000
                )
              }
            }
          }
          product_list
          product_heading
        }
      }
    }
  }
`
