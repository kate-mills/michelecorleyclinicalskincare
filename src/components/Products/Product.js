import React from 'react'
import styled from 'styled-components'
import { GatsbyImage } from 'gatsby-plugin-image'

import { Link } from 'gatsby'

import VideoPlayer from '../VideoPlayer'

const Product = ({ data, className }) => {
  const {
    acneSafe,
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

  return (
    <article className={className} id={slug}>
      <h2>
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
              image={data?.awardImage?.gatsbyImageData}
              alt={`Best Product ${award} Award Emblem`}
            />
          )}
        </div>
      </h2>

      <p className="product-download-pdf">
        {!!pdf ? (
          <a
            className="btn pdf"
            title={`Download pdf with product details and usage instructions for ${name}.`}
            href={pdf[0].file.url}
            target="_blank"
            rel="noreferrer"
          >
            DOWNLOAD PRODUCT DETAILS PDF
          </a>
        ) : null}
      </p>
      <h4 className={`product-skintypes`}>
        {skinType.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </h4>

      <p>{description}</p>
      <div className="product-media">
        <div className="product-image">
          <Link to={`/product-images-and-logos/${slug}`}>
            <GatsbyImage image={imgRetail.gatsbyImageData} />
          </Link>
        </div>
        {video && (
          <VideoPlayer
            title={`${name} from Michele Corley on Vimeo`}
            src={`https://player.vimeo.com/video/${video}`}
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
                  </span>{' '}
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
    h2 {
      align-items: center;
      color: var(--poppy);
      display: flex;
      & .product-name {
        margin-inline-end: 0.2rem;
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
          img {
            object-fit: contain !important;
          }
        }
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
          white-space: pre;
          width: fit-content;
          &.best-seller,
          &.pro-only {
            background: var(--offWhite);
            color: var(--poppy);
          }
          &.best-seller {
            border-color: var(--poppy);
          }
        }
      }
    }
    & .product-media {
      align-items: center;
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    & .product-download-pdf {
      font-size: 0.65rem;
      margin-inline-end: 0.5rem;
      max-width: 75%;
    }
    & .product-skintypes {
      font-weight: bold;
      margin-block-end: 0;
      padding-block-end: unset;
      span {
        font-style: italic;
        &::after {
          content: ', ';
        }
        &:last-child::after {
          content: '';
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
      & .product-download-pdf {
        width: 100%;
        max-width: 100%;
        > a {
          padding-inline: 0.3rem;
        }
      }
    }
  }
`
