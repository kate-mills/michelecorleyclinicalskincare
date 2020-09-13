import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import styles from './product-template.module.css'
import PageModel from '../components/PageModel'
import VideoPlayer from '../components/Video'

const Product = ({ data: { product } }) => {
  return (
    <PageModel
      title={product.name}
      description={product.description.description}
    >
      <div
        className={styles.single__product}
        itemScope
        itemType="https://schema.org/Product"
      >
        <h1 itemProp="name">{product.name}</h1>
        <h2 className={styles.singlep__skintypes}>
          {product.skinType.map((item, index) => {
            return (
              <span key={index} className={styles.skintype}>
                {item}
              </span>
            )
          })}
        </h2>
        <h3 className={styles.singlep__category} itemProp="category">
          {product.category}
        </h3>
        <div className={styles.flex__justify}>
          <p itemProp="description" className={styles.description}>
            {product.description.description}
          </p>
        </div>
        <div className={styles.singlep__media}>
          <Image
            className={styles.product__image}
            fixed={product.imgRetail.fixed}
            objectFit="cover"
            objectPosition="50% 50%"
            title={product.imgRetail.title}
            alt={product.imgRetail.description}
            type="media"
          />

          {product.videoId && (
            <VideoPlayer
              src={`https://player.vimeo.com/video/${product.videoId}`}
            />
          )}
        </div>
        <h4>A FEW KEY Ingredients & Benefits:</h4>
        <ul style={{ margin: '0 60px' }} data-bullet-list>
          {product.keyIngredients.map((item, index) => {
            return (
              <li key={index}>
                <p>
                  <span className={styles.formatted__name}>
                    {item.name.formatted}:
                  </span>
                  {item.benefit}
                </p>
              </li>
            )
          })}
        </ul>
      </div>
    </PageModel>
  )
}

export const query = graphql`
  query GetMccProduct($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      name
      category
      skinType
      description {
        description
      }
      videoId: video
      keyIngredients {
        name {
          formatted
        }
        benefit
      }
      imgRetail {
        id
        title
        description
        fixed(cropFocus: CENTER, height: 300, quality: 100) {
          src
          ...GatsbyContentfulFixed
        }
      }
      award
    }
  }
`
export default Product
