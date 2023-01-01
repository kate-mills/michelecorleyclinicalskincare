import React from 'react'
import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'

import Thumbnails from '../components/Thumbnails'
import styled from 'styled-components'

const ProductImagesLogos = props => {
  return (
    <PageModel
      title={`Product Images & Logos`}
      description={`The following resources are available for your use in representing Michele Corley Clinical Skin Care products.`}
    >

    <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>
      <ProductsWrapper>
        <section id="cleansers">
          <h2>Cleansers</h2>
          <Thumbnails data={props.data.cleansers} />
        </section>

        <section id="toners">
          <h2>Toners</h2>
          <Thumbnails data={props.data.toners} />
        </section>

        <section id="moisturizers-spf">
          <h2>Moisturizers & SPF</h2>
          <Thumbnails data={props.data.moisture} />
        </section>

        <section id="eyes-lips">
          <h2>Eyes & Lips</h2>
          <Thumbnails data={props.data.eyesLips} />
        </section>

        <section id="serums-specialty">
          <h2>Serums & Specialty</h2>
          <Thumbnails data={props.data.serums} />
        </section>

        <section id="exfoliants">
          <h2>Exfoliants</h2>
          <Thumbnails data={props.data.exfoliants} />
        </section>

        <section id="masks">
          <h2>Masks</h2>
          <Thumbnails data={props.data.masks} />
        </section>

        <section id="multi-product-photos">
          <h2>Multi-Product Photos</h2>
          <Thumbnails data={props.data.multi} logoMedia={true} />
        </section>

        <section id="logos">
          <h2>Logos</h2>
          <Thumbnails data={props.data.logos} logoMedia={true} />
        </section>
      </ProductsWrapper>
    </PageModel>
  )
}
export const query = graphql`
  {
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
    multi: allContentfulMccMediaImg(
      filter: { category: { eq: "Multi-Product Photos" } }
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
            contentful_id
            title
            description
            contentful_id
            fluid(maxWidth: 230, maxHeight: 164, toFormat: WEBP) {
              ...GatsbyContentfulFluid
            }
            fixed(width: 230, height: 164, toFormat: WEBP) {
              ...GatsbyContentfulFixed
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
