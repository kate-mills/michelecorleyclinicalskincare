import React from 'react'
import styles from '../css/mediagrid.module.css'

import Thumbnail from './Thumbnail'

const ThumbnailGrid = ({data, logoMedia=false}) => {

  return (
    <div className={styles.mediagrid}>
      {data.edges.map(({ node }) => {

        return (
          <Thumbnail
            key={node.contentful_id}
            className={styles.grid__item}
            {...node}
            thumbnail={logoMedia ? node.images[node.images.length - 1] : node.imgRetail }
          />
        )
      })}
    </div>
  )
}

export default ThumbnailGrid
