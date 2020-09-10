import React from "react"
import {graphql} from 'gatsby'

import PageModel from "../components/PageModel"
import RaveReviewList from "../components/RaveReviews/RaveReviewList"

import styled from "styled-components"

const RaveReviews = ({data}) => {
  return (
    <PageModel title="Rave Reviews">
      <RaveReviewsWrapper>
        <h1 className="poppy txt-center">Rave Reviews!</h1>
        <RaveReviewList reviews={data.allAirtable.reviews}/>
      </RaveReviewsWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    allAirtable(filter: {table: {eq: "RaveReviews"}}, sort: {fields: data___mcc_id, order: ASC}) {
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
  & div{ 
    margin-top: 15px;
    text-align: justify;
    padding: 0 3px 0;
  }
`
export default RaveReviews
