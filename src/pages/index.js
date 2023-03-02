import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import Slider from '../components/Slider/Slider'
import YesNo from '../components/YesNo'


const Home = ({ data }) => {

  return (
    <Layout
      image={data?.seoImg?.nodes[0].publicURL}
      description="Achieve beautifully healthy skin. Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."
    >
      <h1>Beautifully Healthy Skin Starts Here</h1>
      <Slider images={data.allFile.nodes} />
      <YesNo />
    </Layout>
  )
}

export default Home

export const query = graphql`
  query {
    seoImg: allFile(
      filter: { relativePath: { eq: "michele-corley-products.webp" } }
    ) {
      nodes {
        publicURL
      }
    }
    allFile(filter: { relativeDirectory: { eq: "slideshow" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1700, fit: COVER, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
