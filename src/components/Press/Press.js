import React from 'react'
import Img from 'gatsby-image'
import styles from './press.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Press = ({ data: { data } }) => {
  return (
    <div className={styles.press__row}>
      <Img
        fluid={data.image.localFiles[0].childImageSharp.fluid}
        className={styles.press__col}
      />
      <div className={`${styles.press__col}`}>
        <h3>{data.summary}</h3>
        {data.link && (
          <a
            tabIndex={0}
            href={data.link}
            className={`${styles.read__more} btn btn-white`}
            target="_blank"
            rel="noreferrer"
          title={`${data.title}`}
          >
            Read More
            <h4 className="sr-only">{data.title}</h4>
          </a>
        )}
        {data.relativeLink && (
          <AniLink fade tabIndex={0} to={data.relativeLink} className={`${styles.read__more} btn`}>
            Read More
          <h4 className="sr-only">{data.title}</h4>
          </AniLink>
        )}
      </div>
    </div>
  )
}

export default Press
