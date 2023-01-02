import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/layout'
import RaveReviewList from '../components/RaveReviews'

import styled from 'styled-components'

const RaveReviews = ({ data }) => {
  return (
    <Layout title="Rave Reviews">
      <h1>Rave Reviews</h1>
      <RaveReviewsWrapper>
        <RaveReviewList reviews={data.allAirtable.reviews} />
      </RaveReviewsWrapper>
    </Layout>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "RaveReviews" } }
      sort: { fields: data___mcc_id, order: ASC }
    ) {
      reviews: nodes {
        id
        data {
          review
          signature
        }
      }
    }
  }
`
const RaveReviewsWrapper = styled.section`
  & {
    margin: 5px auto;
    box-sizing: border-box;
  }
  & div {
    margin-top: 15px;
    text-align: justify;
    padding: 0 3px 0;
  }
`
export default RaveReviews
