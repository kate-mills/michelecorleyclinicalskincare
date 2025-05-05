import * as React from 'react'

import { graphql } from 'gatsby'
import { GlobalLayout, Thumbnails, Seo } from '../components'

export default function ProductImagesLogosPage({ data }) {
  return (
    <GlobalLayout>
      <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>

      <section>
        <article id="retail-size-images" className="g-mb2">
          <section id="cleansers-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">Cleansers (Retail-size)</h2>
            <Thumbnails data={data.cleansers} />
          </section>

          <section id="toners-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">Toners (Retail-size)</h2>
            <Thumbnails data={data.toners} />
          </section>

          <section id="exfoliants-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">Exfoliants (Retail-size)</h2>
            <Thumbnails data={data.exfoliants} />
          </section>

          <section id="serums-spf-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Serums & Specialty (Retail-size)
            </h2>
            <Thumbnails data={data.serums} />
          </section>

          <section id="moisturizers-spf-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Moisturizers & Spf (Retail-size)
            </h2>
            <Thumbnails data={data.moisturizers} />
          </section>

          <section id="masks-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">Masks (Retail-size)</h2>
            <Thumbnails data={data.masks} />
          </section>

          <section id="eyes-lips-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">Eyes & Lips (Retail-size)</h2>
            <Thumbnails data={data.eyesLips} />
          </section>
        </article>

        <article id="travel-size-images" className="g-mb2">
          <section id="cleansers-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">Cleansers (Travel-size)</h2>
            <Thumbnails data={data.cleansers} travelMedia />
          </section>

          <section id="toners-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">Toners (Travel-size)</h2>
            <Thumbnails data={data.toners} travelMedia />
          </section>

          <section id="exfoliants-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">Exfoliants (Travel-size)</h2>
            <Thumbnails data={data.exfoliants} travelMedia />
          </section>

          <section id="serums-spf-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Serums & Specialty (Travel-size)
            </h2>
            <Thumbnails data={data.serums} travelMedia />
          </section>

          <section id="moisturizers-spf-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Moisturizers & Spf (Travel-size)
            </h2>
            <Thumbnails data={data.moisturizers} travelMedia />
          </section>

          <section id="masks-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">Masks (Travel-size)</h2>
            <Thumbnails data={data.masks} travelMedia />
          </section>

          <section id="eyes-lips-travel" className="g-mb1">
            <h2 className="poppy g-txt-center">Eyes & Lips (Travel-size)</h2>
            <Thumbnails data={data.eyesLips} travelMedia />
          </section>

          <section id="logos" className="g-mb1">
            <h2 className="poppy g-txt-center">Logos</h2>
            <Thumbnails data={data.logos} logoMedia/>
          </section>

        </article>
      </section>
    </GlobalLayout>
  )
}

export const query = graphql`
  {
    cleansers: allContentfulMccProduct(
      filter: { category: { eq: "cleansers" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    toners: allContentfulMccProduct(
      filter: { category: { eq: "toners" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    exfoliants: allContentfulMccProduct(
      filter: { category: { eq: "exfoliants" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    serums: allContentfulMccProduct(
      filter: { category: { eq: "serums & specialty" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    moisturizers: allContentfulMccProduct(
      filter: { category: { eq: "moisturizers & spf" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    masks: allContentfulMccProduct(
      filter: { category: { eq: "masks" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }

    eyesLips: allContentfulMccProduct(
      filter: { category: { eq: "eyes & lips" } }
      sort: { name: ASC }
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
            gatsbyImageData(height: 230)
          }
          imgTravel {
            id
            title
            description
            gatsbyImageData(height: 230)
          }
        }
      }
    }
    logos: allContentfulMccMediaImg(filter: { category: { eq: "Logos" } }) {
      edges {
        node {
          name
          slug
          images {
            gatsbyImageData
            localFile {
              publicURL
            }
          }
        }
      }
    }
  }
`

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Michele Corley Product Images & Logos"
      pathname={pathname}
      description="The following resources are available for your use in representing Michele Corley Clinical Skin Care products."
    />
  )
}
