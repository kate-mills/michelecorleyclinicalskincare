import React from 'react'

import { SpaLocatorFixedLink } from '../components/SpaLocator'
import { graphql, Link } from 'gatsby'

import Layout from '../components/layout'
import Product from '../components/Products/Product'

const ProductTemplate = ({ data: { product }, className }) => {
  const formatCategory = category => {
    let CategoryMap = {}
    let str = 'View All '
    CategoryMap['moisturizers & spf'] = 'MOISTURIZERS & SPFS'
    CategoryMap['eyes & lips'] = 'EYE & LIP PRODUCTS'
    CategoryMap['serums & specialty'] = 'SERUM & SPECIALTY PRODUCTS'
    return CategoryMap[category]
      ? str.concat(CategoryMap[category])
      : str.concat(category)
  }
  const formatLink = ({ category }) =>
    category.replace(' & ', ' ').split(' ').join('-')

  return (
    <Layout
      title={product.name}
      description={product.description.description}
      image={product.seoImg.fixed.src}
      id={product.name}
    >
      <SpaLocatorFixedLink />
      <Product product={product} isTemplate={true} />
      <div className="lower-btn-div">
        <p className="txt-center">
          <Link className="btn" to={`/${formatLink(product)}/`}>
            {formatCategory(product.category)}
          </Link>
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      profiles { file { url } }
      acneSafe
      isBestSeller
      name
      professionalOnly
      slug
      contentful_id
      category
      skinType
      description { description }
      video
      keyIngredients {
        id
        name {
          formatted
        }
        benefit
      }
      imgRetail {
        id
        title
        description
        fixed(
          resizingBehavior: PAD 
          width: 400
          quality: 100
          toFormat: WEBP
          background: "#fff"
        ) {
          ...GatsbyContentfulFixed
        }
      }
      seoImg: imgRetail {
        fixed(
          resizingBehavior:NO_CHANGE
          width: 400
          height: 200
          quality: 100
          toFormat: WEBP
          background: "#fff"
        ) {
          src
          ...GatsbyContentfulFixed
        }
      }
      award
      awardImage {
        fixed(
          quality: 100
          width: 70
          height: 70
          background: "#fff"
          toFormat: WEBP
        ) {
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
export default ProductTemplate
