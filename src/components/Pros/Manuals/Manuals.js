import React from 'react'

import { graphql, useStaticQuery } from 'gatsby'

import DownloadList from '../downloadList'


const Manuals = () => {
  const data = useStaticQuery(query)
  const { manuals, media } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')

  return (
    <article>
      {/* Manuals */}
      <section id="manuals">
        <div className={''}>
          <img
            className={''}
            src={esty[0].data.image.localFiles[0].publicURL}
            alt=""
          />
          <DownloadList data={manuals.nodes.slice(0, 4)} />
        </div>
        <div className={''}>
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
      sort: {data: {orderId: ASC}}
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
              publicURL
            }
          }
        }
      }
    }
  }
`


export default Manuals 
