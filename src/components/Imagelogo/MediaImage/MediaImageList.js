import React from 'react'
import styles from './mediaimagelist.module.css'

import MediaImage from './MediaImage'

const MediaImageList = props => {
  return (
    <div className={styles.media__logo__grid__container}>
      {props.data.edges.map(({ node }) => {
        return (
          <MediaImage
            key={node.contentful_id}
            className={styles.grid__item}
            {...node}
          />
        )
      })}
    </div>
  )
}

export default MediaImageList
