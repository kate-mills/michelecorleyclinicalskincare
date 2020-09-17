import React from 'react'

import { graphql } from 'gatsby'
import PageModel from '../components/PageModel'
import ArticleList from '../components/Articles/ArticleList'
import styled from 'styled-components'

const Press2 = ({ data }) => {
  return (
    <PageModel title="Articles" centeredTitle>
      <PressWrapper>
        <ArticleList articleList={data.allAirtable.articleList} />
      </PressWrapper>
    </PageModel>
  )
}

export const query = graphql`
  {
    allAirtable(
      filter: { table: { eq: "MccArticles" } }
      sort: { fields: data___mcc_id, order: DESC }
    ) {
      articleList: nodes {
        id
        data {
          mcc_id
          summary
          link
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
export default Press2
