import React from 'react'

import { Link } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

const Thumbnail = ({
  image,
  showTitle,
  slug,
  name,
  isAwardWinner,
  awardImage,
}) => {
  return !image ? null : (
    <li id={`${slug}-img`} className="listitem">
      <Link
        state={{ id: `${slug}-img` }}
        to={`/product-images-and-logos/${slug}/`}
      >
        <span className="sr-only">View Larger Image.</span>
        <figure className={`thumbnail`}>
          <GatsbyImage
            loading="lazy"
            alt={`Static Media for ${name}`}
            image={image.gatsbyImageData}
          />
          <figcaption
            className={`${!showTitle ? 'sr-only' : 'thumbnail-title'}`}
          >
            {name}
            <span className="sr-only">{` Thumbnail`}</span>
          </figcaption>
          {isAwardWinner && (
            <GatsbyImage
              loading="lazy"
              image={awardImage.gatsbyImageData}
              alt={`Award emblem for ${name}`}
              className="winner-img"
            />
          )}
        </figure>
      </Link>
    </li>
  )
}
export default Thumbnail
