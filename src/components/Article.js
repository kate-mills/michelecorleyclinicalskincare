import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Article = ({
  data: {
    data: {
      summary,
      link,
      title,
      image: { localFiles },
    },
  },
}) => {
  let img = localFiles[0]?.childImageSharp?.gatsbyImageData
  let alt = `Dermascope magazine cover and ${title} article page`
  return (
    <StyledLi>
      <div className="col">
        <GatsbyImage image={img} alt={alt} />
      </div>
      <div className="col">
        <p>{summary}</p>
        {link && (
          <a href={link} className={'btn'}>
            Read Full Article
          </a>
        )}
      </div>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  & {
    align-items: center;
    border: 5px solid var(--mainMcc);
    border-radius: 15px;
    box-shadow: var(--light-shadow);
    display: flex;
    margin-block-start: 20px;
    &:hover {
      box-shadow: var(--dark-shadow);
    }
    & .col {
      width: 50%;
      & .gatsby-image-wrapper {
        border-radius: 10px 0px 0px 10px;
        img {
          max-width: 739px;
        }
      }
      & p {
        line-break: auto;
        margin: 0 auto;
        padding-block-end: 0.25rem;
        text-align: center;
        width: 75%;
      }
      & a {
        display: block;
        margin: 0 auto 0.5rem;
        width: fit-content;
      }
    }

  @media screen and (max-width: 739px) {
      flex-direction: column;
      & .col {
        width: 100%;
        & .gatsby-image-wrapper {
          border-radius: 10px 10px 0px 0px;
        }
        & p {
          font-size: small;
          max-width: 95%;
          width: 95%;
        }
      }
    }
  }
`

export default Article
