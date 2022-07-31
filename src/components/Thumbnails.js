import React from 'react'

import AniLink from 'gatsby-plugin-transition-link/AniLink'
import Img from 'gatsby-image'

import styled from 'styled-components'

const ListItem = ({ title, slug, image }) => {
  return (
    <li id={`${slug}-img`} className="listitem">
      <AniLink
        state={{ id: `${slug}-img` }}
        to={`/product-images-and-logos/${slug}/`}
      >
        <span className="sr-only">View Larger Image.</span>
        <figure className={`thumbnail`}>
          <Img alt={`Static Media for ${title}`} fixed={image.fixed} />
          <figcaption>
            {title}
            <span className="sr-only">{` Thumbnail`}</span>
          </figcaption>
        </figure>
      </AniLink>
    </li>
  )
}

const Thumbnails = ({ className, data, logoMedia = false }) => {
  return (
    <ul className={`${className}`}>
      {data.edges.map(({ node }) => {
        return (
          <ListItem
            key={node.contentful_id}
            image={
              logoMedia ? node.images[node.images.length - 1] : node.imgRetail
            }
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
    gap: 20px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    margin: 0 auto;

    & > li.listitem {
      background: var(--mainWhite);
      :hover {
        box-shadow: var(--light-shadow);
      }
      & > a > .thumbnail{
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        & > figcaption {
          font-size: 14px;
          overflow: hidden;
          padding-bottom: 0;
          text-align: center;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin: 0 auto;
          max-width: 200px;
        }
      }
    }
  }
`
