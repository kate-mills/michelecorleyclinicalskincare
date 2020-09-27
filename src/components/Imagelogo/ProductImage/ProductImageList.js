import React from 'react'
import styles from './productimagelist.module.css'

import ProductImage from './ProductImage'

const ProductImageList = (props) => {
  return (
    <div className={styles.img__logo__grid__container}>
      {
        props.data.edges.map(({node}) => {
          return (
            <ProductImage key={node.contentful_id}
              className={styles.grid__item}
              {...node}
            />
          )
        })
      }
    </div>
  )
}

export default ProductImageList 
