import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

const ProductWinner = ({ data, className }) => {
  const { imgRetail, name, slug } = data

  return (
    <article className={`${className}`} id={slug}>
      <h2>
        <ProductBadges product={data} />
      </h2>
      <div className={`product-media`}>
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`} state={{ id: slug }}>
            <GatsbyImage
              image={imgRetail?.gatsbyImageData}
              alt={`Retail size ${name}`}
            />
          </Link>

          <GatsbyImage
            className="award-winner"
            image={data.awardImage?.gatsbyImageData}
            alt={`Best Product Award Emblem`}
          />
        </div>
      </div>
    </article>
  )
}

const ProductBadges = ({ product }) => {
  let {
    name,
    isAcneSafe,
    isProOnly,
    isBst,
    pdf: [pdfZero],
    isAwardWinner,
    awardImage,
  } = product

  return (
    <div className="product-badges">
      <span className="product-name">{name}</span>
      {isAcneSafe && (
        <span className={`badge txt-sm txt-center acne-safe`}>ACNE SAFE</span>
      )}
      {isBst && (
        <span className={`badge txt-sm  txt-center best-seller`}>
          BEST-SELLER
        </span>
      )}
      {isProOnly && (
        <span className={`badge txt-sm txt-center pro-only`}>PRO USE ONLY</span>
      )}
      {!!pdfZero && (
        <a
          className="pdf badge txt-sm txt-center"
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
    </div>
  )
}

export default styled(ProductWinner)`
  & {
    border: 1px solid var(--mainMcc);
    position: relative;
    width: 48%;
    margin-block: 0;
    padding-block: 1rem;
    padding-inline: 0.5rem;

    h2 {
      margin: 0 0;
      padding: 0 0;
      padding-inline: 0.2rem;
      text-align: center;
      & .product-badges {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;

        & .product-name {
          font-size: 1rem; /* keep here */
          font-weight: 500;
          min-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          text-wrap: nowrap;
          width: 150px;
        }
        .badge {
          background: var(--poppy0);
          border: 2px solid var(--poppy);
          color: var(--acneSafe);
          line-height: normal;
          margin: 5px 5px 5px 0;
          overflow: hidden;
          padding-block: 0.125rem;
          padding-inline: 0.3125rem;
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
    & .product-media {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      text-align: center;
      align-items: center;
      div {
        vertical-align: middle;
      }
    }
    @media (max-width: 676px) {
      width: 100%;
    }
  }
`
