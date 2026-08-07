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
          <DownloadList data={manuals.nodes.slice(0, 3)} />
        </div>
        <div className={'sectionFlexSingle'}>
          <DownloadList data={manuals.nodes.slice(3, manuals.nodes.length)} />
        </div>
      </section>
    </StyledArticle>
  )
}

const StyledArticle = styled.article`
  & {
    .manuals {
      .sectionFlexItems {
        align-items: flex-start;
        align-content: flex-start;
        display: flex;
        .estheticianImg {
          margin-inline: auto;
        }
      }
      /* lower list on page */
      .sectionFlexSingle {
        display: flex;
        margin-block: 1rem 0;
      }
      @media screen and (max-width: 719px) {
        .estheticianImg {
          display: none;
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
