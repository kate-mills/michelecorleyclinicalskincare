import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import VideoPlayer from './VideoPlayer'

const Product = ({ singleProductPage = false, data, className }) => {
  const {
    acneSafe,
    awardImage,
    isBestSeller,
    award,
    imgRetail,
    professionalOnly: proOnly,
    name,
    slug,
    skinType,
    description: { description },
    keyIngredients,
    profiles: pdf,
    video,
  } = data

  let skTypeLen = skinType.length

  return (
    <article className={className} id={slug}>
      {!singleProductPage ? (
        <h2>
          <div className="product-name">{name}</div>
          <div className="product-badges">
            {acneSafe && <span className={`badge acne-safe`}>ACNE SAFE</span>}
            {proOnly && (
              <span className={`badge pro-only`}>PROFESSIONAL USE ONLY</span>
            )}
            {isBestSeller && (
              <span className={`badge best-seller`}>BEST-SELLER</span>
            )}
            {!!award && (
              <GatsbyImage
                className="award-winner"
                image={awardImage?.gatsbyImageData}
                alt={`Best Product ${award} Award Emblem`}
              />
            )}
            {!!pdf ? (
              <a
                className="pdf badge"
                title={`Download pdf with product details and usage instructions for ${name}.`}
                href={pdf[0].file.url}
                target="_blank"
                rel="noreferrer"
              >
                GET PRODUCT DETAIL PDF
              </a>
            ) : null}
          </div>
        </h2>
      ) : (
        <h1>
          <div className="product-name">{name}</div>
          <div className="product-badges">
            {acneSafe && <span className={`badge acne-safe`}>ACNE SAFE</span>}
            {proOnly && (
              <span className={`badge pro-only`}>PROFESSIONAL USE ONLY</span>
            )}
            {isBestSeller && (
              <span className={`badge best-seller`}>BEST SELLER</span>
            )}
            {!!award && (
              <GatsbyImage
                className="award-winner"
                image={awardImage?.gatsbyImageData}
                alt={`Best Product ${award} Award Emblem`}
              />
            )}
            {!!pdf ? (
              <a
                className="badge pdf"
                title={`Download pdf with product details and usage instructions for ${name}.`}
                href={pdf[0].file.url}
                target="_blank"
                rel="noreferrer"
              >
                DOWNLOAD PRODUCT PDF
              </a>
            ) : null}
          </div>
        </h1>
      )}

      <h4 className={`product-skintypes`}>
        <div className={'skintypes'}>
          {skinType.map((item, index) => (
            <span key={index}>
              {item}
              {index + 1 === skTypeLen ? '' : ', '}
            </span>
          ))}
        </div>
      </h4>

      <p>{description}</p>
      <div className="product-media">
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`}>
            <GatsbyImage
              image={imgRetail.gatsbyImageData}
              alt={`Retail size ${name}`}
            />
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
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span className="key-ingredient-name-formatted">
                    {ing.name.formatted}:
                  </span>
                  <span className="key-ingredient-benefit">{ing.benefit}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
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
      text-align: left;
      margin-block-end: unset;
      & .product-name {
        margin-inline-end: 0.5rem;
      }
      & .product-name,
      & .product-badges {
        align-items: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        & .award-winner {
          min-height: 70px;
          min-width: 70px;
        }
        .badge {
          background: var(--poppy);
          border: 2px solid var(--darkGrey);
          color: var(--offWhite);
          display: inline-block;
          font-size: 0.75rem;
          line-height: 0.75rem;
          margin-block: 0.2rem;
          padding: 0.2rem;
          text-align: center;
          white-space: pre;
          &.best-seller,
          &.pro-only {
            background: var(--offWhite);
            color: var(--poppy);
          }
          &.best-seller {
            border-color: var(--poppy);
          }
          &.pdf {
            background: var(--blackText);
            color: var(--mainWhite);
            border-color: var(--poppyDark);
          }
        }
      }
    }

    & .product-media {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
    }

    & .product-skintypes {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      flex-wrap: wrap;

      > div.skintypes {
        font-weight: bold;
        span {
          font-style: italic;
          margin-inline-end: 0.2rem;
        }
      }
    }

    & .product-ingredients {
      padding-top: 1rem;
      & > p.bold {
        font-size: 1.3rem;
        font-weight: 600;
        padding-block-end: 0;
      }
      & .key-ingredient {
        margin-inline-start: 1rem;
        & p {
          padding-block-end: 0;
          & .key-ingredient-name-formatted {
            font-weight: 600;
          }
          & .key-ingredient-benefit {
            padding-inline-start: 5px;
          }
        }
      }
    }
    @media (max-width: 676px) {
      & .product-name {
        margin-inline-end: auto;
      }
      & .product-skintypes {
        & .skintypes {
          width: 80%;
          margin-block-start: 0.4rem;
        }
      }
    }
  }
`
