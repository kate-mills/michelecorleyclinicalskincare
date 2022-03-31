import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
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
    <PageModel
      title={category.name}
      centeredTitle
      description={category.description.description}
    >
      <CategoryTemplateWrapper>
        <p className="description">
          {index_0.trim()} <span className="bold">{bold.trim()} </span>
          {index_1.trim()}
        </p>
        <ProductList products={data.products} id="product-list" />
      </CategoryTemplateWrapper>
    </PageModel>
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
      filter: { category: { eq: $name } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          profiles {
            file {
              url
            }
          }
          name
          slug
          skinType
          description {
            description
          }
          imgRetail {
            id
            title
            description
            fixed(cropFocus: CENTER, width: 300, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          video
          keyIngredients {
            id
            name {
              formatted
            }
            benefit
          }
          award
          awardImage {
          fixed(quality: 100, width:90, height: 90, background: "transparent"){
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
