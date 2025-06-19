import React from 'react'

import { graphql } from 'gatsby'

import { GlobalLayout, Product, Seo } from '../components'

const CategoryTemplate = props => {
  const {
    data:{products:{lst}},
    pageContext: { name, description, category },
  } = props

  return (
    <GlobalLayout
      title={`Michele Corley Skin Care ${name}`}
      description={description}
    >
      <h1>{name}</h1>
      <p>{category?.description?.description}</p>
      {lst.map(({ data }) => (
        <Product key={data?.contentful_id} data={data} />
      ))}
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
            gatsbyImageData( width: 225, height: 225, quality: 100)
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
            gatsbyImageData(width: 60, height: 60, quality: 100)
          }
        }
      }
    }
  }
`
export default CategoryTemplate

export const Head = ({pageContext})=> {
  return (
    <Seo title={pageContext.title} description={pageContext.description}/>
  )
}
