import React from 'react'

import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { SpaLocator } from '../components/SpaLocator'

const SpaLocatorPage = ({ data }) => {
  return (
    <Layout title="Spa Locator" image={data?.file?.publicURL}>
      <SpaLocatorPageWrapper>
        <h1>Get Your Hands On our products</h1>
        <h2 className={'center'}>
          Some options are below, <span>OR</span> use our search bar to find
          your nearest spa.
        </h2>
        <SpaLocator />
      </SpaLocatorPageWrapper>
    </Layout>
  )
}
const SpaLocatorPageWrapper = styled.section`
  & {
    padding-block-start: 0.5rem;
    > h1 {
      line-height: 1;
      font-weight: 400;
      font-size: 2rem;
      @media (min-width: 500px) {
        font-family: var(--mainFont);
      }
    }
    > h2 {
      font-size: 0.8125rem;
      margin: 0;
      text-align: center;
      text-transform: none;
      span {
        font-weight: 500;
        text-decoration: underline;
      }
    }
  }
`
export default SpaLocatorPage

export const query = graphql`
  query {
    file(
      relativePath: { eq: "slideshow/cleansers-with-powder-1280x800-blue.jpg" }
    ) {
      publicURL
    }
  }
`
