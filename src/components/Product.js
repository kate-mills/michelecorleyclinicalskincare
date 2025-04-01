import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import VideoPlayer from './VideoPlayer'

const Product = ({ singleProductPage = false, data, className }) => {
  const {
    imgRetail: { gatsbyImageData },
    name,
    slug,
    skinType,
    description: { description },
    keyIngredients,
    video,
  } = data

  return (
    <article className={className} id={slug}>
      <ProductTitle singleProductPage={singleProductPage} data={data} />
      <h4 className={`product-skintypes`}>
        {skinType.map((item, index) => (
          <span className={'skintype'} key={index}>
            {item}
          </span>
        ))}
      </h4>
      <p>{description}</p>
      <div className="product-media">
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`}>
            <GatsbyImage image={gatsbyImageData} alt={`Retail size ${name}`} />
          </Link>
        </div>
        {video && (
          <VideoPlayer
            title={`${name} from Michele Corley on Vimeo`}
            src={`https://player.vimeo.com/video/${video}`}
            className="video"
          />
        )}
      </div>
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul data-bullet-list id="ingredient-list">
          {keyIngredients.map(ing => {
            let {
              name: {formatted:fmtNm},
              benefit
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
    </article>
  )
}

const ProductTitle = props => {
  let { singleProductPage, data } = props
  return !singleProductPage ? (
    <h2>
      <div className="product-name">{data.name}</div>
      <ProductBadges product={data} />
    </h2>
  ) : (
    <h1>
      <div className="product-name">{data.name}</div>
      <ProductBadges product={data} />
    </h1>
  )
}

const ProductBadges = ({ product }) => {
  let {
    name,
    acneSafe,
    professionalOnly: proOnly,
    isBestSeller: isBst,
    award,
    profiles: pdf,
    awardImage,
  } = product
  return (
    <div className="product-badges">
      {acneSafe && <span className={`badge acne-safe`}>ACNE SAFE</span>}
      {isBst && <span className={`badge best-seller`}>BEST-SELLER</span>}
      {proOnly && <span className={`badge pro-only`}>PRO USE ONLY</span>}
      {!!award ? (
        <GatsbyImage
          width={70}
          height={70}
          className="award-winner"
          image={awardImage?.gatsbyImageData}
          alt={`Best Product ${award} Award Emblem`}
        />
      ) : null}
      {!!pdf ? (
        <a
          className="pdf badge"
          title={`Download pdf with product details and usage instructions for ${name}.`}
          href={pdf[0].file.url}
          target="_blank"
          rel="noreferrer"
        >
          GET PRODUCT DETS
        </a>
      ) : null}
    </div>
  )
}

export default styled(Product)`
  & {
    margin: 20px 0;
    max-width: 100%;
    h1,
    h2 {
      align-items: center;
      color: var(--poppy);
      display: flex;
      flex-wrap: wrap;
      margin-block-end: unset;
      text-align: left;
      & .product-name {
        margin-inline-end: 0.5rem;
        white-space: normal;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      & .product-badges {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        .badge {
          background: var(--poppy);
          border: 2px solid var(--darkGrey);
          color: var(--offWhite);
          display: inline-block;
          font-size: 0.75rem;
          line-height: 0.75rem;
          margin-block: 0.2rem;
          margin-inline: 0.2rem;
          padding: 0.2rem;
          text-align: center;
          &.best-seller,
          &.pro-only {
            background: var(--offWhite);
            color: var(--poppy);
          }
          &.best-seller {
            border-color: var(--poppy);
          }
          &:first-child {
            margin-inline-start: 0;
          }
          &.pdf {
            background: var(--blackText);
            border-color: var(--poppyDark);
            color: var(--mainWhite);
            margin-inline-end: 0;
          }
        }
      }
    }

    & .product-media,
    & .product-skintypes {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }

    & .product-skintypes {
      font-weight: bold;
      justify-content: flex-start;
      & .skintype {
        font-style: italic;
        &:not(:last-of-type) {
          &:after {
            content: ', ';
            margin-inline-end: 0.2rem;
          }
        }
      }
    }
    & .product-ingredients {
      margin-block-start: 0.5rem;
      & > p.bold {
        font-size: 1.3rem;
        font-weight: 600;
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
          >:first-child{
            font-weight: 600;
            margin-inline-end: 4px;
          }
        }
      }
    }
    @media (max-width: 676px) {
      & .product-name {
        margin-inline-end: 0;
      }
    }
  }
`
