import React from 'react'
import Img from 'gatsby-image'
import styles from './article.module.css'

const SingleArticle  = ({ data: { data } }) => {
  return (
    <div className={styles.single__row}>
      <Img
        fluid={data.image.localFiles[0].childImageSharp.fluid}
        className={styles.single__col}
      />
      <div className={`${styles.single__col} ${styles.single__flexible__col}`}>
        <p className={styles.summary}>{data.summary}</p>
        {data.link &&  (
          <a
            href={data.link}
            className={`${styles.read__more} btn`}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>) 
        }
      </div>
    </div>
  )
}

export default SingleArticle
