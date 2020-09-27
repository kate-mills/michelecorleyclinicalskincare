import React from 'react'
import styles from './productimage.module.css'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import Img from 'gatsby-image'

const ProductImage = ({imgRetail, name, slug}) => {

  let pathname = '/product-images-and-logos'

  if (typeof window !== `undefined`) {
    pathname = `${window.location.pathname}#${name}`
  }

  return(
    <AniLink 
      id={name}
      className={styles.grid__item}
      state={{modal: true, closeTo: pathname}}
      to={`/product-images-and-logos/${slug}/`}>
      <div className={styles.product__img__fluid}>
      <Img
        fluid={imgRetail.fluid}/>
      </div>
      <span className={styles.product__name}>
        {name}
      </span>
      </AniLink>
  )
}

export default ProductImage
