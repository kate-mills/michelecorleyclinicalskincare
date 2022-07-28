import React from 'react'
import styles from './mediaimage.module.css'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Img from 'gatsby-image'

const MediaImage = ({ name, slug, category, images }) => {
  let pathname = '/product-images-and-logos'

  if (typeof window !== `undefined`) {
    pathname = `${window.location.pathname}#${name}`
  }

  return (
    <AniLink
      id={slug}
      className={styles.grid__item}
      state={{ modal: true, closeTo: pathname }}
      to={`/product-images-and-logos/${slug}/`}
    >
      <div className={styles.media__img__fluid}>
        {/* Show thumbnail which is at last index */}
        <Img fluid={images[images.length - 1].fluid} />
      </div>
      <span className={styles.media__name}>{name}</span>
    </AniLink>
  )
}

export default MediaImage
