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
        The following resources are available for your use in representing Michele Corley Clinical Skin Care products.
      </p>
      <ProductsWrapper>
        <article id="retail-size-images">
          <section id="cleansers-retail">
            <h2>Cleansers (Retail-size)</h2>
            <Thumbnails data={data.cleansers} />
          </section>

          <section id="toners-retail">
            <h2>Toners (Retail-size)</h2>
            <Thumbnails data={data.toners} />
          </section>

          <section id="moisturizers-spf-retail">
            <h2>Moisturizers & SPF (Retail-size)</h2>
            <Thumbnails data={data.moisture} />
          </section>

          <section id="eyes-lips-retail">
            <h2>Eyes & Lips (Retail-size)</h2>
            <Thumbnails data={data.eyesLips} />
          </section>

          <section id="serums-specialty-retail">
            <h2>Serums & Specialty (Retail-size)</h2>
            <Thumbnails data={data.serums} />
          </section>

          <section id="exfoliants-retail">
            <h2>Exfoliants (Retail-size)</h2>
            <Thumbnails data={data.exfoliants} />
          </section>
          <section id="masks-retail">
            <h2>Masks (Retail-size)</h2>
            <Thumbnails data={data.masks} />
          </section>
        </article>

        <article id="travel-size-images">
          <section id="cleansers-travel">
            <h2>Cleansers (Travel-size)</h2>
            <Thumbnails data={data.cleansers} travelMedia={true} />
          </section>

          <section id="toners-travel">
            <h2>Toners (Travel-size)</h2>
            <Thumbnails data={data.toners} travelMedia={true} />
          </section>

          <section id="moisturizers-spf-travel">
            <h2>Moisturizers & SPF (Travel-size)</h2>
            <Thumbnails data={data.moisture} travelMedia={true} />
          </section>

          <section id="eyes-lips-travel">
            <h2>Eyes & Lips (Travel-size)</h2>
            <Thumbnails data={data.eyesLips} travelMedia={true} />
          </section>

          <section id="serums-specialty-travel">
            <h2>Serums & Specialty (Travel-size)</h2>
            <Thumbnails data={data.serums} travelMedia={true} />
          </section>

          <section id="exfoliants-travel">
            <h2>Exfoliants (Travel-size)</h2>
            <Thumbnails data={data.exfoliants} travelMedia={true} />
          </section>

          <section id="masks-travel">
            <h2>Masks (Travel-size)</h2>
            <Thumbnails data={data.masks} travelMedia={true} />
          </section>
        </article>

        <article>
          <section id="logos">
            <h2>Logos</h2>
            <Thumbnails data={data.logos} images={data.edges} logoMedia={true} />
          </section>
        </article>
      </ProductsWrapper>
    </Layout>
  )
}
export const query = graphql`
  {
    file( relativePath: { eq: "slideshow/array-of-michele-corley-products-1280x800-blue.jpg" }) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 230, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
          imgTravel {
            id
            title
            description
            fixed(height: 230, toFormat: WEBP, quality: 100) {
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
            fixed(height: 164, toFormat: WEBP, quality: 100) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }
  }
`

const ProductsWrapper = styled.section`
  & article {
    & h2 {
      color: var(--poppy);
      margin: 1.5rem 0 auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: pre;
    }
  }
`
export default ProductImagesLogos
