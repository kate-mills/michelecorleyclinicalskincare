import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "final-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300, fit: CONTAIN) {
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
    display: flex;
    justify-content: center;
  }
  & img{
    object-fit: contain !important;
  }
`
