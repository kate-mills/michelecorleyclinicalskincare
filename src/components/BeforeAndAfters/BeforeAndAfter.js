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
    justify-content: center;
    margin: 1.25rem auto 0;
    width: 100%;
    > div.media {
      border-radius: 1rem;
      margin: 0 auto;
      height: auto;
      width: 40%;
      > figure {
        margin: 0 auto 0.5rem;
        & figcaption {
          font-size: 0.8rem;
          line-height: normal;
          text-align: center;
          width: 90%;
        }
      }
    }
    > div.text {
      margin: 0 auto;
      white-space: pre-line;
      width: 60%;
      > h2 {
        font-size: 0.95rem;
        font-weight: 600;
        margin-bottom: 0;
        text-align: center;
      }
      > ul {
        margin-left: 20%;
        white-space: pre-line;
        p {
          line-height: normal;
        }
      }
    }
    @media screen and (max-width: 820px) {
      > div.media,
      > div.text {
        width: 100%;
        > figure .gatsby-image-wrapper {
          display: flex;
        }
        > ul {
          width: 75%;
        }
      }
    }
  }
`

export default BeforeAndAfter
