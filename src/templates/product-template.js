import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import Product from '../components/Products/Product'
import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProductTemplate = ({ data: { product } , className}) => {
  return (
    <PageModel
      title={product.name}
      description={product.description.description}
    >
    <div className={className}>
      <p className="txt-center"><AniLink className="btn" fade to={`/${product.category}/`}>View All {product.category}</AniLink></p>
      <div>
        <Product product={product} showFluid={true} />
      </div>
      </div>
    </PageModel>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      name
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
        fluid{
          ...GatsbyContentfulFluid
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
  & {
    box-sizing: border-box;
    margin: 0 auto;
  }
  & .img-container {
    width: 50%;
    box-sizing: border-box;
  }
  & .product-media{
    object-fit: contain !important;
  }
  & img{
    object-fit: contain !important;
  }
`
