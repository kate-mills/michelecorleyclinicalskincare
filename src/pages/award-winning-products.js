import React from 'react'

import { graphql } from 'gatsby'
import { GlobalLayout, ProductWinner, Seo } from '../components'

import styled from 'styled-components'

const AwardWinningProductsPage = ({ data }) => {
  return (
    <GlobalLayout>
      <h1>Award Winning Products</h1>

      <StyledSection>
        <article>
          {data.cleansers.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}
          {data.toners.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}

          {data.exfoliants.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}

          {data.serums.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}

          {data.moisturizers.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}

          {data.masks.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}

          {data.eyesLips.edges.map(data => {
            return <ProductWinner data={data.node} />
          })}
        </article>
      </StyledSection>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    cleansers: allContentfulMccProduct(
      filter: { isAwardWinner: { eq: true }, category: { eq: "cleansers" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    toners: allContentfulMccProduct(
      filter: { isAwardWinner: { eq: true }, category: { eq: "toners" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    exfoliants: allContentfulMccProduct(
      filter: { isAwardWinner: { eq: true }, categories: { eq: "exfoliants" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    serums: allContentfulMccProduct(
      filter: {
        isAwardWinner: { eq: true }
        categories: { eq: "serums & specialty" }
      }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    moisturizers: allContentfulMccProduct(
      filter: {
        isAwardWinner: { eq: true }
        categories: { eq: "moisturizers" }
      }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    masks: allContentfulMccProduct(
      filter: { isAwardWinner: { eq: true }, categories: { eq: "masks" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }

    eyesLips: allContentfulMccProduct(
      filter: { isAwardWinner: { eq: true }, categories: { eq: "eyes & lips" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductWinnerDetails
        }
      }
    }
  }
`

const StyledSection = styled.section`
  & {
    article{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    > .instructions {
      text-align: center;
      color: var(--poppy);
      padding-block-end: 0;
    }
    section {
      h2 {
        margin-top: 2rem;
        span,
        button {
          text-align: center;
          display: block;
        }
        button {
          background: var(--poppy);
          border-color: var(--clear);
          color: var(--mainWhite);
          font-size: 0.7rem;
          margin: 0.5rem auto 1rem;
          padding: 0.4rem 0.8rem;
        }
      }
    }
  }
`
export default AwardWinningProductsPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Michele Corley Award Winning Products"
      pathname={pathname}
      description="Michele Corley Clinical Skin Care award winning products."
    />
  )
}
