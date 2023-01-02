import React from 'react'

import { graphql } from 'gatsby'
import Layout from '../components/layout'
import ArticleList from '../components/Articles/ArticleList'
import styled from 'styled-components'

const Articles = ({ data }) => {
  return (
    <Layout title="Articles">
    <h1>Articles</h1>
      <PressWrapper>
        <ArticleList articleList={data.allAirtable.articleList} />
      </PressWrapper>
    </Layout>
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
          title
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
export default Articles 
