import React from 'react'
import styles from './imagelogo.module.css'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import Img from 'gatsby-image'


const ImgLogo = ({imgRetail, name, slug}) => {
  return(
    <AniLink 
      className={styles.grid__item}
      fade to={`/product-images-and-logos/${slug}/`}>
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

export default ImgLogo
