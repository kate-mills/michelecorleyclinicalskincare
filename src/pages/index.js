import * as React from 'react'
import { graphql } from 'gatsby'

//import Layout from '../components/Layout'
import Slider from '../components/Slider'
import YesNo from '../components/YesNo'

export default function Home({ data }) {
  const {
    allFile: { nodes },
  } = data
  return (
    <div>
      <h1>Beautifully Healthy Skin Starts Here</h1>
      <Slider images={nodes} />
      <YesNo />
    </div>
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
