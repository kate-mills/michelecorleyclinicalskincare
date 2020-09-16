import React from 'react'

import { graphql } from 'gatsby'
import PageModel from '../components/PageModel'
import PressList from '../components/Press/PressList'
import styled from 'styled-components'

const Press = ({ data }) => {
  return (
    <PageModel title="Press" centeredTitle>
      <PressWrapper>
        <PressList pressList={data.allAirtable.pressList} />
      </PressWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Press" } }
      sort: { fields: data___mcc_id, order: ASC }
    ) {
      pressList: nodes {
        id
        data {
          mcc_id
          summary
          image {
            localFiles {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          link
          activeLink
          relativeLink
        }
      }
    }
  }
`
const PressWrapper = styled.section`
  & {
    margin: 0 auto;
  }
  & > section {
    margin: 0 auto;
  }
`
export default Press
