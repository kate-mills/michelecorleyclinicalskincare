import React from 'react'
import Img from 'gatsby-image'
import styles from './article.module.css'
import AniLink from "gatsby-plugin-transition-link/AniLink";

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
        { data.relativeLink && <AniLink fade to={data.relativeLink}
          className="btn"
        >Read More</AniLink> }
      </div>
    </div>
  )
}

export default SingleArticle
