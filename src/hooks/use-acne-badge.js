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
                fixed(
                  cropFocus: CENTER
                  height:70 
                  width: 70
                  quality: 100
                  background: "transparent"
                  resizingBehavior: PAD 
                ) {
                  ...GatsbyContentfulFixed
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
