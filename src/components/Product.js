import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import VideoPlayer from './VideoPlayer'

const Product = ({ singleProductPage = false, data, className }) => {
  const {
    imgRetail,
    name,
    slug,
    skinType,
    description: { description },
    keyIngredients,
    video,
  } = data

  return (
    <article className={`${className}`} id={slug}>
      {!singleProductPage ? (
        <h2>
          <ProductBadges product={data} />
        </h2>
      ) : (
        <h1>
          <ProductBadges product={data} />
        </h1>
      )}

      <h3 className={`product-skintypes`}>
        {skinType.map((item, index) => (
          <span className={'skintype bold'} key={index}>
            {item}
          </span>
        ))}
      </h3>
      <p className="product-description pb0">{description}</p>
      <div className={`product-media ${!!video ? 'video' : ''}`}>
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`} state={{ id: slug }}>
            <GatsbyImage
              image={imgRetail?.gatsbyImageData}
              alt={`Retail size ${name}`}
            />
          </Link>
        </div>
        {video && (
          <VideoPlayer
            title={`${name} from Michele Corley on Vimeo`}
            src={`https://player.vimeo.com/video/${video}`}
            className="video"
            maxWidth={'400px'}
          />
        )}
      </div>
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul data-bullet-list id="ingredient-list">
          {keyIngredients.map(ing => {
            let {
              name: { formatted: fmtNm },
              benefit,
            } = ing
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span>{`${fmtNm}: `}</span>
                  <span>{` ${benefit}`}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
      <hr />
    </article>
  )
}

const ProductBadges = ({ product }) => {
  let {
    name,
    acneSafe,
    proOnly,
    isBst,
    pdf: [pdfZero],
    award,
    awardImage,
  } = product

  return (
    <div className="product-badges">
      <span className="product-name">{name}</span>
      {acneSafe && <span className={`badge acne-safe`}>ACNE SAFE</span>}
      {isBst && <span className={`badge best-seller`}>BEST-SELLER</span>}
      {proOnly && <span className={`badge pro-only`}>PRO USE ONLY</span>}
      {!!pdfZero && (
        <a
          className="pdf badge"
          title={`Download pdf with product details and usage instructions for ${name}.`}
          href={
            pdfZero?.localFile?.publicURL ||
            pdfZero?.publicUrl ||
            pdfZero?.placeholderUrl
          }
          target="_blank"
          rel="noreferrer"
        >
          GET PRODUCT DETS
        </a>
      )}
      {!!award && (
        <GatsbyImage
          className="award-winner"
          image={awardImage?.gatsbyImageData}
          alt={`Best Product ${award} Award Emblem`}
        />
      )}
    </div>
  )
}

export default styled(Product)`
  & {
    margin: 0 auto;
    padding: 0.5rem 1rem;
    position: relative;
    h1,
    h2 {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-start;
      margin: 0 0;
      padding: 0 0;
      text-align: left;

      & .product-badges {
        display: contents;
        & .product-name {
          margin-inline-end: 5px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & :last-child {
          margin-inline-end: 0 !important;
        }
        .badge {
          background: var(--poppy0);
          border: 2px solid var(--poppy);
          color: var(--acneSafe);
          font-size: 0.85rem;
          letter-spacing: normal;
          line-height: normal;
          margin: 5px 5px 5px 0;
          overflow: hidden;
          padding-block: 0.125rem;
          padding-inline: 0.3125rem;
          text-align: center;
          text-overflow: ellipsis;
          transition:
            color,
            background 0.4s linear;
          white-space: nowrap;

          &.best-seller {
            border: 2px solid var(--mainBlack);
            color: var(--mainBlack);
          }
          &.pro-only {
            border: 2px solid var(--mainBlack);
            color: var(--poppy9);
          }
          &.pdf {
            background: var(--offWhite);
            border: 2px solid var(--darkGrey);
            color: var(--mainBlack);
            &:hover {
              background: var(--darkGrey);
            }
          }
        }
      }
    }
    & .product-description {
      margin-inline: 1rem;
    }
    & .product-media {
      align-items: center;
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-evenly;
      min-height: 225px;
      &.video {
        flex-wrap: wrap;
        @media (max-width: 736px) {
          min-height: 466px;
        }
      }
    }
    & .product-skintypes {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      font-size: 1rem;
      font-style: italic;
      justify-content: flex-start;
      line-height: 1.4;
      & span {
        &:not(:last-of-type) {
          &:after {
            content: ', ';
            margin-inline-end: 0.3rem;
          }
        }
      }
    }
    & .product-ingredients {
      margin-block-start: 0.5rem;
      & > p.bold {
        font-size: 1.3rem;
        font-weight: 500;
        padding-block-end: 0;
      }
      & .key-ingredient {
        margin-inline-start: 1rem;
        &:first-child p {
          padding-block-start: 0;
          margin-block-start: 0;
        }
        p {
          padding-block-end: 0;
          > :first-child {
            font-weight: 600;
            margin-inline-end: 4px;
          }
        }
      }
    }
    @media (max-width: 676px) {
      margin-inline: 0.2rem;
      & .product-ingredients {
        & .key-ingredient {
          margin-inline-start: 0;
        }
      }
    }
    hr {
      margin-block: 0.5rem 1rem;
    }
  }
`
