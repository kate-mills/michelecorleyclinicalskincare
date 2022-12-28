import React from 'react'
import Img from 'gatsby-image'
import styles from './beforeafter.module.css'

const BeforeAfter = ({ data, idx }) => {
  const splitTrim = products => {
    return products.split('- ').slice(1)
  }
  const product_list = splitTrim(data.data.product_list)
  return (
    <article id={data.data.name} className={styles.ba__article}>
      <div className={styles.ba__article__media}>
        <figure>
          <Img
    loading={idx < 1 ? 'eager': 'lazy'}
            fluid={data.data.media.localFiles[0].childImageSharp.fluid}
            alt={`Before and after of Michele Corley client using ${data.data.product_heading.toLowerCase()}`}
          />
          <figcaption>{data.data.notes}</figcaption>
        </figure>
      </div>
      <div className={styles.ba__article__text}>
        <h2 className={styles.ba__article__text__heading}>
          {data.data.product_heading}
        </h2>
        <ul className={styles.ba__article__text__list} data-bullet-list>
          {product_list.map(product => {
            return (
              <li key={product.trim()}>
                <p>{product.trim()}</p>
              </li>
            )
          })}
        </ul>
      </div>
    </article>
  )
}

export default BeforeAfter
