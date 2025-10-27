import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const query = graphql`
  {
    file(relativePath: { eq: "2025/logo.webp" }) {
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
  & {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5em;

    .gatsby-image-wrapper {
      max-width: 175px;
    }
    a {
      display: block;
    }

    @media (max-width: 767px) {
      .gatsby-image-wrapper {
        max-width: 125px;
      }
    }
  }
`

export default Logo
