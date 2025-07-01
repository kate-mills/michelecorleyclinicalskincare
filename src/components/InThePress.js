import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const InThePress = ({ data }) => {
  let { title, summary, image, link, relativeLink } = data

  let img = image?.localFiles[0]?.childImageSharp?.gatsbyImageData
  let alt = !!link
    ? `${title} Magazine Cover &  Article Page`
    : `${title} Marketing Materials`

  return (
    <StyledDiv>
      <GatsbyImage image={img} alt={alt} />
      <div className="col-txt txt-center">
        <p className="pb0">{summary}</p>
        {!!link ? (
          <a href={link} className={'btn'}>
            Read More
          </a>
        ) : (
          <Link to={relativeLink} className={'btn'}>
            Read More
          </Link>
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
    justify-content: center;
    margin-block-start: 20px;
    &:hover {
      box-shadow: var(--dark-shadow);
    }
    div.gatsby-image-wrapper {
      border-radius: 10px 0px 0px 10px;
      width: 100%;
    }
    > div.col-txt {
        width: 90%;
      a {
        margin-block: 0.5rem;
      }
    }
    @media screen and (max-width: 554px) {
      flex-wrap: wrap;
      div.gatsby-image-wrapper {
        border-radius: 10px 10px 0px 0px;
      }
    }
  }
`

export default InThePress
