import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import {SpaLocator} from '../components/SpaLocator'



const SpaLocatorPage = () => {
  return (
    <Layout title="Spa Locator">
      <h1 style={{marginBottom: '0'}}>Spa Locator</h1>
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
    min-height: 100vh;
    > h2 {
      text-align: center;
      font-size: .8125rem;
      margin: 0;
    }
  }
`
export default SpaLocatorPage
