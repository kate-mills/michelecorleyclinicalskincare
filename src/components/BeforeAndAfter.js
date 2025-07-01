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
    <StyledLi>
      <div className={'col'}>
        <figure>
          <GatsbyImage
            image={img}
            alt={`Before and after of Michele Corley client using ${product_heading.toLowerCase()}`}
          />
          <figcaption className="txt-sm txt-center">{notes}</figcaption>
        </figure>
      </div>
      <div className={'col'}>
        <p className="bold pb0 txt-center">{product_heading}</p>
        <ul data-bullet-list>
          {[...product_list.split('-').slice(1)].map(product => {
            return (
              <li key={product.trim()}>
                <p className="txt-sm">{product.trim()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </StyledLi>
  )
}

const StyledLi = styled.li`
  & {
    border: 0.3125rem solid var(--mainMcc);
    border-radius: 0.625rem;
    box-shadow: var(--light-shadow);
    display: flex;
    flex-wrap: wrap;
    margin-block-end: 1rem;
    padding-block-end: 5px;
    &:hover {
      box-shadow: var(--dark-shadow);
    }
    & .col {
      align-items: center;
      display: flex;
      width: 50%;
      justify-content: center;
      flex-wrap: wrap;
      align-content: center;
      .gatsby-image-wrapper {
        border-radius: 0.425rem 0 0 0;
      }
      figcaption {
        line-height: normal;
        width: 99%;
      }
      p.bold.pb0 {
        width: 95%;
      }
      ul[data-bullet-list] {
        p {
          margin-block: 0;
          padding-block-end: 0;
        }
      }
    }
    @media (max-width: 800px) {
      & .col {
        width: 100%;
        .gatsby-image-wrapper {
          border-radius: 0.425rem 0.425rem 0 0;
        }
      }
    }
  }
`

export default BeforeAndAfter
