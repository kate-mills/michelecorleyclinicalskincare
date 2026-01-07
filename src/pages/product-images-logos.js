import React, { useState } from 'react'

import { graphql } from 'gatsby'
import { GlobalLayout, Thumbnails, Seo } from '../components'

import styled from 'styled-components'

const ProductImagesLogosPage = ({ data }) => {
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
        <p className="instructions">
          Click image thumbnails to see download options.
        </p>
        <article className="mb2">
          <section id="cleansers" className="mb1">
            <h2>
              <span className="category">
                {`${getSectionSize()} `} Cleansers
              </span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size{' '}
              </button>
            </h2>
            <Thumbnails data={data.cleansers} travelMedia={listIdx > 0} />
          </section>

          <section id="toners" className="mb2">
            <h2 className="poppy txt-center">
              <span className="category">{`${getSectionSize()} `} Toners</span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.toners} travelMedia={listIdx > 0} />
          </section>

          <section id="exfoliants" className="mb2">
            <h2>
              <span className="category">
                {`${getSectionSize()} `} Exfoliants
              </span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.exfoliants} travelMedia={listIdx > 0} />
          </section>

          <section id="serums" className="mb2">
            <h2>
              <span className="category">{`${getSectionSize()} `} Serums</span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.serums} travelMedia={listIdx > 0} />
          </section>

          <section id="moisturizers-spf" className="mb2">
            <h2>
              <span className="category">
                {`${getSectionSize()} `} Moisturizers & Spf
              </span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.moisturizers} travelMedia={listIdx > 0} />
          </section>

          <section id="masks" className="mb2">
            <h2>
              <span className="category">{`${getSectionSize()} `} Masks</span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.masks} travelMedia={listIdx > 0} />
          </section>

          <section id="eyes-lips" className="mb2">
            <h2>
              <span className="category">
                {`${getSectionSize()} `} Eyes & Lips{' '}
              </span>
              <button className="btn" onClick={toggleImgList}>
                Show {imgList[listIdx]}-Size
              </button>
            </h2>
            <Thumbnails data={data.eyesLips} travelMedia={listIdx > 0} />
          </section>

          <section id="logos" className="mb2">
            <h2 className="poppy txt-center">Logos</h2>{' '}
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
      filter: { categories: { eq: "moisturizers & spf" } }
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
    h2 {
      margin: 0 auto;
      text-align: center;
      .category {
        display: block;
      }
      button {
        background: var(--poppy);
        border-color: var(--clear);
        color: var(--mainWhite);
        display: inline-block;
        font-size: 0.7rem;
        margin-block-end: 1rem;
        padding: 0.4rem 0.6rem;
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
