import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import VideoPlayer from '../Video'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Product = ({ product, isTemplate }) => {
  const { name, skinType, description, keyIngredients, profiles } = product
  return (
    <ProductWrapper className="single-product page-article">
      <div className="product-heading flex">
        <h2 className={`product-name ${isTemplate ? 'template' : ''}`}>
          {name}
        </h2>
        {product.award && (
          <Image className="award-winner" fixed={product.awardImage.fixed} />
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
        <div className="product-ingredients">
          <p className="bold">A FEW KEY Ingredients & Benefits:</p>
          <ul data-bullet-list>
            <li className="profile-li">
              {!!profiles ? (
                <a
                  className="product-profile-sheet"
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
                    <p className="benefit">{ing.benefit}</p>
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
    .template {
    }
  }
  & p {
    font-weight: 400;
  }
  & .product-heading {
    align-items: center;
    width: 100%;
    .award-winner {
      min-width: 90px;
    }
  }
  & .product-heading .award-winner {
  }
  & .product-heading img {
    object-fit: contain !important;
  }
  & .product-name.template {
    font-size: 43px;
    font-weight: 300;
    line-height: 54px;
    margin-bottom: 1rem;
  }
  & .product-name {
    font-size: 30px;
    line-height: 42px;
    color: var(--poppy);
    font-weight: 400;
    padding: 0;
    margin-bottom: 0;
  }

  & .product-skintypes {
    font-size: 1.1rem;
    padding: 0 0 0.5rem;
  }
  & .product-skintypes .skintype {
    font-style: italic;
  }
  & .product-skintypes .skintype::after {
    content: ', ';
  }
  & .product-skintypes .skintype:last-child::after {
    content: '';
  }
  & .product-description {
    padding: 0 1rem 1rem;
    margin-bottom: 0.1rem;
  }
  & .product-media {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
  }
  & .product-media div.fluid-img {
    min-width: 300px;
  }
  & .product-media div.gatsby-image-wrapper {
    max-height: 300px;
  }
  & .product-media div.gatsby-image-wrapper:hover {
    cursor: pointer;
  }
  & .product-media div.gatsby-image-wrapper img {
    object-fit: contain !important;
    max-height: 300px;
  }
  & .product-profile-sheet {
    font-size: 0.9rem;
    color: #a5655f;
    span {
      /*border-bottom: 0.5px solid #a5655f;*/
    }
  }
  & .product-ingredients p.bold {
    font-weight: 600;
    padding-bottom: 0;
  }

  ul[data-bullet-list] li.profile-li > *:first-child::before {
    content: '⬞';
    content: ' ';
    margin-left: -25px;
    color: #a5655f;
  }
  & li.key-ingredient {
    margin-left: 1rem;
    p {
      margin: 0;
      padding-bottom: 0;
    }
    .name-formatted {
      font-weight: 500;
    }
    .benefit {
      display: inline;
      white-space: pre-wrap;
      font-weight: 300;
      padding-bottom: 0;
      padding-left: 5px;
    }
  }
  @media (max-width: 800px) {
    & .product-heading {
    }
    & .product-media {
      flex-wrap: wrap-reverse;
    }
    & .product-media div.gatsby-image-wrapper {
      max-height: 250px;
    }
    & .product-media div.gatsby-image-wrapper img {
      object-fit: contain !important;
      max-height: 250px;
    }
  }
`
export default Product
