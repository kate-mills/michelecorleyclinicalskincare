import React from 'react'

import styled from 'styled-components'
import { GlobalLayout, SpaFndr, Seo } from '../components'

const SpaFndrPage = ({ data }) => {
  return (
    <GlobalLayout showSpaFndrLnk={false}>
      <SpaFndrPageWrapper>
        <h1>Find Your Michele Corley Expert</h1>
        <h2 className={'center'}>
          This spa finder allows you to search (by location) for a Michele Corley Professional.
        </h2>
        <h3>
          Please enter a city, state, or zip code in the search bar below to
          find the nearest spas and estheticians carrying Michele Corley products.
        </h3>
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
    > h2{
      font-size: 1rem;
      text-align: center;
      text-transform: none;
    }
    > h3 {
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
  return (
    <Seo
      title="Spa Finder - Find Your Michele Corley Expert"
      description="Our Spa Finder helps you quickly locate Michele Corley Clinical Skin Care professionals and products at nearby aestheticians and spas."
      pathname={pathname}
    />
  )
}
