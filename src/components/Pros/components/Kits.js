import React from 'react'

import DownloadList from './DownloadList'
import { graphql, useStaticQuery } from 'gatsby'
import styled from 'styled-components'

const Profile = () => {
  const data = useStaticQuery(query)
  const { kits } = data
  let len = kits.nodes.length
  const kitsSlice1 = kits.nodes.slice(0, len / 2)
  const kitsSlice2 = kits.nodes.slice(len / 2)
  return (
    <StyledArticle>
      <section className={'kits'}>
        <div className={'sectionFlexItems'}>
          {/*
           * 2nd group of kits placed 1st,
           * odd kit will be on left side
           */}
          <DownloadList data={kitsSlice2} />
          <DownloadList data={kitsSlice1} />
        </div>
      </section>
    </StyledArticle>
  )
}

export default Profile

const query = graphql`
  {
    kits: allAirtable(
      filter: { table: { eq: "Manuals" }, data: { isKit: { eq: true } } }
      sort: { data: { orderId: ASC } }
    ) {
      nodes {
        id
        data {
          name
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

const StyledArticle = styled.article`
  & {
    .kits {
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
      }
    }
  }
`
