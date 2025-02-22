import * as React from 'react'
import { graphql } from 'gatsby'

import {GlobalLayout} from '../components/Layouts'
import Slider from '../components/Slider'
import YesNo from '../components/YesNo'

export default function Home({ data }) {
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
    allFile(filter: { relativeDirectory: { eq: "slideshow" } }) {
      nodes {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  }
`
