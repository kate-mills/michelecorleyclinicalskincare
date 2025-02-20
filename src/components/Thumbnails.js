import React from 'react'

import {Link} from 'gatsby'
import Img from 'gatsby-image'

import styled from 'styled-components'

const ListItem = ({ title, slug, image, showTitle = true }) => {
  return ( !image ?  null : <li id={`${slug}-img`} className="listitem">
      <Link
        state={{ id: `${slug}-img` }}
        to={`/product-images-and-logos/${slug}/`}
      >
        <span className="sr-only">View Larger Image.</span>
        <figure className={`thumbnail`}>
          <Img loading="lazy" alt={`Static Media for ${title}`} fixed={image.fixed} />
          <figcaption
            className={`${!showTitle ? 'sr-only' : 'thumbnail-title'}`}
          >
            {title}
            <span className="sr-only">{` Thumbnail`}</span>
          </figcaption>
        </figure>
      </Link>
    </li>
  )
}

const Thumbnails = ({ className, data, logoMedia = false, travelMedia = false }) => {
  return (
    <ul className={`${className}`}>
      {data.edges.map(({ node }) => {
        return (
          <ListItem
            key={node.contentful_id}
            image={
              logoMedia ? node.images[node.images.length - 1]
              : travelMedia ? node.imgTravel: node.imgRetail
            }
            showTitle={!logoMedia}
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
    gap: 2px 2.5633333px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    margin: 0 auto;
    & > li.listitem {
      background: var(--mainWhite);
      border: 1px solid var(--offWhite);

      :hover figure {
        box-shadow: var(--light-shadow);
      }
      & > a > .thumbnail {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;

        & > figcaption {
          color: var(--mainBlack);
          font-size: 14px;
          line-height: 55px;
          margin: 0 auto;
          padding-bottom: 0;
          padding-left: 5px;
          padding-right: 5px;
          padding-inline: 5px;
          text-align: center;
          overflow-y: clip;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
      }
    }
  }
`
