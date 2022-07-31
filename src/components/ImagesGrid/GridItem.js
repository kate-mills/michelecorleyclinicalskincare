import React from 'react'
import styled from 'styled-components'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Img from 'gatsby-image'

const ImageItem = ({ className, thumbnail, name, slug, category }) => {
  return (
      <AniLink
        state={{slug}}
        to={`/product-images-and-logos/${slug}/`}
    className={className}>
          {/* Show thumbnail which is at last index */}
          <Img fixed={thumbnail.fixed} alt={`Static Media for ${name} `}/>
        <p className={'griditem__name'}>{name}</p>
      </AniLink>
  )
}

export default styled(ImageItem)`
  & {
    margin: 0;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  & .griditem__name {
    font-size: 12px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0;
    margin: 0;
  }
`
