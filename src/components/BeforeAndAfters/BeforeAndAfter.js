import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const BeforeAndAfter = ({
  data: {
    name,
    notes,
    media: { localFiles },
    product_list,
    product_heading,
  },
}) => {
  let img = localFiles[0]?.childImageSharp?.gatsbyImageData
  return (
    <StyledArticle>
      <div className={'media'}>
        <figure>
          <GatsbyImage
            image={img}
            alt={`Before and after of Michele Corley client using ${product_heading.toLowerCase()}`}
          />
          <figcaption>{notes}</figcaption>
        </figure>
      </div>
      <div className={'text'}>
        <h2>{product_heading}</h2>
        <ul data-bullet-list>
          {[...product_list.split('-').slice(1)].map(product => {
            return (
              <li key={product.trim()}>
                <p>{product.trim()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  & {
    align-items: center;
    border: 0.3125rem solid var(--mainMcc);
    border-radius: 0.625rem;
    box-shadow: var(--light-shadow);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 100%;
    > div.media,
    > div.text {
      max-width: 50%;
    }
    > div.media {
      > figure {
        & .gatsby-image-wrapper {
          border-radius: 0.625rem 0 0 0;
          height: auto;
        }
        & figcaption {
          font-size: 0.8rem;
          line-height: normal;
          margin: 0 auto;
          max-width: 100%;
          text-align: center;
          width: 400px;
        }
      }
    }

    > div.text {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      & h2 {
        font-size: 1rem;
        font-weight: 600;
        text-align: center;
      }
      & ul p {
        font-size: 0.95rem;
        line-height: normal;
      }
    }
    @media screen and (max-width: 820px) {
      > div.media,
      > div.text {
        max-width: 100%;
      }
      > div.media {
        > figure {
          & .gatsby-image-wrapper {
            display: flex;
            border-radius: 0.625rem 0.625rem 0 0;
          }
          & figcaption {
            width: 100%;
          }
        }
      }
    }
  }
`

export default BeforeAndAfter
