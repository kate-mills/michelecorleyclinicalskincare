import React from 'react'

import { graphql } from 'gatsby'
//import {productDetailFragment} from '../components/FragmentProductDetails'

import { GlobalLayout, Product, Seo } from '../components'

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
      imgRetail: {
        localFile: { publicURL },
      },
    },
  } = data
  return (
    <Seo
      title={pageContext.title}
      description={pageContext.description}
      image={publicURL}
    />
  )
}
