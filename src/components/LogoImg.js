import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "final-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 220) {
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
        fixed={data.file.childImageSharp.fixed}
        media="screen"
        alt="Michele Corley Clinical Skincare Logo"
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
