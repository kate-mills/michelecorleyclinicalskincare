import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductList from '../components/Products/ProductList'

const Exfoliants = ({ data }) => {
  return (
    <PageModel
      title="Exfoliants"
      centeredTitle
      description={`Michele Corley Clinical Skincare exfoliants help clear away all traces of debris and build up on the skin that can lead to fine lines and wrinkles, uneven skin tone and clogged pores.`}
    >
      <ExfoliantsWrapper>
        <p className="description">
          Our exfoliants help{' '}
          <span className="bold">
            clear away all traces of debris and build up{' '}
          </span>
          on the skin that can lead to fine lines and wrinkles, uneven skin tone
          and clogged pores.
        </p>
        <ProductList products={data.products} />
      </ExfoliantsWrapper>
    </PageModel>
  )
}
const ExfoliantsWrapper = styled.div`
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
      filter: { category: { eq: "exfoliants" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          slug
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
export default Exfoliants
