import React from 'react'

import Img from 'gatsby-image'

import styles from './index.module.css'
import DownloadList from '../downloadList'

import { graphql, useStaticQuery } from 'gatsby'

const Manuals = () => {
  const data = useStaticQuery(query)
  const { manuals, media } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')

  return (
    <article>
      {/* Manuals */}
      <section className={styles.manuals} id="manuals">
        <div className={styles.sectionFlexItems}>
          <Img
            className={styles.estheticianImg}
            fluid={esty[0].data.image.localFiles[0].childImageSharp.fluid}
          />
          <DownloadList data={manuals.nodes.slice(0, 4)} />
        </div>
        <div className={styles.sectionFlexSingle}>
          <DownloadList data={manuals.nodes.slice(4)} />
        </div>
      </section>
    </article>
  )
}


const query = graphql`
  {
    manuals: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { ne: true } } }
      sort: { fields: data___orderId, order: ASC }
    ) {
      nodes {
        id
        data {
          isNew
          dateUpdated(formatString: "MM/DD/YY")
          name
          notes
          pdf {
            localFiles {
              publicURL
            }
          }
        }
      }
    }
    media: allAirtable(filter: { table: { eq: "Media" } }) {
      nodes {
        id
        data {
          name
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`


export default Manuals 
