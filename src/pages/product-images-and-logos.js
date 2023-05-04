import React from 'react'
import { SpaLocatorFixedLink } from '../components/SpaLocator'

import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import Thumbnails from '../components/Thumbnails'

const ProductImagesLogos = ({ data }) => {
  return (
    <Layout
      title={`Product Images & Logos`}
      description={`The following resources are available for your use in representing Michele Corley Clinical Skin Care products.`}
      image={data?.file?.publicURL}
    >
      <SpaLocatorFixedLink/>
      <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>
      <ProductsWrapper>
        <section id="cleansers">
          <h2>Cleansers</h2>
          <Thumbnails data={data.cleansers} />
        </section>

        <section id="toners">
          <h2>Toners</h2>
          <Thumbnails data={data.toners} />
        </section>

        <section id="moisturizers-spf">
          <h2>Moisturizers & SPF</h2>
          <Thumbnails data={data.moisture} />
        </section>

        <section id="eyes-lips">
          <h2>Eyes & Lips</h2>
          <Thumbnails data={data.eyesLips} />
        </section>

        <section id="serums-specialty">
          <h2>Serums & Specialty</h2>
          <Thumbnails data={data.serums} />
        </section>

        <section id="exfoliants">
          <h2>Exfoliants</h2>
          <Thumbnails data={data.exfoliants} />
        </section>

        <section id="masks">
          <h2>Masks</h2>
          <Thumbnails data={data.masks} />
        </section>

        <section id="logos">
          <h2>Logos</h2>
          <Thumbnails data={data.logos} logoMedia={true} />
        </section>
      </ProductsWrapper>
    </Layout>
  )
}
export const query = graphql`
  {
    file(
      relativePath: {
        eq: "slideshow/array-of-michele-corley-products-1280x800-blue.jpg"
      }
    ) {
      publicURL
    }
    cleansers: allContentfulMccProduct(
      filter: { category: { eq: "cleansers" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
    toners: allContentfulMccProduct(
      filter: { category: { eq: "toners" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    moisture: allContentfulMccProduct(
      filter: { category: { eq: "moisturizers & spf" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    eyesLips: allContentfulMccProduct(
      filter: { category: { eq: "eyes & lips" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    serums: allContentfulMccProduct(
      filter: { category: { eq: "serums & specialty" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    exfoliants: allContentfulMccProduct(
      filter: { category: { eq: "exfoliants" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    masks: allContentfulMccProduct(
      filter: { category: { eq: "masks" } }
      sort: { order: [ASC], fields: [name] }
    ) {
      edges {
        node {
          contentful_id
          name
          category
          slug
          imgRetail {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
    logos: allContentfulMccMediaImg(
      filter: { category: { eq: "Logos" } }
      sort: { order: [DESC], fields: [name] }
    ) {
      totalCount
      edges {
        node {
          contentful_id
          name
          slug
          category
          images {
            title
            description
            contentful_id
            fixed(height: 164, toFormat: WEBP) {
              ...GatsbyContentfulFixed
            }
            fluid(toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const ProductsWrapper = styled.section`
  & > section h2 {
    color: var(--poppy);
    margin: 2rem auto 0;
    text-align: center;
    font-size: 2.4rem;
  }
  @media (min-width: 563px) {
    & section h2 {
      text-align: left;
    }
  }
`
export default ProductImagesLogos
