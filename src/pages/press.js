import React from 'react'
import { SpaLocatorFixedLink } from '../components/SpaLocator'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import PressList from '../components/Press/PressList'
import styled from 'styled-components'

const Press = ({ data }) => {

  return (
    <Layout seoTitle="Products In The Press" title="in the Press" description="Award-winning professional skincare products for dry and oily skin types to sensitive, sun-damaged and acne-prone skin exclusively sold through licensed skincare professionals.">
    <SpaLocatorFixedLink/>
    <h1>In The Press</h1>
      <PressWrapper>
        <PressList pressList={data.allAirtable.pressList} />
      </PressWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "Press" } }
      sort: { fields: data___sortOrder, order: DESC }
    ) {
      pressList: nodes {
        id
        data {
          sortOrder
          mcc_id
          title
          summary
          image {
            localFiles {
              childImageSharp {
                fluid(toFormat: WEBP) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          link
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
