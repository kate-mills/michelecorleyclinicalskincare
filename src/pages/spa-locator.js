import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { SpaLocator } from '../components/SpaLocator'

const SpaLocatorPage = ({data}) => {
  return (
    <Layout title="Spa Locator" image={data?.file?.publicURL}>
      <SpaLocatorPageWrapper>
        <h1 style={{ marginBottom: '0'}}>In Spas Near You</h1>
        <h2 className={'center'}>Find Our Products At These Professional Locations</h2>
        <SpaLocator />
      </SpaLocatorPageWrapper>
    </Layout>
  )
}
const SpaLocatorPageWrapper = styled.section`
  & {
    width: 100%;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    > h1{
      font-family: mr-eaves-modern,sans-serif;
      font-weight: 400;
      @media(min-width: 500px){
        font-family: var(--mainFont);
      }
    }
    > h2 {
      text-align: center;
      font-size: 0.8125rem;
      margin: 0;
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
