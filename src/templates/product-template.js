import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import Product from '../components/Products/Product'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProductTemplate = ({ data: { product } , className}) => {
  const formatCategory = category => {
    let CategoryMap = {}
    let str = 'View All '
    CategoryMap['moisturizers & spf'] = 'MOISTURIZERS & SPFS';
    CategoryMap['eyes & lips'] = 'EYE & LIP PRODUCTS';
    CategoryMap['serums & specialty'] = 'SERUM & SPECIALTY PRODUCTS';
    return CategoryMap[category] ? str.concat(CategoryMap[category]): str.concat(category)
  }
  const formatLink = ({category}) => category.replace(' & ', ' ').split(' ').join('-');


  return (
    <PageModel
      title={product.name}
      description={product.description.description}
      image={product.seoImg.fixed.src}
      id={product.name}
    >
    <div className={className}>
      <Product product={product} isTemplate={true} />
      <div
        className="lower-btn-div">
        <p className="txt-center"><AniLink className="btn" fade to={`/${formatLink(product)}/`}>{formatCategory(product.category)} </AniLink></p>
      </div>
    </div>
    </PageModel>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      profiles {file{url}}
      name
      slug
      contentful_id
      category
      skinType
      description {
        description
      }
      video
      keyIngredients {
        id
        name {
          formatted
        }
        benefit
      }
      fluidImg:imgRetail {
        id
        title
        description
        fluid(maxWidth: 300, maxHeight: 350, quality: 100){
          src
          ...GatsbyContentfulFluid
        }
      }
      seoImg: imgRetail {
        fixed(resizingBehavior: PAD, width: 400, height: 200, quality: 100) {
          src
          ...GatsbyContentfulFixed
        }
      }
      award
      awardImage{
        fixed(width:100, height: 100){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
export default styled(ProductTemplate)`
    box-sizing: border-box;
    margin: 0 auto;

  & div.product-heading.flex{
    margin: 10px auto;
    width: 75%;
  }
  & .product-heading.flex h1{
    display: inline-block;
  }
  & .product-skintypes{
    font-size: 30px;
    line-height: 50px;
    margin: 15px auto;
  }
  & .img-container {
    max-width: 350px;
    width: 50%;
    box-sizing: border-box;
  }
  & img{
    object-fit: contain !important;
  }
  & .lower-btn-div{
    padding-top: 2rem;
    margin: 2rem auto 1rem;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    align-items: flex-end;
  }
  @media(max-width: 800px){
    & .img-container{
      max-width: 350px;
      width: 75%;
      box-sizing: border-box;
    }
    & div.product-heading.flex{
      text-align: left;
      margin: 0 auto;
      width: 100%;
    }
  }
  @media(max-width: 400px){
    & .img-container{
      width: 95%;
    }
    & .product-skintypes{
      margin: 5px auto;
    }
  }
`
