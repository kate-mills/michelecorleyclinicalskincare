import React from 'react'

import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { SpaLocator } from '../components/SpaLocator'

const SpaLocatorPage = ({ data }) => {
  return (
    <Layout title="Locate Our Products in Spas Near You" description="Are you looking for Spas and Estheticians who sell Michele Corley Clinical Skin Care products near you? Find them quickly with our Spa Locator!" image={data?.file?.publicURL}>
      <SpaLocatorPageWrapper>
        <h1>Get Your Hands On Our Products</h1>
        <h2 className={'center'}>
          Please enter your city, state, or zip code in the search bar below to find the nearest spas and estheticians carrying our products.
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
