import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductList from '../components/Products/ProductList'

const Cleansers = ({ data }) => {
  return (
    <PageModel
      title={`Cleansers`}
      centeredTitle
      description={`Whether skin is dry, normal, oily or in between, Michele Corley Clinical Skin Care has a cleanser for every type. Our cleansers are gentle enough for the most sensitive or Rosacea prone skin, and relieve congestion by keeping skin flawlessly clean.`}
    >
      <CleansersWrapper>
        <p className="description">
          Whether skin is dry, normal, oily or in between,{' '}
          <span className="bold">
            Michele Corley Clinical Skin Care has a cleanser for{' '}
            <em className="bold">every</em> type.{' '}
          </span>
          Our cleansers are gentle enough for the most sensitive or Rosacea
          prone skin, and relieve congestion by keeping skin flawlessly clean.
        </p>
        <ProductList products={data.products} id="product-list" />
      </CleansersWrapper>
    </PageModel>
  )
}
const CleansersWrapper = styled.div`
  & {
    margin: 0 auto;
  }
  & section.product-list {
    article:nth-child(1) {
      margin-top: unset;
    }
  }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "cleansers" } }
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
            fixed(cropFocus: CENTER, width: 115, height: 250, quality: 100) {
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
            fixed(quality: 100, width: 90, height: 90) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default Cleansers
