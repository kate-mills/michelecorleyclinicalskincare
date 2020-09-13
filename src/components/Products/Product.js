import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import VideoPlayer from '../Video'

const Product = ({ product }) => {
  const { name, skinType, description, keyIngredients } = product

  return (
    <ProductWrapper className="single-product page-article">
      <h2 className="product-name">{name}</h2>
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
      <div className="product-media">
        <Image fixed={product.imgRetail.fixed} />
        {product.video && (
          <VideoPlayer
            src={`https://player.vimeo.com/video/${product.video}`}
          />
        )}
      </div>
      <div className="product-ingredients">
        <p className="bold">A FEW KEY Ingredients & Benefits:</p>
        <ul data-bullet-list>
          {keyIngredients.map(ing => {
            return (
              <li className="key-ingredient" key={ing.id}>
                <p>
                  <span className="name-formatted">{ing.name.formatted}:</span>{' '}
                  <span className="benefit">{ing.benefit}</span>
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
    margin: 0 auto;
    font-weight: 300;
  }
  & p {
    font-weight: 400;
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
    padding: 5px 0px;
    text-align: left;
  }
  & .product-skintypes .skintype {
    font-style: italic;
    font-weight: 300;
  }
  & .product-skintypes .skintype::after {
    content: ', ';
  }
  & .product-skintypes .skintype:last-child::after {
    content: '';
  }
  & .product-description {
    padding-bottom: unset;
  }
  & .product-media {
    display: flex;
    align-items: center;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-around;
  }
  & .product-ingredients p.bold {
    font-weight: 600;
    padding-bottom: 0;
    text-align: left;
  }
  & .product-ingredients ul {
    width: 90%;
    margin: 0 auto;
  }
  span.name-formatted {
  }
  & li.key-ingredient p {
    font-weight: 400;
  }
  & li.key-ingredient .benefit {
    font-weight: 300;
    padding-left: 5px;
  }
  @media (max-width: 800px) {
    & .product-media {
      flex-wrap: wrap;
      justify-content: center;
    }
    & .product-media div {
      margin: 10px;
    }
  }
`
export default Product
