import * as React from 'react'
import { graphql } from 'gatsby'

import { GlobalLayout, BeforeAndAfter, Seo } from '../components'

export default function BeforeAndAfterPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Before & After</h1>
      <p style={{ paddingBottom: '5px' }}>
        These photos are provided by my dear clients utilizing only Michele
        Corley Clinical Skin Care Products (unless noted). The results were
        achieved by using proper home care product daily and most clients also
        received regular facials. No equipment beyond a steamer and magnifying
        lamp were used. These photos are not retouched and are generally taken
        with cellular phones.
      </p>
      <ul className="before-and-afters">
        {data.allAirtable.nodes.map(({ id, data }) => {
          return <BeforeAndAfter key={id} data={data} />
        })}
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
                gatsbyImageData(width: 750)
              }
            }
          }
          product_heading
          skintype
          product_list
        }
      }
    }
  }
`

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Michele Corley Before And After Photos"
      pathname={pathname}
      description="Before-and-after photos from Michele Corley Professional Estheticians show client results achieved by using proper home care products daily."
    />
  )
}
