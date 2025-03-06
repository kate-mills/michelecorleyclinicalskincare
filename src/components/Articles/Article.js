import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Article = ({
  article: {
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
    <StyledDiv>
      <GatsbyImage image={img} alt={alt} />
      <div className="col-txt">
        <p>{summary}</p>
        {link && (
          <a href={link} className={'btn'}>
            Read Full Article
          </a>
        )}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
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
    div.gatsby-image-wrapper {
      border-radius: 10px 0px 0px 10px;
    }
    > div.col-txt {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      margin: 0 auto 10px;
      padding-block-end: 0.5em;
      text-align: center;
      > p {
        padding-block-end: 0.5em;
        width: 95%;
      }
      > a {
        width: fit-content;
        max-width: 90%;
      }
    }
    @media screen and (max-width: 739px) {
      & {
        flex-direction: column;
        div.gatsby-image-wrapper {
          border-radius: 10px 10px 0px 0px;
        }
      }
    }
  }
`

export default Article
