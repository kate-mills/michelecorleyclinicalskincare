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
          <div className="top-bar--spacer">
          </div>
          <div
            className="top-bar--goback"
            role="button"
            tabIndex="0"
            onClick={goBack}
            onKeyPress={goBack}
          >
            X
          </div>
        </div>

        <div className="flex-box-images">
          <Img
            className="retail-img img"
            fluid={product.fluidImg.fluid}
            alt={product.fluidImg.description}
          />
          {product.imgTravel && (
            <Img
              className="travel-img img"
              fluid={product.imgTravel.fluid}
              alt={product.imgTravel.description}
            />
          )}
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

    > .top-bar {
      color: var(--blackText);
      display: flex;
      align-items: center;
      font-size: 1.4rem;
      width: 100%;

      > .top-bar--goback {
        font-size: 3.5rem;
        padding: 1rem 1rem;
        font-weight: 300;

        &:hover {
          cursor: pointer !important;
          background: var(--mainWhite);
        }
      }
      > .top-bar--spacer {
        width: 100vw;
      }
    }

    > .flex-box-images {
      background: var(--mainWhite);
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
      margin: 2px auto 0;
      width: 100%;
      border: 1px solid transparent;
      .img {
        width: 50%;
        border: 1px solid var(--offWhite);
      }
    }

    @media (min-width: 0px) and (max-width: 480px) {
      > .top-bar {
        > .top-bar--goback {
          font-size: 2rem;
        }
      }
    }

    @media (max-width: 1024px){
      > .flex-box-images {
        flex-wrap: wrap;
        .img {
          width: 100%;
        }
      }
    }
  }
`
