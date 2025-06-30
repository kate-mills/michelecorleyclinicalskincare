import React from 'react'

import styled from 'styled-components'
import { GlobalLayout, SpaFndr, Seo } from '../components'

const SpaFndrPage = ({ data }) => {
  return (
    <GlobalLayout showSpaFndrLnk={false}>
      <SpaFndrPageWrapper>
        <div className="txt-center">
          <h1>Get Your Hands On Our Products</h1>
          <h2>
            Please enter a city, state, or zip code in the search bar below to
            find the nearest spas and estheticians carrying Michele Corley
            products.
          </h2>
        </div>
        <SpaFndr />
      </SpaFndrPageWrapper>
    </GlobalLayout>
  )
}
const SpaFndrPageWrapper = styled.section`
  & {
    div.txt-center {
      h1 {
        font-size: 2rem;
      }
      h2 {
        font-size: 0.8125rem;
      }
    }
  }
`
export default SpaFndrPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Spa Finder - Find Michele Corley Products"
      description="Our Spa Finder helps you quickly locate Michele Corley professionals and products at nearby aestheticians and spas."
      pathname={pathname}
    />
  )
}
