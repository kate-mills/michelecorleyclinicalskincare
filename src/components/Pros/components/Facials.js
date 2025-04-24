import React from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'

import DownloadList from './DownloadList'
import styled from 'styled-components'

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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
    facialsA: allAirtable(
      filter: { table: { eq: "Facials" } }
      limit: 4
      sort: { data: { name: ASC } }
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
      sort: { data: { name: ASC } }
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
    <StyledArticle>
      <section title="Facials" className={'section'}>
        <div className={'sectionFlexItems'}>
          <div>
            <DownloadList data={facialsA.nodes} />
          </div>
          <div>
            <DownloadList data={facialsB.nodes} />
            <GatsbyImage
              image={
                bowl[0].data.image.localFiles[0].childImageSharp.gatsbyImageData
              }
              alt="Hand holding a bowl containing a fan brush and facial product."
              className={'facialBowlImg'}
            />
          </div>
        </div>
      </section>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  & {
    .section {
      width: 100%;
      margin: 0 auto 1rem;
      text-align: center;

      .sectionFlexItems {
        align-items: flex-start;
        align-content: flex-start;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        /* download list */
        > div {
          width: 50%;
        }
        .facialBowlImg {
          margin-inline: auto;
          max-width: 252px;
        }
      }
      .sectionFlexSingle {
        display: flex;
        /* individual download */
        > div > div {
          width: 50%;
        }
      }

      @media screen and (max-width: 719px) {
        .sectionFlexItems {
          /* download list */
          > div {
            width: 100%;
          }
        }
        .sectionFlexSingle {
          /* individual download */
          > div > div {
            width: 100%;
          }
        }
      }
    }
  }
`

export default Profile
