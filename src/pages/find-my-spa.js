import React from 'react'

import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { FindMySpa } from '../components/SpaLocator'

const SpaLocatorPage = ({ data }) => {
  console.log('data', data)
  return (
    <Layout title="Locate Your spa in our spa-finder app" description="Are you an Esthetician that carries Michele Corley Clinical Skin Care? Search for your spa to make sure you are included in our Spa Finder app." image={data?.file?.publicURL}>
      <SpaLocatorPageWrapper>
        <h1>Is your spa in our Spa-Finder app?</h1>
        <h2 className={'center'}>
         Please enter your spa name in the search bar below.
        </h2>
        <FindMySpa />
      </SpaLocatorPageWrapper>
    </Layout>
  )
}
const SpaLocatorPageWrapper = styled.section`
  & {
    padding-block-start: 0.5rem;
    > h1 {
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
