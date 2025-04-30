import React from 'react'

import styled from 'styled-components'
import { graphql, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Seo } from '../components'

const ProductImageTemplate = props => {
  const {
    data: { product },
    className,
    location: { state },
  } = props

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/')

  const retailOrProText = `${product.professionalOnly ? 'Pro' : 'Retail'}-size`

  return (
    <div className={`${className}`}>
      <div className="top-bar">
        <div className="top-bar--left_spacer"></div>
        <div
          className="top-bar--right_goback"
          role="button"
          tabIndex="0"
          onClick={state?.id ? goBack : goHome}
          onKeyPress={state?.id ? goBack : goHome}
        >
          X
        </div>
      </div>
      <h2 className="txt-center">Download {product.name} Images</h2>

      <div className="flex-box-images">
        {product?.imgTravel && (
          <div className="img-box small-box">
            <a
              href={product?.imgTravel?.localFile?.publicURL}
              className="btn travel"
              download={`Travel-size ${product.name}`}
            >
              Download Travel-size Image
            </a>
            <GatsbyImage
              className="img small-img"
              image={product.imgTravel?.gatsbyImageData}
              alt={product.imgTravel?.description}
            />
          </div>
        )}
        <div className="img-box large-box">
          <a
            href={product?.fluidImg?.localFile?.publicURL}
            className="btn retail"
            download={`${retailOrProText} ${product?.name}`}
          >
            Download {retailOrProText} Image
          </a>
          <GatsbyImage
            className="img large-img"
            image={product.fluidImg.gatsbyImageData}
            alt={product.fluidImg.description}
          />
        </div>
      </div>
    </div>
  )
}

export const query = graphql`
  query GetMccImage($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      name
      professionalOnly
      description {
        description
      }
      fluidImg: imgRetail {
        id
        title
        description
        gatsbyImageData
        localFile {
          publicURL
        }
      }
      imgTravel {
        id
        title
        description
        gatsbyImageData
        localFile {
          publicURL
        }
      }
    }
  }
`
export default styled(ProductImageTemplate)`
  & {
    /*background-color: var(--offWhite);
    border-color: transparent;
    width: 100vw;
    min-width: 100vw;
    min-height: calc(100vh + 200px);*/

    > .top-bar {
      text-align: right;
      > .top-bar--left_spacer {
        width: 100vw;
      }
      > .top-bar--right_goback {
        display: inline-block;
        padding: 1rem 1.5rem;
        font-size: 2.5rem;
        font-weight: 300;
        &:hover {
          cursor: pointer !important;
          background: var(--mainWhite);
        }
      }
    }
    > .flex-box-images {
      background: var(--mainMcc);
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
      border-inline: 1px solid transparent;
      border-block-end: 1px solid transparent;
      margin: 2px auto 0;
      div.img-box {
        background: var(--mainWhite);
        border-inline: 1px solid var(--offWhite);
        border-block-end: 1px solid var(--offWhite);
        border-block-start: 1px solid var(--offWhite);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        max-width: 500px;
        & .small-img {
          transform: scale(0.65);
        }
        & a.btn {
          background-color: rgb(255 255 255 / 59%);
          font-size: 0.8rem;
          text-align: center;
          position: relative;
          top: 2rem;
          z-index: 100;
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => {
  return <Seo title={pageContext.title} description={pageContext.description} />
}
