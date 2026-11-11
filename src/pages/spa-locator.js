import React from 'react'

import styled from 'styled-components'
import { GlobalLayout, SpaFndr, Seo } from '../components'

const SpaFndrPage = ({ data }) => {
  return (
    <GlobalLayout showSpaFndrLnk={false} showSearch={false}>
      <SpaFndrPageWrapper>
        <div className="txt-center">
          <h1>Find Us In Spas Near You</h1>
          <h2>
            Enter your city, state, or zip code in the search bar below to find the nearest spas and skin care specialists that carry our products.
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
        margin: 0 auto;
        text-transform: none;
        width: 60%;
        @media (max-width: 768px){
          width: 85%;
        }
        @media (max-width: 480px){
          width: 90%;
        }
      }
    }
  }
`
export default SpaFndrPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="Locate Michele Corley Products In Spas Near You"
      description="Our Spa Locator helps you quickly find Michele Corley Clinical Skin Care products at nearby aestheticians and spas."
      pathname={pathname}
      noindex={true}
    />
  )
}
