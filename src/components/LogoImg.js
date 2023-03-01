import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "michele-corley-clinical-skin-care-logo.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, toFormat: WEBP, fit: CONTAIN) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
export const Logo = () => {
  const data = useStaticQuery(query)
  return (
    <LogoWrapper id="logo">
      <Img
        loading="eager"
        fluid={data.file.childImageSharp.fluid}
        media="screen"
        alt="Michele Corley Clinical Skin Care Logo"
      />
    </LogoWrapper>
  )
}

const LogoWrapper = styled.div`
  & {
    margin: auto auto;
    height: auto;
    div.gatsby-image-wrapper{
      max-width: 250px;
      margin: 6px auto 0;
    }
  }
`
