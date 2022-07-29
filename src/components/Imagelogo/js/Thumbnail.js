import React from 'react'
import styles from '../css/griditem.module.css'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Img from 'gatsby-image'

const Thumbnail = ({ thumbnail, name, slug, category}) => {
  let pathname = '/product-images-and-logos'

  if (typeof window !== `undefined`) {
    pathname = `${window.location.pathname}#${slug}`
  }

  return (
    <AniLink
      id={slug}
      className={styles.griditem}
      state={{ modal: true, closeTo: pathname }}
      to={`/product-images-and-logos/${slug}/`}
    >
      <div>
        {/* Show thumbnail which is at last index */}
        <Img fixed={thumbnail.fixed} />
      </div>
      <span className={styles.griditem__name}>{name}</span>
    </AniLink>
  )
}

export default Thumbnail
