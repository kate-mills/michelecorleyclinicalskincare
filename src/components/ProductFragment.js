import { graphql } from 'gatsby'

export const productDetailFragment = graphql`
  fragment ProductDetails on ContentfulMccProduct {
    isAcneSafe
    isAwardWinner
    isBst:isBestSeller
    name
    isProOnly
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
      publicUrl
      placeholderUrl
      localFile{ publicURL }
      gatsbyImageData(width: 225, height: 225, quality: 100)
    }
    awardImage {
      gatsbyImageData(width: 80, height: 80, quality: 100)
    }
    pdf:profiles {
      publicUrl
      placeholderUrl
      localFile{ publicURL }
    }
  }
`
