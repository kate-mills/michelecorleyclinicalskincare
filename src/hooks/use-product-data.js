import { useStaticQuery, graphql } from 'gatsby'

export const useProductData = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulMccProduct(
          sort: { order: [ASC, ASC], fields: [category, name] }
        ) {
          products: nodes {
            name
            slug
            category
            contentful_id
          }
        }
      }
    `
  )
  return data.allContentfulMccProduct.products
}
