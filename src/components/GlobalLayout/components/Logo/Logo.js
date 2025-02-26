import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "michele-corley-clinical-skin-care-logo.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

const Logo = ({ className }) => {
  const data = useStaticQuery(query)

  return (
    <StyledLogo className={className}>
      <Link to="/">
      <GatsbyImage
        loading="eager"
        layout="constrained"
        image={data.file.childImageSharp.gatsbyImageData}
        alt="Michele Corley Clinical Skin Care Logo"
      />
      </Link>
    </StyledLogo>
  )
}

const StyledLogo = styled.div`
  max-width: 250px;
  margin: 1rem auto 0;
`

export default Logo
