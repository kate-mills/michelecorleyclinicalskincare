import React from 'react'

import styled from 'styled-components'

import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductList from '../components/Products/ProductList'

const Moisturizers = ({ data }) => {
  return (
    <PageModel
      title="Moisturizers & SPF"
      centeredTitle
      description={`Whether concerned about slowing the look of aging, keeping skin properly hydrated or protecting it from UV exposure, we have a moisturizer for every skin type - and every season.`}
    >
      <MoisturizersWrapper>
        <p className="description">
          Whether concerned about slowing the look of aging, keeping skin
          properly hydrated or protecting it from UV exposure,{` `}
          <span className="bold">
            we have a moisturizer for every skin type - and every season.
          </span>
        </p>
        <ProductList products={data.products} />
      </MoisturizersWrapper>
    </PageModel>
  )
}
const MoisturizersWrapper = styled.div`
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
      filter: { category: { eq: "moisturizers & spf" } }
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
            fixed(cropFocus: CENTER, quality: 100) {
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
export default Moisturizers
