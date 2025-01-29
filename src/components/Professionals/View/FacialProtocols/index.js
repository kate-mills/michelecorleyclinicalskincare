import React from 'react'
import Img from 'gatsby-image'

import styles from './index.module.css'
import DownloadList from '../downloadList'

import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
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
    facialsA: allAirtable(
      filter: { table: { eq: "Facials" } }
      limit: 4
      sort: { fields: data___name, order: ASC }
    ) {
      nodes {
        id
        data {
          name
          pdf {
            localFiles {
              publicURL
            }
          }
        }
      }
    }

    facialsB: allAirtable(
      filter: { table: { eq: "Facials" } }
      skip: 4
      sort: { fields: data___name, order: ASC }
    ) {
      nodes {
        id
        data {
          name
          pdf {
            localFiles {
              publicURL
            }
          }
        }
      }
    }
  }
`
const Profile = () => {
  const data = useStaticQuery(query)
  const { media, facialsA, facialsB } = data
  const bowl = media.nodes.filter(({ data }) => data.name === 'bowl')

  return (
    <article>
      {/* Row -  Facials */}
      <section title="Facials" className={styles.section} id="facials">
        <div className={styles.sectionFlexItems}>
          <div>
            <DownloadList data={facialsA.nodes} />
          </div>
          <div>
            <DownloadList data={facialsB.nodes} />
            <Img
              fluid={bowl[0].data.image.localFiles[0].childImageSharp.fluid}
              alt="Hand holding a bowl containing a fan brush and facial product."
              className={styles.facialBowlImg}
            />
          </div>
        </div>
      </section>
    </article>
  )
}

export default Profile
