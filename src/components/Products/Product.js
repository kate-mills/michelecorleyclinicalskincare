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
      <div className="product-heading">
        {isTemplate ? (
          <h2 className="product-heading-name-template">{name}</h2>
        ) : (
          <h2 className="product-heading-name-list">{name}</h2>
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
            {isTemplate || product.fluidImg? (
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
      <hr/>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.article`
  & {
    display: flex;
    flex-flow: column nowrap;
    margin: 25px auto;
    font-weight: 300;

    .product-heading {
      display: flex;
      flex-wrap:wrap;
      align-items: center;
      justify-content: flex-start;

      .product-heading-name-template,
      .product-heading-name-list{
        font-weight: 400;
        color: var(--poppy);
      }
      .product-heading-name {
        font-weight: 300;
      }
      .product-heading-images {
        display: flex;
        justify-content: center;
        align-items: center;

        img {
          object-fit: contain !important;
        }
        div.acne-icon,
        div.award-winner {
          min-height: 70px;
          max-height: 70px;
          max-width: 70px;
          max-height: 70px;
        }
      }
    }

    .product-skintypes {
      padding: 0 0 0.5em;
      text-align: left;

      .skintype {
        font-style: italic;
        font-size: 1.1rem;

        ::after {
          content: ', ';
        }

        :last-child::after {
          content: '';
        }
      }
    }

    .product-description {
      width: 90%;
      font-size: .95rem;
      display: block;
    }

    .product-media {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: space-around;
      width: 100%;
      div.gatsby-image-wrapper {
        max-height: 300px;
        width: 300px;
        :hover { cursor: pointer; }
        img {
          object-fit: contain !important;
          max-height: 300px;
        }
      }
    }

    .product-profile-sheet {
      color: #a5655f;
      display: block;
      margin-top: 1rem;
    }

    .product-ingredients {
      display: block;
      p.bold {
        padding-bottom: 0;
        }
      ul {
      margin: 0 auto;
      width: 90%;
        li.key-ingredient {
          p {
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
  }

  @media (max-width: 800px) {
    & {
      .product-media {
        flex-wrap: wrap-reverse;
      }
    }
  }


  @media (max-width: 450px) {
    & {
      .product-heading { flex-wrap: wrap; }
    }
  }
`
export default Product
