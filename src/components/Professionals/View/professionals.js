import React from 'react'
import SEO from '../../../components/FullSeo'

import Img from 'gatsby-image'

import styles from './professionals.module.css'

import { graphql, useStaticQuery } from 'gatsby'

const query = graphql`
  {
    manuals: allAirtable(
      filter: { table: { eq: "Manuals" } }
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
  const { manuals, media, facialsA, facialsB } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')
  const bowl = media.nodes.filter(({ data }) => data.name === 'bowl')

  return (
    <article>
      <SEO
        title="Education"
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <h1 className="poppy txt-center">Education</h1>

      {/* Row -  Manuals */}
      <section className={styles.manuals__row}>
        <Img
          className={`${styles.manuals__col} ${styles.left}`}
          fluid={esty[0].data.image.localFiles[0].childImageSharp.fluid}
        />
        <div className={`${styles.manuals__col}  ${styles.right}`}>
          {manuals.nodes.map(({ id, data }) => {
            return (
              <div key={id} className={styles.manual__item}>
                <h3 className={styles.item__name}>{data.name}</h3>
                <p className={styles.item__notes}>{data.notes}</p>
                <a
                  className={`${styles.section__download} btn`}
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
      </section>

      {/* Row -  Orders */}
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

      {/* Row -  Facials */}
      <section
        title="Facials"
        className={`${styles.section} ${styles.section__facials}`}
      >
        <h2 className={styles.section__header}>Facial Protocols</h2>
        <div className={`${styles.section__content__wrapper}`}>
          <div className={styles.facial__top__container}>
            {facialsA.nodes.map(({ id, data }) => {
              return (
                <div key={id} className={styles.facialA__item}>
                  <h3 className={styles.item__name}>{data.name}</h3>
                  <a
                    className={`${styles.section__download} btn`}
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
                className={styles.section__facials_img}
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
                    <h3 className={styles.item__name}>{data.name}</h3>
                    <a
                      className={`${styles.section__download} btn`}
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
        </div>
      </section>
    </article>
  )
}

export default Profile
