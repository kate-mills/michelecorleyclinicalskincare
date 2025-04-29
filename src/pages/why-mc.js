import * as React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

import { GlobalLayout, Seo } from '../components'

export default function WhyMCPage({
  data: {
    file: { childImageSharp },
  },
}) {
  return (
    <GlobalLayout>
      <h1>Why Choose Us?</h1>
      <StyledSection>
        <div className="row">
          <div className="col-txt">
            <ul data-bullet-list className="why-mc">
              <li>
                <p>Premium, natural, professional skincare</p>
              </li>
              <li>
                <p>Superior results</p>
              </li>
              <li>
                <p>Exemplary customer service</p>
              </li>
              <li>
                <p>Fast delivery</p>
              </li>
              <li>
                <p>Low minimum purchase</p>
              </li>
              <li>
                <p>Retail and back bar</p>
              </li>
              <li>
                <p>Only sold through skincare professionals</p>
              </li>
            </ul>
            <p className="p1">
              What makes Michele Corley Clinical Skin Care different in a sea of
              other brands? Our commitment to you and your success by offering
              the best possible products for your clients; with the cleanest,
              most efficacious ingredients and absolute accessibility whenever
              you need us.
            </p>
          </div>
          <div className="col-img">
            <GatsbyImage
              image={childImageSharp.gatsbyImageData}
              alt="Woman receiving a relaxing facial."
            />
          </div>
          <p className="p2">
            We stand behind our commitment to outstanding customer service in a
            big way. No long wait times for orders, low minimum purchase
            requirements and the absolute best in product education.
          </p>
        </div>
      </StyledSection>
    </GlobalLayout>
  )
}

const StyledSection = styled.section`
  & {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
    & div.row {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
    }
    & div.col-txt {
      width: 100%;
    }
    & p.p1 {
      padding-bottom: 10px;
    }
    & p.p2 {
      padding-bottom: 0;
    }
    & ul[data-bullet-list] {
      margin: 0 0 15px 40px;
    }

    @media (max-width: 767px) {
      & div.col-img {
        display: none;
      }
    }
    @media (min-width: 768px) {
      & div.col-img {
        width: 50%;
      }
      & div.col-txt {
        width: 50%;
      }
      & ul[data-bullet-list] {
        margin-left: 60px;
      }
    }
  }
`

export const query = graphql`
  {
    file(relativePath: { eq: "facial-treatment.jpg" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

export const Head = ({location:{pathname}, params, data, pageContext})=> {
  const {file:{childImageSharp:{gatsbyImageData:{images:{fallback:{src}}}}}} = data
  return <Seo
    title="Why Choose Michele Corley Clinical Skin Care?"
    description="Our commitment to you and your success is to offer the best possible products for your clients, with the cleanest, most efficacious ingredients and absolute accessibility whenever you need us."
    image={src}
    pathname={pathname}
  />
}
