import { graphql } from 'gatsby'

export const productImageDetailFragment = graphql`
  fragment ProductImageDetails on ContentfulMccProduct {
    isAcneSafe
    isAwardWinner
    isBst: isBestSeller
    isProOnly
    contentful_id
    name
    slug
    category
    imgRetail {
      localFile { publicURL }
      id
      title
      description
      gatsbyImageData(width: 500, height: 500, quality: 100)
      publicUrl
      placeholderUrl
    }
    imgTravel {
      localFile { publicURL }
      id
      title
      description
      gatsbyImageData(height: 500, quality: 100)
    }
    awardImage {
      gatsbyImageData(width: 80, height: 80, quality: 100)
    }
  }
`
