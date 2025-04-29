import React from 'react'

import styled from 'styled-components'
import { GlobalLayout, SpaFndr, Seo } from '../components'

const SpaFndrPage = ({ data }) => {
  return (
    <GlobalLayout showSpaFndrLnk={false}>
      <SpaFndrPageWrapper>
        <h1>Get Your Hands On Our Products</h1>
        <h2 className={'center'}>
          Please enter your city, state, or zip code in the search bar below to
          find the nearest spas and estheticians carrying our products.
        </h2>
        <SpaFndr />
      </SpaFndrPageWrapper>
    </GlobalLayout>
  )
}
const SpaFndrPageWrapper = styled.section`
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
export default SpaFndrPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo title="Find Our Products In Spas Near You" description="Our Spa Locator helps you quickly locate Michele Corley Clinical Skin Care products at nearby aestheticians and spas." pathname={pathname}/>
}
