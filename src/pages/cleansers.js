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
        <ProductList products={data.products} />
      </CleansersWrapper>
    </PageModel>
  )
}
const CleansersWrapper = styled.div`
  & {
    margin: 0 auto;
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
    text-align: center;
    color: var(--mainBlack);
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
          acneSafe
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
          fluidImg: imgRetail {
            id
            fluid(resizingBehavior: FILL, cropFocus: CENTER, quality: 100) {
              ...GatsbyContentfulFluid
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
            fixed(width: 70, height: 70, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`
export default Cleansers
