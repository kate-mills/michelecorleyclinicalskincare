import React from 'react'
import styled from 'styled-components'

import Img from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Thumbnail = ({ title, slug, image }) => {
  return (
    <li id={`${slug}-img`} className="thumbnail">
      <AniLink
        state={{ id: `${slug}-img` }}
        to={`/product-images-and-logos/${slug}/`}
        className="thumbnail-link"
      >
        <Img
          className={`thumbnail-content-img`}
          fixed={image.fixed}
          alt={`Static Media for ${title} `}
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
            title={node.name}
            slug={node.slug}
            image={
              logoMedia ? node.images[node.images.length - 1] : node.imgRetail
            }
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
