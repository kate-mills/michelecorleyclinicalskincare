import React from 'react'

import { graphql } from 'gatsby'

import {GlobalLayout} from '../components'

const ProductTemplate = ({ data: { product }, className }) => {
  return (
    <GlobalLayout
      title={product.name}
      description={product.description.description}
      id={product.name}
    >
      <h1>{product.name}</h1>
      <p>{product.description.description}</p>
    </GlobalLayout>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      profiles { file { url } }
      acneSafe
      isBestSeller
      name
      professionalOnly
      slug
      contentful_id
      category
      skinType
      description { description }
      video
      keyIngredients {
        id
        name {
          formatted
        }
        benefit
      }
      imgRetail {
        id
        title
        description
        gatsbyImageData(width: 400) 
      }
      seoImg: imgRetail {
        gatsbyImageData(width: 400, height: 200)
      }
      award
      awardImage {
        gatsbyImageData(width: 70, height: 70)
      }
    }
  }
`
export default ProductTemplate
