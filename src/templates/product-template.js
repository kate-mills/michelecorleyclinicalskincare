import React from 'react'

import { graphql } from 'gatsby'

import { GlobalLayout, Product, Seo } from '../components'

const ProductTemplate = ({ data: { product }, pageContext }) => {
  return (
    <GlobalLayout>
      <Product data={product} singleProductPage={true} />
    </GlobalLayout>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      profiles {
        file {
          url
        }
      }
      acneSafe
      isBestSeller
      name
      professionalOnly
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
        gatsbyImageData(width: 60, height: 60, quality: 100)
      }
    }
  }
`
export default ProductTemplate

export const Head = ({ pageContext }) => {
  return (
    <Seo
      title={pageContext.title}
      description={pageContext.description}
      image={pageContext.image}
    />
  )
}
