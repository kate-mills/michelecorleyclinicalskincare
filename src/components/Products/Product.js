import React from 'react'
import styled from 'styled-components'

import Image from 'gatsby-image'
import VideoPlayer from '../Video'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Product = ({ product, isTemplate}) => {
  const { name, skinType, description, keyIngredients, profiles } = product
  return (
    <ProductWrapper className="single-product page-article">
      <div className="product-heading flex">
        {
          isTemplate ?
            <h1 className="product-name">{name}</h1>:
            <h2 className="product-name">{name}</h2>
        }
        { product.award && <Image className="award-winner"fixed={product.awardImage.fixed}/> }
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
          <AniLink
            fade
            to={`/product-images-and-logos/${product.slug}/`}>
          {
            isTemplate?
            <Image className="fluid-img" fluid={product.fluidImg.fluid}/>:
            <Image className="fixed-img" fixed={product.imgRetail.fixed}/>
          }
          </AniLink>
        </div>
        {product.video && (
          <VideoPlayer
            title={product.name}
            src={`https://player.vimeo.com/video/${product.video}`}
          />
        )}
      </div>
      <div className="product-profile-section">
        { (( !!profiles ) ?
          <a
            className="product-profile-sheet bold"
            href={profiles[0].file.url}
            target="_blank"
            rel="noreferrer"
          >FULL Ingredient List Available Here</a>
        : null )}
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
    margin: 15x auto;
    font-weight: 300;
    width: 100%;
  }
  & p {
    font-weight: 400;
  }
  & .product-heading{
    align-items: center;
    width: 100%;
  }
  & .product-heading .award-winner{
    min-width: 120px;
    margin-left: 15px;
  }
  & .product-heading img{
    object-fit: contain !important;
  }
  & .product-name {
    font-size: 30px;
    line-height: 42px;
    color: var(--poppy);
    font-weight: 400;
    padding: 0;
    margin-bottom: 0;
  }
  & h1.product-name{
    font-size: 43px;
    font-weight: 300;
    line-height: 54px;
  }
  & .product-skintypes {
    padding:0 0 0.5em;
    text-align: left;
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
  }
  & .product-media div.gatsby-image-wrapper{
    max-height: 300px;
  }
  & .product-media div.gatsby-image-wrapper:hover{
    cursor: pointer;
  }
  & .product-media div.gatsby-image-wrapper img{
    object-fit: contain !important;
    max-height: 300px;
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
      flex-wrap: wrap-reverse;
    }
    & .product-media div.gatsby-image-wrapper{
      max-height: 250px;
    }
    & .product-media div.gatsby-image-wrapper img{
      object-fit: contain !important;
      max-height: 250px;
    }
  }
`
export default Product
