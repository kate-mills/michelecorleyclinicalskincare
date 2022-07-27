import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import PageModel from '../components/PageModel'
import styled from 'styled-components'

const Whymc = ({
  data: {
    files: { nodes },
  },
}) => {
  const facialImg = nodes[0]
  return (
    <PageModel
      seoTitle="Why Estheticians Choose Us"
      title="Why Choose Michele Corley Clinical Skincare?"
      description="What makes Michele Corley Clinical Skin Care different in a sea of other brands?  Our commitment to you and your success by offering the best possible products for your clients; with the cleanest, most efficacious ingredients and absolute accessibility whenever you need us."
    centeredTitle>

      <WhyWrapper>
        <div className="row">
          <div className="col-left">
            <Image
              className="mobile-img"
              fluid={facialImg.childImageSharp.fluid}
              alt="Woman receiving a relaxing facial."
              style={{ maxWidth: '400px' }}
            />
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
          <div className="col-right">
            <Image
              className="desktop-img"
              fluid={facialImg.childImageSharp.fluid}
              alt="Woman receiving a relaxing facial."
              style={{ maxWidth: '447px', maxHeight: '352px' }}
            />
          </div>
          <p className="p2">
            We stand behind our commitment to outstanding customer service in a
            big way. No long wait times for orders, low minimum purchase
            requirements and the absolute best in product education.
          </p>
        </div>
      </WhyWrapper>
    </PageModel>
  )
}
export const query = graphql`
  {
    files: allFile(filter: { relativePath: { eq: "facial-treatment.jpg" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 447, toFormat: WEBP) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
const WhyWrapper = styled.div`
  & {
    display: flex;
    align-content: center;
    flex-direction: column;
    margin: 0 auto;
    justify-content: space-between;
  }
  & div.row {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 100%;
  }
  & p.p1 {
    padding-bottom: 10px;
  }
  & p.p2 {
    padding-bottom: 0;
  }

  & ul[data-bullet-list] {
    margin: 0 0 15px 60px;
  }
  @media (max-width: 767px) {
    & .col-right {
      display: none;
    }
    & .col-left {
      width: 100%;
    }
    & div.mobile-img {
      width: 85%;
      margin: 0 auto;
    }
    & ul[data-bullet-list] {
      margin-left: 40px;
    }
  }
  @media (min-width: 768px) {
    & div.mobile-img {
      display: none;
    }
    & .col-left {
      width: 49%;
    }
    & .col-right {
      width: 50%;
    }
  }
`
export default Whymc
