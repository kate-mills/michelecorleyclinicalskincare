import React from 'react'

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
      <Product product={product} isTemplate={true} />
      <div className="lower-btn-div"> <p className="txt-center"><AniLink className="btn" fade to={`/${formatLink(product)}/`}>{formatCategory(product.category)}</AniLink></p> </div> 
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
        fixed(quality: 100, width:90, height: 90, background: "transparent"){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
export default ProductTemplate
