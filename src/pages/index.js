import React from 'react'
import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import Slider from '../components/Slider/Slider'
import YesNo from '../components/YesNo'
import styled from 'styled-components'

const Home = ({ data }) => {
  return (
    <PageModel
      seoTitle=""
      title=""
      description="Achieve beautifully healthy skin. Discover premium skincare loaded with powerful peptides, potent antioxidants, stable vitamin c, active enzymes, nutritious plant oils, balancing essential oils, and gentle preservatives."
      homePage>
      <Wrapper>
        <Slider interval={10000} images={data.allFile.nodes} />
        <YesNo />
      </Wrapper>
    </PageModel>
  )
}

export const query = graphql`
  query {
    allFile(filter: { relativeDirectory: { eq: "slideshow/fixed" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 1280, maxHeight: 800, fit: COVER) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const Wrapper = styled.section`
  width: 85%;
  margin: 0 auto;
  @media (max-width: 672px) {
    width: 100%;
  }
`
export default Home
