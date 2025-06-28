import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { GlobalLayout, YesNo, Seo } from '../components'

export default function HomePage({ data }) {
  const {
    file: {
      childImageSharp: { image },
    },
  } = data
  return (
    <GlobalLayout>
      <h1>Beautifully Healthy Skin Starts Here</h1>
      <div style={{ textAlign: 'center' }}>
        <GatsbyImage image={image} />
      </div>
      <YesNo />
    </GlobalLayout>
  )
}

export const query = graphql`
  query {
    file(relativePath: { eq: "2025/cover-products.jpg" }) {
      childImageSharp {
        image: gatsbyImageData(height: 470, placeholder: BLURRED)
      }
    }
  }
`

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo pathname={pathname} />
}
