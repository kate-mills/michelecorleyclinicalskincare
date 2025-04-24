import React from 'react'

import { GatsbyImage } from 'gatsby-plugin-image'

import DownloadList from './DownloadList'
import styled from 'styled-components'

import { graphql, useStaticQuery } from 'gatsby'

const Manuals = () => {
  const data = useStaticQuery(query)
  const { manuals, media } = data
  const esty = media.nodes.filter(({ data }) => data.name === 'esty')

  return (
    <StyledArticle>
      <section className={'manuals'} id="manuals">
        <div className={'sectionFlexItems'}>
          <GatsbyImage
            alt=""
            className={'estheticianImg'}
            image={
              esty[0].data.image.localFiles[0].childImageSharp.gatsbyImageData
            }
          />
          <DownloadList data={manuals.nodes.slice(0, 4)} />
        </div>
        <div className={'sectionFlexSingle'}>
          <DownloadList data={manuals.nodes.slice(4)} />
        </div>
      </section>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  & {
    .manuals {
      width: 100%;
      margin: 0 auto 1rem;
      text-align: center;

      .sectionFlexItems {
        align-items: flex-start;
        align-content: flex-start;
        display: flex;
        flex-flow: row wrap;
        justify-content: center;

        > div {
          width: 50%;
        }
        .estheticianImg {
          margin-inline: auto;
        }
      }
      .sectionFlexSingle {
        display: flex;
        > div > div {
          width: 50%;
        }
      }
      @media screen and (max-width: 719px) {
        .estheticianImg {
          display: none;
        }
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

const query = graphql`
  {
    manuals: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { ne: true } } }
      sort: { data: { orderId: ASC } }
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
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`

export default Manuals
