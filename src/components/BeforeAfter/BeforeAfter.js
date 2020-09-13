import React from 'react'
import Img from 'gatsby-image'
import styles from './beforeafter.module.css'

const BeforeAfter = ({ data }) => {
  const splitTrim = products => {
    return products.split('- ').slice(1)
  }
  const product_list = splitTrim(data.data.product_list)
  return (
    <div className={styles.ba__row}>
      <div className={styles.ba__top__row}>
        <figure className={styles.imageContainer}>
          <Img fluid={data.data.media.localFiles[0].childImageSharp.fluid} />
          <figcaption className={styles.ba__notes}>
            {data.data.notes}
          </figcaption>
        </figure>
      </div>
      <div className={`${styles.ba__col} ${styles.ba__col__right}`}>
        <h2 className={styles.product__heading}>{data.data.product_heading}</h2>
        <ul className={styles.product_list} data-bullet-list>
          {product_list.map((product, i) => {
            return (
              <li key={i}>
                <p>{product.trim()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default BeforeAfter
