import React from 'react'
import styles from '../css/mediagrid.module.css'

import ProductImage from './ProductImage'

const ProductImageList = props => {
  return (
    <div className={styles.mediagrid}>
      {props.data.edges.map(({ node }) => {
        return (
          <ProductImage
            key={node.contentful_id}
            className={styles.grid__item}
            {...node}
            thumbnail={node.imgRetail.fixed}
          />
        )
      })}
    </div>
  )
}

export default ProductImageList
