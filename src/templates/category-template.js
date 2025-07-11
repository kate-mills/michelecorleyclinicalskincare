import React from 'react'

import { graphql } from 'gatsby'

import { GlobalLayout, Product, Seo } from '../components'

const CategoryTemplate = props => {
  const {
    data: {
      products: { lst },
    },
    pageContext: { name, description },
  } = props

  return (
    <GlobalLayout title={name} description={description}>
      <h1>{name}</h1>
      <p>{description}</p>
      {lst.map(({ data }) => (
        <Product key={data?.contentful_id} data={data} />
      ))}
    </GlobalLayout>
  )
}
export const query = graphql`
  query GetCategory($name: String) {
    products: allContentfulMccProduct(
      filter: { categories: { eq: $name } }
      sort: { name: ASC }
    ) {
      lst: edges {
        data: node {
          ...ProductDetails
        }
      }
    }
  }
`
export default CategoryTemplate

export const Head = ({ pageContext }) => {
  return <Seo title={pageContext.title} description={pageContext.description} />
}
