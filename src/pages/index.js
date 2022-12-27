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
      description="Achieve beautifully healthy skin. Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives.">

    {/*<h1>Beautifully Healthy Skin Starts Here</h1>*/}
        <Slider images={data.allFile.nodes} />
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
          fluid(maxWidth: 1700, fit: COVER, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
