import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductList from '../components/Products/ProductList'

const Masks = ({ data }) => {
  return (
    <PageModel
      title="Masks"
      centeredTitle
      description={`Michele Corley Clinical Skincare masks help clarify and balance the skin, while offering a unique way to customize and tailor treatments to the specific needs of your clients.`}
    >
      <MasksWrapper>
        <p className="description">
          Our masks help clarify and balance the skin, while offering a{' '}
          <span className="bold">
            unique way to customize and tailor treatments to the specific needs
            of your clients
          </span>
          .
        </p>
        <ProductList products={data.products} />
      </MasksWrapper>
    </PageModel>
  )
}
const MasksWrapper = styled.div`
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
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "masks" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          skinType
          description {
            description
          }
          imgRetail {
            id
            description
            title
            fixed(cropFocus: CENTER, width: 325, quality: 100) {
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
        }
      }
    }
  }
`
export default Masks
