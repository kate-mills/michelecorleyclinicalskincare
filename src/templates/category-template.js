import React from 'react'
import { SpaLocatorFixedLink } from '../components/SpaLocator'
import styled from 'styled-components'

import { graphql } from 'gatsby'

import Layout from '../components/layout'
import ProductList from '../components/Products/ProductList'

const CategoryTemplate = props => {
  const {
    data,
    pageContext: { category },
  } = props

  const {
    categoryJson: { index_0, bold, index_1 },
  } = category

  return (
    <Layout
      title={`Michele Corley Skin Care ${category.name}`}
      description={category.description.description}
    >
      <SpaLocatorFixedLink />
      <h1>{category.name}</h1>
      <CategoryTemplateWrapper>
        <p className="description">
          {index_0.trim()} <span className="bold">{bold.trim()} </span>
          {index_1.trim()}
        </p>
        <ProductList products={data.products} id="product-list" />
      </CategoryTemplateWrapper>
    </Layout>
  )
}
const CategoryTemplateWrapper = styled.div`
  & {
    margin: 20px auto;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin-bottom: 1rem;
    text-align: left;
    box-sizing: border-box;
  }
  & p.description {
    margin-bottom: 0;
    padding-bottom: 0;
  }
`
export const query = graphql`
  query GetCategory($name: String) {
    products: allContentfulMccProduct(
      filter: { categories: { eq: $name } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          acneSafe
          isBestSeller
          name
          description { description }
          imgRetail {
            fixed(
              width: 400
              quality: 100
              toFormat: WEBP
              background: "#fff"
            ) {
              ...GatsbyContentfulFixed
            }
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
            fixed(quality: 100, width: 70, height: 70, background: "#fff") {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default CategoryTemplate

//allContentfulMccCategory(filter: { slug: { eq: $slug } }) { nodes { name slug description { description } } }
