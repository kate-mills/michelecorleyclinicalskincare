import React from 'react'
import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import Slider from '../components/Slider/Slider'
import YesNo from '../components/YesNo'
import styled from 'styled-components'

const Home = ({ data }) => {
  return (
    <PageModel
      seoTitle="Michele Corley Clinical Skin Care"
      title="Michele Corley Clinical Skin Care"
      description="What makes us different in a sea of other brands? Our commitment to you and your business's success is by delivering superior products, unlimited access to our team, and keeping Michele Corley Clinical Skin Care products sold exclusively by Licensed Estheticians and Licensed Skincare Professionals."
      homePage
    >
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
