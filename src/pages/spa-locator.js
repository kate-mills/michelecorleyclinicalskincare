import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '../components/layout'
import { SpaLocator } from '../components/SpaLocator'

const SpaLocatorPage = ({data}) => {
  return (
    <Layout title="Find Our Products Near You" image={data?.file?.publicURL}>
      <h1 style={{ marginBottom: '0' }}>Spa Locator</h1>
      <SpaLocatorPageWrapper>
        <h2 className={'center'}>
          Find Our Products At These Professional Locations
        </h2>
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
