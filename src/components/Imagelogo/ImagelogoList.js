import React from 'react'
import styles from './imagelogolist.module.css'

import ImageLogo from './Imagelogo'

const ImagelogoList = (props) => {
  return (
    <div className={styles.img__logo__grid__container}>
      {
        props.data.edges.map(({node}) => {
          return (
            <ImageLogo key={node.contentful_id}
              className={styles.grid__item}
              {...node}
            />
          )
        })
      }
    </div>
  )
}

export default ImagelogoList
