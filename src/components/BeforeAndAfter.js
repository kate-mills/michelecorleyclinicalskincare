import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const BeforeAndAfter = ({
  data: {
    name,
    notes,
    media: { localFiles },
    skintype,
    product_list,
  },
}) => {
  let img = localFiles[0]?.childImageSharp?.gatsbyImageData
  return (
    <StyledLi>
      <div className={'col media'}>
        <figure>
          <GatsbyImage
            image={img}
            alt={`Before and after of Michele Corley client using home care products for ${skintype}.`}
          />
          <figcaption className="txt-sm txt-center">{notes}</figcaption>
        </figure>
      </div>
      <div className={'col details'}>
        <p className="bold heading pb0 txt-center txt-narrow">
          Home care for {skintype}.
        </p>
        <ul data-bullet-list>
          {[...product_list.split('-').slice(1)].map(product => {
            return (
              <li key={product.trim()} className="txt-sm txt-narrow">
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
    flex-flow: row wrap;
    margin-block-end: 1rem;
    &:hover {
      box-shadow: var(--dark-shadow);
    }

    & .col {
      &.media {
        background: var(--offWhite);
        width: 40%;
        min-width: 40%;
        figcaption {
          line-height: normal;
          white-space: normal;
        }
      }
      &.details {
        align-self: center;
        justify-items: anchor-center;
        max-width: 100%;
        width: 60%;

        > p.heading {
          color: var(--poppy);
          width: 80%;
          line-height: 1.4;
        }

        ul[data-bullet-list] {
          li {
            line-height: normal;
            white-space: normal;
            p {
              margin-block: 0;
              padding-block-end: 0;
            }
          }
        }
      }
      .gatsby-image-wrapper {
        border-radius: 0.425rem 0 0 0;
      }
    }

    @media (max-width: 750px) {
      & .col {
        &.media,
        &.details {
          width: 100%;
          > p.heading {
            padding-block-start: 1rem;
          }
        }
        .gatsby-image-wrapper {
          border-radius: 0.425rem 0.425rem 0 0;
        }
      }
    }
  }
`

export default BeforeAndAfter
