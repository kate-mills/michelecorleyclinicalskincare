import * as React from 'react'
import { graphql } from 'gatsby'
import { GlobalLayout, Slider, YesNo, Seo } from '../components'

export default function HomePage({ data }) {
  const {
    allFile: { nodes },
  } = data
  return (
    <GlobalLayout>
      <h1>Beautifully Healthy Skin Starts Here</h1>
      <Slider images={nodes} />
      <YesNo />
    </GlobalLayout>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "slideshow" } }, limit: 2) {
      nodes {
        childImageSharp {
          gatsbyImageData(width: 600, placeholder: BLURRED)
        }
      }
    }
  }
`

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo pathname={pathname} />
}
