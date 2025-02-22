import { useStaticQuery, graphql } from 'gatsby'

export const useProductData = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulMccProduct(sort: [{category: ASC}, {name: ASC}]) {
        products: nodes {
          name
          slug
          category
          contentful_id
        }
      }
    }
  `)
  return data.allContentfulMccProduct.products
}
