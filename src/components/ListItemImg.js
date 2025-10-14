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
  idx = 0,
}) => {
  let img = localFiles[0]?.childImageSharp?.gatsbyImageData
  return (
    <StyledLi>
      <div className="col">
        <GatsbyImage
          image={img}
          alt={alt}
          loading={idx > 0 ? 'lazy' : 'eager'}
        />
      </div>
      <div className="col txt-center">
        <p>{summary}</p>
        {!!link ? (
          <a href={link} className={'btn'}>
            {linkTxt}
          </a>
        ) : (
          <Link to={relativeLink} className={'btn'} title={title}>
            {`Read More Here`}
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
    & .col {
      width: 50%;
      & .gatsby-image-wrapper {
        border-radius: 10px 0px 0px 10px;
        border-right: 1px solid var(--mainMcc);
      }
      & p {
        margin: 0 auto;
        padding-block-end: 0.25rem;
        max-width: 90%;
      }
      & a {
        display: inline-block;
        font-size: 0.8125rem;
        letter-spacing: 0;
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
      & .col {
        width: 100%;
        & .gatsby-image-wrapper {
          border-top-right-radius: 10px;
          border-bottom-left-radius: 0px;
        }
      }
    }
  }
`

export default ListItemImg
