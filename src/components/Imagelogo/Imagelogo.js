import React from 'react'
import styles from './imagelogo.module.css'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import Img from 'gatsby-image'


const ImgLogo = ({imgRetail, name, slug}) => {
  console.log('ImgLogo', imgRetail)
  return(
    <div className={styles.grid__item}>
      <AniLink fade to={`/product-images-and-logos/${slug}/`}>
      <div className={styles.product__img__fluid}>
      <Img
        fixed={imgRetail.fixed}/>
      </div></AniLink>
      <AniLink fade to={`/product-images-and-logos/${slug}/`}>
      <span className={styles.product__name}>
        {name}
      </span>
      </AniLink>
    </div>
  )
}

export default ImgLogo
