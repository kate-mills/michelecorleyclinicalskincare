import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {SpaLocator} from '../components/SpaLocator'


const SpaLocatorPage = () => {
  return (
    <Layout title="Store Locator">
      <h1>Store Locator</h1>
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
      padding-bottom: 1rem;
    }
  }
`
export default SpaLocatorPage
