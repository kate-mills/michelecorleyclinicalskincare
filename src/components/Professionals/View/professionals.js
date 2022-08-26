import React from 'react'
import SEO from '../../../components/FullSeo'

import Img from 'gatsby-image'

import styles from './professionals.module.css'
import DownloadList from './downloadList'

import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    manuals: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { ne: true } } }
      sort: { fields: data___orderId, order: ASC }
    ) {
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
    kits: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { eq: true } } }
      sort: { fields: data___orderId, order: ASC }
    ) {
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
  const { manuals, kits, media, facialsA, facialsB } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')
  const bowl = media.nodes.filter(({ data }) => data.name === 'bowl')
  const kitsSlice1 = kits.nodes.slice(0, kits.nodes.length / 2)
  const kitsSlice2 = kits.nodes.slice(kits.nodes.length / 2)

  return (
    <article>
      <SEO
        title="Education"
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <h1 className="poppy txt-center">Education</h1>
      {/* Manuals */}
      <section className={styles.manual__section}>
        <Img
          className={styles.esthetician_image}
          fluid={esty[0].data.image.localFiles[0].childImageSharp.fluid}
        />
        <DownloadList data={manuals.nodes} />
      </section>
      {/* Kits */}
      <section className={`${styles.kit__section}`}>
        <h2 className={`${styles.section__header}`}>Kits</h2>
        <DownloadList data={kitsSlice1} />
        <DownloadList data={kitsSlice2} />
      </section>

      {/* Row -  Facials */}
      <section title="Facials" className={`${styles.facial__section}`}>
        <h2 className={styles.section__header}>Facial Protocols</h2>
        <DownloadList data={facialsA.nodes} />
        <div className={styles.facial__download_list_image_container}>
          <DownloadList
            data={facialsB.nodes}
            className={styles.facial__download_list}
          />
          <Img
            className={styles.facial__bowl_image}
            fluid={bowl[0].data.image.localFiles[0].childImageSharp.fluid}
            alt="Show a hand holding a bowl containing a fan brush and facial product."
          />
        </div>
      </section>

      {/* Orders */}
      <section className={`${styles.order__specifics}`}>
        <h2 className={`${styles.section__header}`}>Order Specifics</h2>
        <div
          className={`${styles.order__specifics__wrapper} ${styles.section__content__wrapper}`}
        >
          <ul data-bullet-list className={styles.order__specifics__list}>
            <li className={styles.order__specifics__item}>
              <p className={styles.order__specifics__item__details}>
                $100 minimum order (Exception - Best Sellers Travel Size Kit)
              </p>
            </li>
            <li className={styles.order__specifics__item}>
              <p className={styles.order__specifics__item__details}>
                Orders shipped via UPS within 1-3 business days
              </p>
            </li>
            <li className={styles.order__specifics__item}>
              <p className={styles.order__specifics__item__details}>
                MC, Visa, American Express, and Discover are accepted
              </p>
            </li>
          </ul>
        </div>
      </section>
    </article>
  )
}

export default Profile
