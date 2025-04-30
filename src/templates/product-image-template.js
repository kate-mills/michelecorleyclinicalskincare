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
      <div className={`top-bar ${!product?.imgTravel && 'short'}`}>
        <div
          className="top-bar-goback"
          role="button"
          tabIndex="0"
          onClick={state?.id ? goBack : goHome}
          onKeyPress={state?.id ? goBack : goHome}
        >
          X
        </div>
      </div>

      <div className="flex-box-images">
        {product?.imgTravel && (
          <div className="img-box travel-box">
            <a
              href={product?.imgTravel?.localFile?.publicURL}
              className="btn"
              download={`Travel-size ${product.name}`}
            >
              {`Download Travel-size Image`}
            </a>
            <GatsbyImage
              className="img travel-img"
              image={product.imgTravel?.gatsbyImageData}
              alt={product.imgTravel?.description}
            />
          </div>
        )}
        <div className="img-box">
          <a
            href={product?.fluidImg?.localFile?.publicURL}
            className="btn"
            download={`${retailOrProText} ${product?.name}`}
          >
            {`Download ${retailOrProText} Image`}
          </a>
          <GatsbyImage
            className="img"
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
    background-color: var(--offWhite);
    min-height: calc(100vh + 200px);
    .top-bar {
      border-inline: 1px solid var(--mainMcc);
      margin: 0 auto;
      text-align: right;
      width: 80%;
      &.short{
        width: 40%; /* line up border with 1 img */
      }
      &-goback {
        display: inline-block;
        padding: 1rem 1.5rem;
        font-size: 2.5rem;
        font-weight: 300;
        margin: 1px;
        &:hover {
          background: var(--mainWhite);
          cursor: pointer;
        }
      }
    }
    .flex-box-images {
      background: var(--mainWhite);
      display: flex;
      flex-wrap: wrap-reverse;
      justify-content: center;
      div.img-box {
        background: var(--mainWhite);
        border-inline: 1px solid var(--offWhite);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 40%;
        & .travel-img {
          transform: scale(0.65);
        }
        & a.btn {
          background-color: rgb(89 112 164 / 29%);
          font-size: 0.8rem;
          min-width: 80%;
          padding: 0.8rem 1rem;
          position: relative;
          text-align: center;
          top: 2rem;
          z-index: 100;
          &:hover{
            background-color: var(--mainWhite);
          }
        }
      }
    }
    @media (max-width: 800px) {
      .top-bar{
        width: 100%;
        &.short{
          width: 100%;
        }
      }
      .flex-box-images {
        div.img-box {
          width: 100%;
          & a.btn {
            padding: 0.8rem 2rem;
            top: 2rem;
          }
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => {
  return <Seo title={pageContext.title} description={pageContext.description} />
}
