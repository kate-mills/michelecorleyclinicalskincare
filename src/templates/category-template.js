import React from 'react'

import { graphql } from 'gatsby'

import {GlobalLayout, Products} from '../components'

const CategoryTemplate = props => {
  const { data, pageContext: { name, description, category }, } = props

  console.log('template data', data)

  return (
    <GlobalLayout
      title={`Michele Corley Skin Care ${name}`}
      description={description}
    >
      <h1>{name}</h1>
      <p>{category.description.description}</p>
      <Products lst={data.products.lst}/>
    </GlobalLayout>
  )
}
export const query = graphql`
  query GetCategory($name: String) {
    products: allContentfulMccProduct(
    filter: {categories: {eq: $name}}
    sort: {name: ASC}
    ) {
      lst:edges {
        data:node {
          contentful_id
          acneSafe
          isBestSeller
          name
          description { description }
          imgRetail {
            gatsbyImageData( width: 400, backgroundColor: "#fff")
          }
          professionalOnly
          profiles { file { url } }
          slug
          skinType
          video
          keyIngredients {
            id
            name { formatted }
            benefit
          }
          award
          awardImage {
            gatsbyImageData(width: 70, height: 70, backgroundColor: "#fff")
          }
        }
      }
    }
  }
`
export default CategoryTemplate

//allContentfulMccCategory(filter: { slug: { eq: $slug } }) { nodes { name slug description { description } } }
