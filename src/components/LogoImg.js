import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "michele-corley-clinical-skin-care-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 220, toFormat: WEBP) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export const Logo = () => {
  const data = useStaticQuery(query)
  return (
    <Wrapper>
      <Img
        loading="eager"
        fixed={data.file.childImageSharp.fixed}
        media="screen"
        alt="Michele Corley Clinical Skin Care Logo"
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  & {
    margin: 0 auto;
    text-align: center;
  }
  & img {
    object-fit: contain !important;
  }
`
