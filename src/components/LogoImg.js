import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const query = graphql`
  {
    file(relativePath: { eq: "final-logo.jpg" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`
export const Logo = () => {
  const data = useStaticQuery(query)
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', margin: '0 auto' }}
    >
      <Img
        fixed={data.file.childImageSharp.fixed}
        media="screen"
        alt="Michele Corley Clinical Skincare Logo"
      />
    </div>
  )
}
