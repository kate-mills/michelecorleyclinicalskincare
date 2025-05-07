import React, { useState } from 'react'

import { graphql } from 'gatsby'
import { GlobalLayout, Thumbnails, Seo } from '../components'

import styled from 'styled-components'

export default function ProductImagesLogosPage({ data }) {
  const imgList = ['travel', 'retail']
  const [listIdx, setListIdx] = useState(0)

  const getSectionSize = () => imgList[Number(!Boolean(listIdx))]
  const toggleImgList = () => {
    setListIdx(prev => Number(!Boolean(prev)))
  }

  return (
    <GlobalLayout>
      <h1>Product Images & Logos</h1>
      <p className="txt-center pb0">
        The following resources are available for your use in representing
        Michele Corley Clinical Skin Care products.
      </p>
      <StyledSection>
        <article id="retail" className="g-mb2">
          <section id="cleansers-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Cleansers {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.cleansers} travelMedia={listIdx > 0} />
          </section>

          <section id="toners-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Toners {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.toners} travelMedia={listIdx > 0} />
          </section>

          <section id="exfoliants-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Exfoliants {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.exfoliants} travelMedia={listIdx > 0} />
          </section>

          <section id="serums-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Serums {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.serums} travelMedia={listIdx > 0} />
          </section>

          <section id="moisturizers-spf-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Moisturizers & Spf {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.moisturizers} travelMedia={listIdx > 0} />
          </section>

          <section id="masks-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Masks {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.masks} travelMedia={listIdx > 0} />
          </section>

          <section id="eyes-lips-retail" className="g-mb1">
            <h2 className="poppy g-txt-center">
              Eyes & Lips {`${getSectionSize()}-size`}
            </h2>
            <button className="btn" onClick={toggleImgList}>
              Show {imgList[listIdx]} Images
            </button>
            <Thumbnails data={data.eyesLips} travelMedia={listIdx > 0} />
          </section>

          <section id="logos" className="g-mb1">
            <h2 className="poppy g-txt-center">Logos</h2>{' '}
            <Thumbnails data={data.logos} logoMedia />{' '}
          </section>
        </article>
      </StyledSection>
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
          contentful_id
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

const StyledSection = styled.section`
  & button.btn {
    display: block;
    margin: 0 auto 1rem;
    padding-block: 0.4rem;
    font-size: 9px;
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
