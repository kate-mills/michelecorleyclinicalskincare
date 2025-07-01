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
    <StyledLi>
      <GatsbyImage image={img} alt={alt} />
      <div className="col-txt txt-center">
        <p className="txt-sm pb0">{summary}</p>
        {!!link ? (
          <a href={link} className={'txt-sm btn'} title={`Read more about ${title}`}>
            Read More On Dermascope
          </a>
        ) : (
          <Link to={relativeLink} className={'txt-sm btn'} title={title}>
            {title}
          </Link>
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
    justify-content: center;
    margin-block-start: 20px;
    &:hover {
      box-shadow: var(--dark-shadow);
    }
    div.gatsby-image-wrapper {
      border-radius: 10px 0px 0px 10px;
    }
    div.col-txt {
        margin: 1rem;
      a.btn.txt-sm {
        margin-block-start: 0.5rem;
      }
    }
    @media screen and (max-width: 719px) {
      flex-wrap: wrap;
      div.gatsby-image-wrapper {
        border-radius: 10px 10px 0px 0px;
      }
    }
  }
`

export default InThePress
