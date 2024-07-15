import React from 'react'
import  FixedLink  from '../components/FixedLink'


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

    <FixedLink  isPageLink to={`/product-images-and-logos#travel-size-images`} text="NEW TRAVEL-SIZE IMAGES HERE"/>

      <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>
      <ProductsWrapper>
        <article id="retail-size-images">
          <h2>Retail-Size Product Images</h2>

          <section id="cleansers-retail">
            <h3>Cleansers (Retail-size)</h3>
            <Thumbnails data={data.cleansers} />
          </section>

          <section id="toners-retail">
            <h3>Toners (Retail-size)</h3>
            <Thumbnails data={data.toners} />
          </section>

          <section id="moisturizers-spf-retail">
            <h3>Moisturizers & SPF (Retail-size)</h3>
            <Thumbnails data={data.moisture} />
          </section>

          <section id="eyes-lips-retail">
            <h3>Eyes & Lips (Retail-size)</h3>
            <Thumbnails data={data.eyesLips} />
          </section>

          <section id="serums-specialty-retail">
            <h3>Serums & Specialty (Retail-size)</h3>
            <Thumbnails data={data.serums} />
          </section>

          <section id="exfoliants-retail">
            <h3>Exfoliants (Retail-size)</h3>
            <Thumbnails data={data.exfoliants} />
          </section>
          <section id="masks-retail">
            <h3>Masks (Retail-size)</h3>
            <Thumbnails data={data.masks} />
          </section>
        </article>

        <article id="travel-size-images">
          <h2>Travel-size Product Images</h2>
          <h3>Cleansers (Travel-size)</h3>
          <Thumbnails data={data.cleansers} travelMedia={true} />

          <h3>Toners (Travel-size)</h3>
          <Thumbnails data={data.toners} travelMedia={true} />

          <h3>Serums & Specialty (Travel-size)</h3>
          <Thumbnails data={data.serums} travelMedia={true} />

          <h3>Exfoliants (Travel-size)</h3>
          <Thumbnails data={data.exfoliants} travelMedia={true} />

          <h3>Masks (Travel-size)</h3>
          <Thumbnails data={data.masks} travelMedia={true} />

          <h3>Moisturizers & SPF (Travel-size)</h3>
          <Thumbnails data={data.moisture} travelMedia={true} />

          <h3>Eyes & Lips (Travel-size)</h3>
          <Thumbnails data={data.eyesLips} travelMedia={true} />
        </article>

        <section id="logos">
          <h3>Logos</h3>
          <Thumbnails data={data.logos} images={data.edges} logoMedia={true} />
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
          imgTravel {
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
          imgTravel {
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
          imgTravel {
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
          imgTravel {
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
          imgTravel {
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
          imgTravel {
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
          imgTravel {
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
  & article {
    h2, h3{
      color: var(--poppy);
      text-align: center;
    }
    h2{
      padding-top: 2rem;
    }
    h3 {
      margin: 1.5rem 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre;
    }
  }
  @media (min-width: 563px) {
    & article {
      h2, h3{
        text-align: left;
      }
    }
  }
`
export default ProductImagesLogos
