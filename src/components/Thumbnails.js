import React from 'react'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

import styled from 'styled-components'

const Thumbnail = ({ title, slug, image }) => {
  return (
    <li id={`${slug}-img`} className="thumbnail">
      <AniLink
        className="thumbnail-link"
        state={{ id: `${slug}-img` }}
        to={`/product-images-and-logos/${slug}/`}
      >
        <Img
          alt={`Static Media for ${title} `}
          fixed={image.fixed}
        />
        <p className={`thumbnail-content-title`}>{title}</p>
      </AniLink>
    </li>
  )
}

const Thumbnails = ({ className, data, logoMedia = false }) => {
  return (
    <ul className={`${className}`}>
      {data.edges.map(({ node }) => {
        return (
          <Thumbnail
            key={node.contentful_id}
            image={ logoMedia ? node.images[node.images.length - 1] : node.imgRetail }
            slug={node.slug}
            title={node.name}
          />
        )
      })}
    </ul>
  )
}

export default styled(Thumbnails)`
  & {
    border: 1px solid var(--mainMcc);
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    padding: 10px;

    & > li.thumbnail {
      background: var(--mainWhite);
      :hover {
        box-shadow: var(--light-shadow);
      }
      & > a.thumbnail-link {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & > .thumbnail-content-title {
          font-size: 12px;
          overflow: hidden;
          padding-bottom: 0;
          text-align: center;
          text-overflow: ellipsis;
          width: 95%;
          white-space: nowrap;
        }
      }
    }
  }
`
