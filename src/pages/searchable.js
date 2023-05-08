import React from 'react'
import { Helmet } from 'react-helmet'
import { MobileNavbar, DesktopNavbar } from '../components/Navbar'
import styled from 'styled-components'

const ProOrders = () => {
  return (
    <>
      <Helmet>
        <script
          async
          defer
          src="https://cse.google.com/cse.js?cx=1094a048bf48646e3"
        />
      </Helmet>
      <Wrapper>
        <div id="content">
          <main>
            <MobileNavbar />
            <DesktopNavbar tabIndex={0} />
            <section id="searchable">
              <div className="gcse-searchbox"></div>
              <div className="gcse-searchresults"></div>
            </section>
          </main>
        </div>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.section`
  & {
    max-width: 80%;
    margin: 0 auto;
    margin-block-start: 5%;
    #searchable{
      margin-block-start: 1rem;
    }
    .gsc-results-wrapper-overlay.gsc-results-wrapper-visible {
      top: unset;
      left: unset;
      transform:translateX(-13px);
      max-height: 70vh;
      width: 62%;
    }
    #content {
      min-height: 90vh;
    }
    .gsc-results-wrapper-overlay {
      position: unset;
    }
    #searchable{
    }
  }
`
export default ProOrders
