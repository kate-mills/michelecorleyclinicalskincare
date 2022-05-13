import React from 'react'
import Img from 'gatsby-image'
import styles from './press.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Press = ({ data: { data } }) => {
  let readMorePhrase = 'Read more about '.concat(data.summary.split(' was ')[0])
  return (
    <div className={styles.pr__row}>
      <Img
        fluid={data.image.localFiles[0].childImageSharp.fluid}
        className={styles.pr__col}
      />
      <div className={`${styles.pr__col} ${styles.pr__flexible__col}`}>
        <h3>{data.summary}</h3>
        {data.link && (
          <a
          tabIndex={0}
            href={data.link}
            className={`${styles.read__more} btn btn-white`}
            target="_blank"
            rel="noreferrer"
          >
            Read More
            <h4 className="sr-only">{readMorePhrase}</h4>
          </a>
        )}
        {data.relativeLink && (
          <AniLink fade tabIndex={0} to={data.relativeLink} className="btn">
            Read More
          <h4 className="sr-only">{readMorePhrase}</h4>
          </AniLink>
        )}
      </div>
    </div>
  )
}

export default Press
