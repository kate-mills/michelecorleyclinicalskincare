import React from 'react'

import { graphql } from 'gatsby'
import { GlobalLayout, Thumbnails, Seo } from '../components'

import styled from 'styled-components'

const ProductImagesLogosPage = ({ data }) => {
  return (
    <GlobalLayout>
      <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>

      <StyledSection>
        <p className="instructions">
          Click image thumbnails to see download options.
        </p>
        <article>
          <Thumbnails data={data.cleansers} category={'cleansers'} />
          <Thumbnails data={data.toners} category={'toners'} />
          <Thumbnails data={data.exfoliants} category={'exfoliants'} />
          <Thumbnails data={data.serums} category={'serums & specialty'} />
          <Thumbnails data={data.moisturizers} category="moisturizers" />
          <Thumbnails data={data.masks} category="masks" />
          <Thumbnails data={data.eyesLips} category="eyes & Lips" />
          <Thumbnails data={data.logos} logoMedia category="logos" />
        </article>
      </StyledSection>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    cleansers: allContentfulMccProduct(
      filter: { categories: { eq: "cleansers" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    toners: allContentfulMccProduct(
      filter: { categories: { eq: "toners" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    exfoliants: allContentfulMccProduct(
      filter: { categories: { eq: "exfoliants" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    serums: allContentfulMccProduct(
      filter: { categories: { eq: "serums & specialty" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    moisturizers: allContentfulMccProduct(
      filter: { categories: { eq: "moisturizers" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    masks: allContentfulMccProduct(
      filter: { categories: { eq: "masks" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }

    eyesLips: allContentfulMccProduct(
      filter: { categories: { eq: "eyes & lips" } }
      sort: { name: ASC }
    ) {
      edges {
        node {
          ...ProductImageDetails
        }
      }
    }
    logos: allContentfulMccMediaImg {
      edges {
        node {
          contentful_id
          name
          slug
          thumb {
            gatsbyImageData(height: 500, quality: 100)
          }
        }
      }
    }
  }
`

const StyledSection = styled.section`
  & {
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
export default ProductImagesLogosPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Michele Corley Product Images & Logos"
      pathname={pathname}
      description="The following resources are available for your use in representing Michele Corley Clinical Skin Care products."
    />
  )
}
