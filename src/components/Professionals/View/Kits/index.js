import React from 'react'

import styles from './index.module.css'
import DownloadList from '../downloadList'
import { graphql, useStaticQuery } from 'gatsby'

const Profile = () => {
  const data = useStaticQuery(query)
  const { kits } = data
  const kitsSlice1 = kits.nodes.slice(0, kits.nodes.length / 2)
  const kitsSlice2 = kits.nodes.slice(kits.nodes.length / 2)
  return (
      <article>
        {/* Kits */}
        <section className={styles.kits} id="kits">
          <div className={styles.sectionFlexItems}>
            <DownloadList data={kitsSlice1} />
            <DownloadList data={kitsSlice2} />
          </div>
        </section>
      </article>
  )
}

export default Profile

const query = graphql`
  {
    kits: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { eq: true } } }
      sort: { fields: data___orderId, order: ASC }
    ) {
      nodes {
        id
        data {
          name
          isNew
          dateUpdated(formatString: "MM/DD/YY")
          notes
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
