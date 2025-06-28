import React from 'react'
import { graphql } from 'gatsby'

export const productDetailFragment = graphql`
  fragment ProductDetails on ContentfulMccProduct {
    acneSafe
    isBst:isBestSeller
    name
    proOnly:professionalOnly
    slug
    contentful_id
    category
    skinType
    description {
      description
    }
    video
    keyIngredients {
      id
      name {
        formatted
      }
      benefit
    }
    imgRetail {
      localFile{
        publicURL
      }
      gatsbyImageData(width: 225, height: 225, quality: 100)
    }
    award
    awardImage {
      gatsbyImageData(width: 80, height: 80, quality: 100)
    }
    pdf:profiles {
      localFile{
        publicURL
      }
    }
  }
`
