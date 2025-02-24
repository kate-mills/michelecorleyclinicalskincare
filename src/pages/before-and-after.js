import React from 'react'
import { SpaLocatorFixedLink } from '../components/SpaLocator'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import BeforeAfterList from '../components/BeforeAfter/BeforeAfterList'

import styled from 'styled-components'

const BeforeAfter = ({ data }) => {
  return (
    <Layout
      title="Before & After Photos"
      description="See results achieved by using proper home skincare product daily. Our before and after photos are not retouched and are generally taken with cellular phones.">
    <SpaLocatorFixedLink/>
    <h1>Before & After Photos</h1>
      <BeforeAfterWrapper>
        <p>
          These photos are provided by my dear clients utilizing only Michele
          Corley Clinical Skin Care Products (unless noted). The results were
          achieved by using proper home care product daily and most clients also
          received regular facials. No equipment beyond a steamer and magnifying
          lamp were used. These photos are not retouched and are generally taken
          with cellular phones.
        </p>
        <BeforeAfterList bal={data.allAirtable.bal} />
      </BeforeAfterWrapper>
    </Layout>
  )
}
const BeforeAfterWrapper = styled.section`
  & {
    margin: 0 auto;
    text-align: left;
    box-sizing: border-box;
  }
  & > p {
    padding-bottom: 0;
  }
`
export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "BeforeAfter" } }
      sort: { fields: data___name, order: ASC }
    ) {
      bal: nodes {
        id
        data {
          name
          notes
          media {
            localFiles {
              childImageSharp {
                fluid (quality: 99, toFormat: WEBP){
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
          product_list
          product_heading
        }
      }
    }
  }
`
export default BeforeAfter
