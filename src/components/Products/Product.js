import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import VideoPlayer from '../Video'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { useAcneBadge } from '../../hooks/use-acne-badge'

const Product = ({ product, isTemplate }) => {
  const acneIcon = useAcneBadge()
  const {
    acneSafe,
    name,
    skinType,
    description,
    keyIngredients,
    profiles,
  } = product
  return (
    <ProductWrapper className="single-product page-article">
      <div className="product-heading flex">
        {isTemplate ? (
          <h1 className="product-heading-name">{name}</h1>
        ) : (
          <h2 className="product-heading-name">{name}</h2>
        )}
        <div className="product-heading-images">
          {acneSafe && (
            <Image className="acne-icon acneSafe" fixed={acneIcon.fixed} />
          )}
          {product.award && (
            <Image className="award-winner" fixed={product.awardImage.fixed} />
          )}
        </div>
      </div>

      <p className="product-skintypes">
        {skinType.map((item, index) => {
          return (
            <span key={index} className="skintype">
              {item}
            </span>
          )
        })}
      </p>
      <p className="product-description">{description.description}</p>
      <div className="product-media" id={name}>
        <div className="img-container">
          <AniLink fade to={`/product-images-and-logos/${product.slug}/`}>
            {isTemplate ? (
              <Image className="fluid-img" fluid={product.fluidImg.fluid} />
            ) : (
              <Image className="fixed-img" fixed={product.imgRetail.fixed} />
            )}
          </AniLink>
        </div>
        {product.video && (
          <VideoPlayer
            title={product.name}
            src={`https://player.vimeo.com/video/${product.video}`}
          />
        )}
      </div>
      <div className="product-profile-sheet">
        {!!profiles ? (
          <a
            className="product-profile-sheet bold"
            href={profiles[0].file.url}
            target="_blank"
            rel="noreferrer"
          >
            View FULL Ingredient List Here.
          </a>
        ) : null}
      </div>

      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul data-bullet-list>
          {keyIngredients.map(ing => {
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span className="key-ingredient-name">
                    {ing.name.formatted}:
                  </span>{' '}
                  <span className="key-ingredient-benefit">{ing.benefit}</span>
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.article`
  & {
    display: flex;
    flex-flow: column nowrap;
    margin: 15px auto;
    font-weight: 300;
    width: 100%;
  }
  & .product-heading {
    margin-top: 1rem;
    align-items: center;
    justify-content: baseline;
    width: 100%;

    h1.product-heading-name {
      font-size: 43px;
      font-weight: 300;
    }
    .product-heading-name {
      font-size: 30px;
      color: var(--poppy);
      font-weight: 400;
      margin-bottom: unset;
    }

    .product-heading-images {
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        object-fit: contain !important;
      }
      .acne-icon,
      .award-winner {
        min-width: 120px;
      }
    }
  }

  & .product-skintypes {
    padding: 0 0 0.5em;
    text-align: left;

    .skintype {
      font-style: italic;

      ::after {
        content: ', ';
      }

      :last-child::after {
        content: '';
      }
    }
  }

  & .product-description {
    padding-bottom: unset;
    padding: 0 0.2rem 0;
    margin-bottom: 5px;
  }

  & .product-media {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    div.gatsby-image-wrapper {
      max-height: 300px;
      :hover {
        cursor: pointer;
      }
      img {
        object-fit: contain !important;
        max-height: 300px;
      }
    }
  }

  & .product-profile-sheet.bold {
    color: #a5655f;
  }

  & .product-ingredients {
    .bold {
      padding-bottom: 0;
    }
    ul {
      width: 90%;
      margin: 0 auto;

      li.key-ingredient {
        p {
          font-weight: 400 !important;
          padding: 0 0 0 0;

          .key-ingredient-name {
            font-weight: 500;
          }
          .key-ingredient-benefit {
            font-weight: 300 !important;
            padding-left: 5px;
          }
        }
      }
    }
  }
  @media (max-width: 800px) {
    & .product-media {
      flex-wrap: wrap-reverse;

      div.gatsby-image-wrapper {
        height: 1 !important;
        object-fit: cover !important;
      }
    }
  }
  @media (max-width: 367px) {
    & .product-heading-images {
      width: 100%;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`
export default Product
