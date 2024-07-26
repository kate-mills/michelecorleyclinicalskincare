import React from 'react'
import SEO from '../components/FullSeo'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

const ProductImageTemplate = props => {
  const goBack = () => {
    window.history.go(-1)
  }

  const {
    data: { product },
    className,
  } = props

  return (
    <>
      <SEO
        title={`${product.name} - Michele Corley`}
        description={`Michele Corley Clinical Skincare - ${product.name}`}
        image={product.fluidImg.fluid.src.slice(2)}
      />
      <div className={`${className}`}>
        <div className="top-bar">
          <div className="top-bar--left_spacer">
          </div>
          <div
            className="top-bar--right_goback"
            role="button"
            tabIndex="0"
            onClick={goBack}
            onKeyPress={goBack}
          >
            X
          </div>
        </div>

        <div className="flex-box-images">
          { product.imgTravel && (
            <div className="img-box small-box">
              <Img
                className="img small-img"
                fluid={product.imgTravel.fluid}
                alt={product.imgTravel.description}
              />
            <a href={product.imgTravel.localFile.publicURL} className="btn" download={`Travel-size ${product.name}`}>Download Travel-size Image</a>
            </div>
          )}
          <div className="img-box large-box">
            <Img
              className="img large-img"
              fluid={product.fluidImg.fluid}
              alt={product.fluidImg.description}
            />
            <a href={product.fluidImg.localFile.publicURL} className="btn" download={`Retail-size ${product.name}`}>Download Retail-size Image</a>
          </div>
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query GetMccImage($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      name
      description {
        description
      }
      fluidImg: imgRetail {
        id
        title
        description
        localFile {publicURL}
        fluid(
          cropFocus: BOTTOM
          maxWidth: 1000
          quality: 100
          toFormat: JPG
          background: "white"
        ) {
          ...GatsbyContentfulFluid
        }
      }
      imgTravel {
        id
        title
        description
        localFile {publicURL}
        fluid(
          cropFocus: BOTTOM
          maxWidth: 1000
          quality: 100
          toFormat: JPG
          background: "white"
        ) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default styled(ProductImageTemplate)`
  & {
    background-color: var(--mainMcc);
    background-color: var(--offWhite);
    border-color: transparent;
    min-width: 100vw;
    min-height: calc(100vh + 200px);

    > .top-bar {
      color: var(--blackText);
      display: flex;
      align-items: center;

      > .top-bar--left_spacer{
        width: 100vw;
      }
      > .top-bar--right_goback {
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
      flex-wrap: nowrap;
      justify-content: center;
      margin: 2px auto 0;
      border-inline: 1px solid transparent;
      border-block-end: 1px solid transparent;
      width: 100vw;
      padding-top: 5%;

      div.img-box {
        background: var(--mainWhite);
        border-inline: 1px solid var(--offWhite);
        border-block-end: 1px solid var(--offWhite);
        border-block-start: 1px solid var(--offWhite);
        width: 85vh;
        height: 100%;

        position: relative;

        & a.btn{
          background-color: rgb(255 255 255 / 59%);
          display: block;
          position: absolute;
          top: -8%;
          left: 50%;
          margin-left: -178px;
          width: 356px;
          text-align: center;
          font-size: .8rem;
        }
        & .small-img {
          transform: scale(0.65) translateY(25%);
         }
      }
    }
  }

  @media (max-width: 1024px) {
    & {
      > .flex-box-images {
        flex-wrap: wrap-reverse;

        div.img-box {
          & a.btn{
            top: 3%;
          }

          width: 60vh;
          & .small-img{
            transform: scale(0.55) translateY(-10%);
          }
        }
      }
    }
  }
`
