import React from 'react'

import styled from 'styled-components'
import { graphql } from 'gatsby'

const ProductImageTemplate = props => {
  const { data: { product }} = props

  return (
    <>
      {product.name}
    </>
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
      }
      imgTravel {
        id
        title
        description
        gatsbyImageData
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
      padding-bottom: 5%;

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
          bottom: -8%;
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
            bottom: 3%;
          }
          & a.btn.travel{
            bottom: 25%;
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
