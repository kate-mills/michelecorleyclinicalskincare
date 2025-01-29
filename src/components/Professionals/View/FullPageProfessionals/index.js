import React from 'react'
import SEO from '../../../../components/FullSeo'

import Img from 'gatsby-image'

import styles from './index.module.css'
import DownloadList from '../downloadList'

import { graphql, useStaticQuery } from 'gatsby'
//import ProLayout from './ProLayout'
import ProVideo from '../proVideo'

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
        title="Professional Education"
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <h1 className="poppy txt-center">Education</h1>

      <p className="txt-center">
        Explore professional PDF and video resources below to enhance your
        Michele Corley Clinical Skin Care product knowledge.
      </p>
      {/* Manuals */}
      <section className={styles.section} id="manuals">
        <h2 className={'poppy'}>Manuals</h2>
        <div className={styles.sectionFlexItems}>
          <Img
            className={styles.estheticianImg}
            fluid={esty[0].data.image.localFiles[0].childImageSharp.fluid}
          />
          <DownloadList data={manuals.nodes.slice(0, 4)}/>
        </div>
        <div className={styles.sectionFlexSingle}>
          <DownloadList data={manuals.nodes.slice(4)}/>
        </div>
      </section>

      {/* Kits */}
      <section className={styles.section} id="kits">
        <h2 className={'poppy'}>Kits</h2>
        <div className={styles.sectionFlexItems}>
          <DownloadList data={kitsSlice1} />
          <DownloadList data={kitsSlice2} />
        </div>
      </section>

      {/* Row -  Facials */}
      <section title="Facials" className={styles.section} id="facials">
        <h2 className={'poppy'}>Facial Protocols</h2>
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

      {/* Orders */}
      <section className={styles.section} id="orders">
        <h2 className={'poppy'}>Order Specifics</h2>
        <div className={styles.sectionFlexItems}>
          <ul data-bullet-list className={styles.order__specifics__list}>
            <li className={styles.order__specifics__item}>
              <p className={styles.order__specifics__item__details}>
                Please note we have a $150 minimum order.
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

      {/* Row - Virtual Classes*/}
      <section className={styles.section} id="virtual-classes">
        <h2 className={'poppy'}>Virtual Classes</h2>
        <div>
          <ProVideo
            videoId="1018659107"
            title="Acne Safe Best Sellers Zoom Training"
          />
          <ProVideo
            videoId="1036018318"
            title="All Acne Safe Products Zoom Training"
          />
          <ProVideo
            videoId="1035709332"
            title="All Acne Safe Products Zoom Training"
          />
        </div>
      </section>
    </article>
  )
}

export default Profile
