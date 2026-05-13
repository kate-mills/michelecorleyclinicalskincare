import { graphql } from 'gatsby'

export const productDetailFragment = graphql`
  fragment ProductWinnerDetails on ContentfulMccProduct {
    id
    isAcneSafe
    isAwardWinner
    isBst:isBestSeller
    name
    isProOnly
    slug
    contentful_id
    category
    imgRetail {
      publicUrl
      placeholderUrl
      localFile{ publicURL }
      gatsbyImageData(width: 200, height: 200, quality: 100)
    }
    awardImage {
      gatsbyImageData(width: 100, height: 100, quality: 100)
    }
    pdf:profiles {
      publicUrl
      placeholderUrl
      localFile{ publicURL }
    }
  }
`
