import React from 'react'
import styles from './imagelogo.module.css'

import AniLink from "gatsby-plugin-transition-link/AniLink";

import Img from 'gatsby-image'
import {getHashedLocation} from '../../utils/auth'


const ImgLogo = ({imgRetail, name, slug, category}) => {
  const closeToHash = getHashedLocation(name);
  return(
    <AniLink 
      id={name}
      className={styles.grid__item}
      state={{modal: true, closeTo: closeToHash}}
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

export default ImgLogo
