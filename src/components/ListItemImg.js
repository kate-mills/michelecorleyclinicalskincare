import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Link } from 'gatsby'
import styled from 'styled-components'

const ListItemImg = ({
  data: {
    summary,
    link,
    linkTxt,
    relativeLink,
    title,
    alt,
    image: { localFiles },
  },
}) => {
  let img = localFiles[0]?.childImageSharp?.gatsbyImageData
  return (
    <StyledLi>
      <div className="col">
        <GatsbyImage image={img} alt={alt} />
      </div>
      <div className="col txt-center">
        <p>{summary}</p>
        {!!link ? (
          <a href={link} className={'letter-0 txt-sm btn'}>
            {linkTxt}
          </a>
        ) : (
          <Link
            to={relativeLink}
            className={'letter-0 txt-sm btn'}
            title={title}
          >
            {linkTxt}
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
    margin: 20px auto 0;
    &:hover {
      box-shadow: var(--dark-shadow);
    }
    & .gatsby-image-wrapper {
      border-radius: 10px 0px 0px 10px;
    }
    & .col {
      width: 50%;
      & p {
        margin: 0 auto;
        padding-block-end: 0.25rem;
        max-width: 90%;
      }
      & a {
        display: inline-block;
        max-width: 90%;
        margin: 0 auto 0.5rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: fit-content;
      }
    }
    @media screen and (max-width: 719px) {
      flex-direction: column;
      & .gatsby-image-wrapper {
        border-radius: 10px 10px 0px 0px;
      }
      & .col {
        width: 100%;
      }
    }
  }
`

export default ListItemImg 
