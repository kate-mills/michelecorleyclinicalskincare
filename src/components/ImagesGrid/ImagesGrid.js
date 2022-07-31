import React from 'react'
import styled from 'styled-components'

import GridItem from './GridItem'

const ImageGrid = ({ className, data, logoMedia = false }) => {
  return (
    <ul className={`${className}`}>
      {data.edges.map(({ node }) => {
        return (
          <li id={`${node.slug}`} key={node.contentful_id}>
            <GridItem
              {...node}
              thumbnail={
                logoMedia ? node.images[node.images.length - 1] : node.imgRetail
              }
            />
          </li>
        )
      })}
    </ul>
  )
}

export default styled(ImageGrid)`
  & {
    width: 100%;
    border: 1px solid var(--mainMcc);
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    gap: 5px;
    padding: 10px;
    & li {
      background: var(--mainWhite);
      margin: 0 auto;
      padding: 0;
      width: 230px;
      :hover {
        box-shadow: var(--light-shadow);
      }
    }
  }
`
