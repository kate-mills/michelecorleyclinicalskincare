import React from 'react'
import styles from './imagelogo.module.css'

import Img from 'gatsby-image'


const ImgLogo = ({imgRetail, name}) => {
  console.log('ImgLogo', imgRetail)
  return(
    <div className={styles.grid__item}>
      <div className={styles.product__img__fluid}>
      <Img
        fixed={imgRetail.fixed}/>
      </div>
      <span className={styles.product__name}>
        {name}
      </span>
    </div>
  )
}

export default ImgLogo
