import React from 'react'

import { GlobalLayout, Product, Seo } from '../components'

import { graphql } from 'gatsby'

const ProductTemplate = props => {
  const {
    data: { product },
  } = props
  return (
    <GlobalLayout>
      <Product data={product} singleProductPage={true} />
    </GlobalLayout>
  )
}

export const query = graphql`
  query GetProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      ...ProductDetails
    }
  }
`
export default ProductTemplate

export const Head = ({ data, pageContext }) => {
  const {
    product: {
      imgRetail: { placeholderUrl, publicUrl, localFile },
    },
  } = data
  return (
    <Seo
      title={pageContext.title}
      description={pageContext.description}
      image={localFile?.publicURL || publicUrl || placeholderUrl}
    />
  )
}
