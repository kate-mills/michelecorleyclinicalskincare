import React from 'react'
import Img from 'gatsby-image'
import styles from './press.module.css'

const Press = ({ data: { data } }) => {
  return (
    <div className={styles.pr__row}>
      <Img
        fluid={data.image.localFiles[0].childImageSharp.fluid}
        className={styles.pr__col}
      />
      <div className={`${styles.pr__col} ${styles.pr__flexible__col}`}>
        <p>{data.summary}</p>
        {data.link ? (
          <a
            href={data.link}
            className={`${styles.read__more} btn btn-white`}
            target="_blank"
            rel="noreferrer"
          >
            Read More
          </a>
        ) : (
          false
        )}
      </div>
    </div>
  )
}

export default Press
