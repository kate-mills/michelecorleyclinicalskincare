import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductList from '../components/Products/ProductList'

const Toners = ({ data }) => {
  return (
    <PageModel
      title="Toners"
      centeredTitle
      description={`Michele Corley Clinical Skincare toners provide a super-boost to the cleansing process to help clear away congestion and debris while giving the skin a nice drink of replenishing hydration.`}
    >
      <PageWrapper>
        <p className="description">
          Our toners provide a{' '}
          <span className="bold">super-boost to the cleansing process</span> to
          help clear away congestion and debris while giving the skin a nice
          drink of replenishing hydration.
        </p>
        <ProductList products={data.products} />
      </PageWrapper>
    </PageModel>
  )
}

const PageWrapper = styled.div`
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
    text-align: center;
    color: var(--mainBlack);
    margin-bottom: 0;
    padding-bottom: 0;
  }
`

export const query = graphql`
  {
    products: allContentfulMccProduct(
      filter: { category: { eq: "toners" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          profiles{ file{ url } }
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
          awardImage{
            fixed(width: 100, height: 100){
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

export default Toners
