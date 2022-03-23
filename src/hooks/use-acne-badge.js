import { useStaticQuery, graphql } from 'gatsby'

export const useAcneBadge = () => {
  const data = useStaticQuery(
    graphql`
      query {
        acneSafeImg: allContentfulMccMediaImg(
          filter: { category: { eq: "Icon" }, name: { eq: "acne-safe" } }
        ) {
          edges {
            node {
              images {
                fixed(width: 100, height: 100, quality: 100, toFormat: PNG) {
                  ...GatsbyContentfulFixed
                  src
                }
              }
            }
          }
        }
      }
    `
  )
  return data.acneSafeImg.edges[0].node.images[0]
}
