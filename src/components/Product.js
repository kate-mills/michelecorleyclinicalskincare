import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

const Product = ({ singleProductPage = false, data, className }) => {
  const {
    imgRetail,
    name,
    slug,
    skinType,
    description: { description },
    keyIngredients,
  } = data

  return (
    <article className={`${className}`} id={slug}>
      {!!singleProductPage ? (
        <h1>
          <ProductTitle product={data} />
          <ProductBadges product={data} />
        </h1>
      ) : (
        <h2>
          <ProductTitle product={data} />
          <ProductBadges product={data} />
        </h2>
      )}
      <h3 className={`product-skintypes`}>
        {skinType.map((item, index) => (
          <span className={'skintype bold italic'} key={index}>
            {item}
          </span>
        ))}
      </h3>
      <p className="product-description pb0">{description}</p>
      <div className={`product-media`}>
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`} state={{ id: slug }}>
            <GatsbyImage
              image={imgRetail?.gatsbyImageData}
              alt={`Retail size ${name}`}
            />
          </Link>
        </div>
      </div>
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients:</p>
        <ul data-bullet-list id="ingredient-list">
          {keyIngredients.map(({ id, title, benefit }) => {
            return (
              <li className="key-ingredient" key={id}>
                <p className="pb0">
                  <span className="bold">{`${title}: `}</span>
                  <span>{` ${benefit}`}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

const ProductTitle = ({ product: { name, isAwardWinner, awardImage } }) => {
  return (
    <div className={`product-title`}>
      <span className={`name`}>{name}</span>
      {!!isAwardWinner && (
        <GatsbyImage
          className="emblem"
          image={awardImage?.gatsbyImageData}
          alt={`Best Product Award Emblem`}
        />
      )}
    </div>
  )
}

const ProductBadges = ({
  product: { name, isAcneSafe, isProOnly, isBst, pdf },
}) => {
  let [pdfZero] = pdf

  return (
    <div className={`product-badges`}>
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

export default styled(Product)`
  & {
    margin: 0 auto 1.5rem;
    h1,
    h2 {
      text-align: left;
      white-space: unset;
      & .product-title {
        align-items: flex-end;
        display: flex;
        gap: 0.625rem;
        justify-content: flex-start;
        line-height: var(--headingLineHeight);
        & .name {
          display: inline-block;
          font-size: 2rem; /* keep here */
          line-height: normal;
          min-width: 325px; /* stop emblem from hiding badges (aprox badges min-width)*/
          overflow: hidden;
          text-overflow: ellipsis;
        }
        & .emblem {
          min-width: 80px;
          top: 1rem;
        }
        @media (max-width: 576px) {
          & .name {
            min-width: unset;
          }
          & .emblem {
            top: unset;
          }
        }
      }
      & .product-badges {
        display: flex;
        flex-wrap: wrap;
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
    & .product-description {
      margin-inline: 1rem;
    }
    & .product-skintypes {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      font-size: 1rem;
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
      margin-block-start: 0;
      & > p.bold {
        font-size: 1.3rem;
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
            margin-inline-end: 4px;
          }
        }
      }
    }
    @media (max-width: 676px) {
      /*margin-inline: 0.2rem;*/
      & .product-ingredients {
        & .key-ingredient {
          margin-inline-start: 0;
        }
      }
    }
  }
`
