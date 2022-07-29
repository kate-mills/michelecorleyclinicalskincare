import React from 'react'
import styled from 'styled-components'

import ImageGridItem from './ImageGridItem'

const ImageGrid = ({ className, data, logoMedia = false }) => {
  return (
    <ul className={`category-imagegrid ${className}`}>
      {data.edges.map(({ node }) => {
        return (
          <ImageGridItem
            key={node.contentful_id}
            {...node}
            thumbnail={
              logoMedia ? node.images[node.images.length - 1] : node.imgRetail
            }
          />
        )
      })}
    </ul>
  )
}

export default styled(ImageGrid)`
  & {
    width: 100%;
    margin: 0 auto;
    border: 1px solid var(--mainMcc);
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 5px;
  }
`
