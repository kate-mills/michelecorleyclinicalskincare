import React, { useState } from 'react'

import styled from 'styled-components'
import Thumbnail from './Thumbnail'

const Thumbnails = ({
  className,
  data,
  category,
  logoMedia = false,
  travelMedia = false,
}) => {
  const sizes = ['Retail', 'Travel']
  const [idx, setIdx] = useState(0)
  const sectionTitle = sizes[idx] + ' ' + category
  const btnTitle = 'SHOW ' + sizes[Number(!Boolean(idx))] + '-SIZE'

  const toggleSizes = () => {
    setIdx(prev => Number(!Boolean(prev)))
  }

  return (
    <section>
      {!logoMedia ? (
        <h2>
          <span>{sectionTitle}</span>
          <button className="btn" onClick={toggleSizes}>
            {btnTitle}
          </button>
        </h2>
      ) : (
        <h2>
          <span>{category}</span>
        </h2>
      )}
      <ul className={`${className}`}>
        {data.edges.map(({ node }) => {
          return (
            <Thumbnail
              key={node.contentful_id}
              image={
                logoMedia
                  ? node.thumb
                  : idx > 0
                  ? node.imgTravel
                  : node.imgRetail
              }
              showTitle={!logoMedia}
              slug={node.slug}
              isAwardWinner={node.isAwardWinner}
              awardImage={!!node.isAwardWinner ? node.awardImage : null}
              name={node.name}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default styled(Thumbnails)`
  & {
    border: 1px solid var(--mainMcc);
    display: grid;
    gap: 2px 2.5633333px;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    margin: 0 auto;
    & > li.listitem {
      background: var(--mainWhite);
      border: 1px solid var(--offWhite);

      :hover figure {
        box-shadow: var(--light-shadow);
      }
      & > a > .thumbnail {
        align-items: center;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        width: 100%;
        position: relative;

        & > figcaption {
          color: var(--mainBlack);
          font-size: 14px;
          line-height: 55px;
          margin: 0 auto;
          padding-bottom: 0;
          padding-left: 5px;
          padding-right: 5px;
          padding-inline: 5px;
          text-align: center;
          overflow-y: clip;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
        }
        & > .winner-img{
          position: absolute;
          right: 20px;
          bottom: 70px;
        }
      }
    }
  }
`
