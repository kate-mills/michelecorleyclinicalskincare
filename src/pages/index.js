import React from 'react'
import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import Slider from '../components/Slider/Slider'
import YesNo from '../components/YesNo'


const Home = ({ data }) => {
  return (
    <PageModel
      seoTitle=""
      title=""
      description="Achieve beautifully healthy skin. Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."
      homePage>
    <h1>Beautifully Healthy Skin Starts Here</h1>
        <Slider interval={10000} images={data.allFile.nodes} />
        <YesNo />
    </PageModel>
  )
}

export default Home


export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "slideshow" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800, fit: COVER, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
