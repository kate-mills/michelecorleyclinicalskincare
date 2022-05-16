import React from 'react'
import styled from 'styled-components'
import Image from 'gatsby-image'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import VideoPlayer from '../Video'
import ScreenReaderText from '../ScreenReaderText'
import {getSymanticSkinTypes} from '../../utils/helpers'

const Product = ({ product, isTemplate }) => {
  const {
    acneSafe,
    name,
    skinType,
    description,
    keyIngredients,
    profiles,
  } = product

  let categoryStatement = `${product.name} is formulated for ${getSymanticSkinTypes(skinType).toLowerCase()}.`

  return (
    <ProductWrapper className="single-product page-article">
      <div className={`product-heading ${acneSafe && 'acne-safe'}`}>
        <h2
          className={`product-name ${isTemplate ? 'template' : ''} ${
            product.award ? 'winner' : ''
          }`}
        >
          <div className={`${acneSafe && 'acne-safe'}`}>
            {name}
            {acneSafe && (
              <ScreenReaderText
                element="span"
                text={` (safe for use on skin prone to all types of acne)`}
              />
            )}
          </div>
        </h2>

        <ScreenReaderText element="h3" text={`${categoryStatement}`} />

        {product.award && (
          <Image
            className="award-winner"
            fixed={product.awardImage.fixed}
            alt={`Best Product ${product.award} Award Emblem`}
            title={`Best Product ${product.award} Award Winner`}
          />
        )}
      </div>
      <div className="product-details">
        <p className={`product-skintypes ${isTemplate ? 'template' : ''}`}>
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
            <AniLink fade to={`/product-images-and-logos/${product.slug}/`} aria-label="View image">
              {isTemplate ? (
                <Image
                  className="fluid-img"
                  fluid={product.fluidImg.fluid}
                  alt={product.fluidImg.description || `Retail size ${name} `}
                  title={`Michele Corley ${name}`}
                />
              ) : (
                <Image
                  className="fixed-img"
                  fixed={product.imgRetail.fixed}
                  alt={product.imgRetail.description || product.imgRetail.title}
                  title={`Michele Corley ${name}`}
                />
              )}
            </AniLink>
          </div>
          {product.video && (
            <VideoPlayer
              title={`Michele Corley discusses ${product.name}.`}
              src={`https://player.vimeo.com/video/${product.video}`}
            />
          )}
        </div>
        <div className="product-ingredients">
          <p className="bold-heading">A FEW KEY Ingredients & Benefits:</p>
          <ul data-bullet-list>
            <li className="product-profile-sheet">
              {!!profiles ? (
                <a
                  className="get-product-profile-sheet"
                  title={`Download ${name} details, including full ingredient list`}
                  href={profiles[0].file.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  View FULL Ingredient List <span>Here</span>.
                </a>
              ) : null}
            </li>
            {keyIngredients.map(ing => {
              return (
                <li className="key-ingredient" key={ing.id}>
                  <p>
                    <span className="name-formatted">
                      {ing.name.formatted}:
                    </span>{' '}
                    <span className="benefit">{ing.benefit}</span>
                  </p>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </ProductWrapper>
  )
}
const ProductWrapper = styled.article`
  & {
    margin: 35px auto;
    font-weight: 300;
    max-width: 100%;
  }
  & p {
    font-weight: 400;
  }
  & .product-heading {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: flex-start;
    min-width: 100%;
    width: 100%;
    .product-name {
      color: var(--poppy);
      font-size: 30px;
      font-weight: 400;
      line-height: 42px;
      padding: 0;
      width: fit-content;
    }
    .product-name.winner {
      min-width: min-content;
    }
    .product-name.template {
      font-size: 43px;
      font-weight: 300;
      line-height: 54px;
    }
    .award-winner {
      width: 100%;
      min-width: 90px;
      img {
        object-fit: contain !important;
      }
    }
  }
  & .product-heading.acne-safe {
    margin-top: 3rem;
    div.acne-safe {
      position: relative;
      white-space: pre-line;
      ::after {
        content: 'ACNE-SAFE';
        display: inline-block;
        font-size: 0.85rem;
        line-height: 1;
        padding: 0.2rem;
        bottom: 0.2rem;
        position: relative;
        margin-left: 15px;
        margin-right: 15px;
        background: #c75958;
        border: 2px solid #e3bab5;
        color: #fefefe;
      }
    }
  }
  & .product-skintypes {
    font-size: 1.1rem;
    padding: 0 0 0.5rem;
    .skintype {
      font-style: italic;
    }
    .skintype::after {
      content: ', ';
    }
    .skintype:last-child::after {
      content: '';
    }
  }
  & .product-description {
    padding: 0 1rem 1rem;
    margin-bottom: 0.1rem;
  }
  & .product-media {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;

    div.img-container {
      max-width: fit-content;
      min-width: min-content;
      min-width: 300px;
      img {
        object-fit: contain !important;
      }
      :hover {
        cursor: pointer;
      }
    }
  }
  & .product-ingredients {
    p.bold-heading {
      font-weight: 600;
      padding-bottom: 0;
    }
    li.product-profile-sheet {
      a.get-product-profile-sheet {
        font-size: 0.9rem;
        color: #a5655f;
      }
      > *:first-child::before {
        content: ' ';
        margin-left: -25px;
        color: #a5655f;
      }
    }
    li.key-ingredient {
      margin-left: 1rem;
      p {
        padding-bottom: 0;
      }
      span.name-formatted {
        font-weight: 500;
      }
      span.benefit {
        white-space: pre-wrap;
        font-weight: 300;
        padding-left: 5px;
      }
    }
  }
  @media (max-width: 800px) {
    & .product-media {
      flex-wrap: wrap-reverse;
      div.img-container {
        max-height: 250px;
        img {
          max-height: 250px;
        }
      }
    }
  }
`
export default Product
