import React from 'react'
import styles from './productimage.module.css'

import AniLink from 'gatsby-plugin-transition-link/AniLink'

import Img from 'gatsby-image'

const ProductImage = ({ imgRetail, name, slug }) => {
  let pathname = '/product-images-and-logos'

  if (typeof window !== `undefined`) {
    pathname = `${window.location.pathname}#${slug}`
  }

  return (
    <AniLink
      id={`${slug}`}
      className={styles.productimagelist__item}
      state={{ modal: true, closeTo: pathname }}
      to={`/product-images-and-logos/${slug}/`}
    >
      <div>
        <Img fixed={imgRetail.fixed} />
      </div>
      <span className={styles.productimagelist__item_name}>{name}</span>
    </AniLink>
  )
}

export default ProductImage
