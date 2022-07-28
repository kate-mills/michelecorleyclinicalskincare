import React from 'react'
import { graphql } from 'gatsby'

import PageModel from '../components/PageModel'
import ProductImageList from '../components/Imagelogo/ProductImage/ProductImageList'
import MediaImageList from '../components/Imagelogo/MediaImage/MediaImageList'
import styled from 'styled-components'

const ProductImagesLogos = props => {
  return (
    <PageModel
      title={`Product Images & Logos`}
      centeredTitle
      description={`The following resources are available for your use in representing Michele Corley Clinical Skin Care products.`}
    >
      <ProductsWrapper>
        <p className="txt-center">
          The following resources are available for your use in representing
          Michele Corley Clinical Skin Care products.
        </p>

        <section id="cleansers">
          <h2 className="grid-category-title">Cleansers</h2>
          <ProductImageList data={props.data.cleansers} />
        </section>

        <section id="toners">
          <h2 className="grid-category-title">Toners</h2>
          <ProductImageList data={props.data.toners} />
        </section>

        <section id="moisturizers-spf">
          <h2 className="grid-category-title">Moisturizers and SPF</h2>
          <ProductImageList data={props.data.moisture} />
        </section>

        <section id="eyes-lips">
          <h2 className="grid-category-title">Eyes and Lips</h2>
          <ProductImageList data={props.data.eyesLips} />
        </section>

        <section id="serums-specialty">
          <h2 className="grid-category-title">Serums and Specialty</h2>
          <ProductImageList data={props.data.serums} />
        </section>

        <section id="exfoliants">
          <h2 className="grid-category-title">Exfoliants</h2>
          <ProductImageList data={props.data.exfoliants} />
        </section>

        <section id="masks">
          <h2 className="grid-category-title">Masks</h2>
          <ProductImageList data={props.data.masks} />
        </section>

        <section id="multi-product-photos">
          <h2 className="grid-category-title">Multi-Product Photos</h2>
          <MediaImageList data={props.data.multi} />
        </section>

        <section id="logos">
          <h2 className="grid-category-title">Logos</h2>
          <MediaImageList data={props.data.logos} />
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
            fixed(height: 164, toFormat: WEBP) {
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
            fixed(height: 164, toFormat: WEBP) {
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
  & h2.grid-category-title {
    color: var(--poppy);
    margin: 2rem auto 0;
  }
`
export default ProductImagesLogos
