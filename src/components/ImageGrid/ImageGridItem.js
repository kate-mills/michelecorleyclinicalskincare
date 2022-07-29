import React from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Img from 'gatsby-image'

const ImageGridItem = ({ className, thumbnail, name, slug, category }) => {
  let pathname = '/product-images-and-logos'

  if (typeof window !== `undefined`) {
    pathname = `${window.location.pathname}#${slug}`
  }

  return (
    <li className={`${className}`}>
      <AniLink
        id={slug}
        state={{ modal: true, closeTo: pathname }}
        to={`/product-images-and-logos/${slug}/`}
    className="imagegriditem"
      >
        <>
          {/* Show thumbnail which is at last index */}
          <Img fixed={thumbnail.fixed} alt={`Static Media for ${name} `}/>
        <p className={'imagegriditem__name'}>{name}</p>
        </>
      </AniLink>
    </li>
  )
}

export default styled(ImageGridItem)`
  & a.imagegriditem {
    margin: 0;
    text-align: center;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & a.imagegriditem:hover{
    box-shadow: var(--light-shadow);
   }
  & p.imagegriditem__name {
    font-size: 12px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    margin: 0;
  }
`
