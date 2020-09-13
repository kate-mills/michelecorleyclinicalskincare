import React from 'react'
import SEO from '../../../components/seo'

import Img from 'gatsby-image'

import styles from './professionals.module.css'

import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    manuals: allAirtable(filter: { table: { eq: "Manuals" } }) {
      nodes {
        id
        data {
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
  const { manuals, media, facialsA, facialsB } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')
  const bowl = media.nodes.filter(({ data }) => data.name === 'bowl')

  return (
    <>
      <SEO title="Professionals" />
      <h1 className="poppy txt-center">Professionals</h1>
      {/* Top Row - Manuals */}
      <article className={styles.manuals__row}>
        {/* Left column  - esty image */}
        <Img
          className={`${styles.manuals__col} ${styles.left}`}
          fluid={esty[0].data.image.localFiles[0].childImageSharp.fluid}
        />
        {/* Right column pdf's */}
        <div className={`${styles.manuals__col}  ${styles.right}`}>
          {/* Right item */}
          {manuals.nodes.map(({ id, data }) => {
            return (
              <div key={id} className={styles.manual__item}>
                <h2 className="poppy">{data.name}</h2>
                <p className={styles.manual__notes}>{data.notes}</p>
                <a
                  className="btn"
                  href={data.pdf.localFiles[0].publicURL}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download {data.name}
                </a>
              </div>
            )
          })}
        </div>
      </article>
      {/* Under image of esty */}
      <article className={`${styles.orders__col}`}>
        <h2 className={`${styles.heading__h2} poppy `}>Order Specifics</h2>
        <ul data-bullet-list>
          <li>
            <p>$100 minimum order (Exception - Best Sellers Travel Size Kit)</p>
          </li>
          <li>
            <p> Orders shipped via UPS within 1-3 business days</p>
          </li>
          <li>
            <p>MC, Visa, American Express, and Discover are accepted</p>
          </li>
        </ul>
      </article>

      {/* Row -  Facials */}
      <article className={`${styles.facials}`}>
        <div className={styles.facial__header}>
          <h2 className="poppy">Facial Protocols</h2>
        </div>
        <div className={styles.facial__top__container}>
          {facialsA.nodes.map(({ id, data }) => {
            return (
              <div key={id} className={styles.facialA__item}>
                <h3 className={styles.facial__name}>{data.name}</h3>
                <a
                  className="btn"
                  href={data.pdf.localFiles[0].publicURL}
                  target="_blank"
                  rel="noreferrer"
                  download
                >
                  Download
                </a>
              </div>
            )
          })}
        </div>
        <div className={`${styles.facial__bottom__container}`}>
          <div className={styles.facial__col__left}>
            <Img
              className={styles.facial__img}
              fluid={bowl[0].data.image.localFiles[0].childImageSharp.fluid}
              alt="Show a hand holding a bowl containing a fan brush and facial product."
            />
          </div>

          <div
            className={`${styles.facial__col__right} ${styles.facial__item}`}
          >
            {facialsB.nodes.map(({ id, data }) => {
              return (
                <div key={id} className={styles.facialB__item}>
                  <h3 className={styles.facial__name}>{data.name}</h3>
                  <a
                    className="btn"
                    href={data.pdf.localFiles[0].publicURL}
                    target="_blank"
                    rel="noreferrer"
                    download
                  >
                    Download
                  </a>
                </div>
              )
            })}
          </div>
        </div>
      </article>
    </>
  )
}

export default Profile
