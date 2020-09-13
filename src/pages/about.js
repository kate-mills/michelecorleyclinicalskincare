import React from 'react'

import styled from 'styled-components'
import { screen } from '../css/js/media-functions'
import PageModel from '../components/PageModel'

import { graphql } from 'gatsby'
import Image from 'gatsby-image'

const About = ({ data }) => {
  return (
    <PageModel
      title="About"
      description="Each Michele Corley Clinical Skincare product is crafted with care and consideration to the health and well being of the skin. The ingredients I choose must come from the most natural sources available, and their effectiveness proven."
    >
      <AboutWrapper>
        <div className="col-1" style={{ margin: '0 auto' }}>
          <h1>My Philosophy</h1>
          <p className="text">
            is simple, to provide healthy, effective skincare with exemplary
            customer service. I believe in treating my clients' success as
            important as my own, and value a true partnership with everyone I
            have the pleasure to work with.
          </p>
          <p className="text">
            My journey in creating Michele Corley Clinical Skincare began in
            2002 when I wanted to fulfill what I saw as a need in the
            professional skincare industry to offer not only great products, but
            the great service to back them up. So many times busy salon owners
            and estheticians get lost in the shuffle of big corporate skincare
            companies, having to place large opening orders with huge minimums,
            and fighting for good customer service. I wanted to change all that,
            by offering completely affordable premium professional skincare with
            accessible customer service.
          </p>
          <p className="text">
            Each Michele Corley Clinical Skincare product is crafted with care
            and consideration to the health and well being of the skin. The
            ingredients I choose must come from the most natural sources
            available, and their effectiveness proven. I strongly believe that
            you and your clients will love the results you'll see and feel from
            using Michele Corley Clinical Skincare, and enjoy the excellence in
            care you receive.
          </p>
          <p className="text">Many thanks.</p>
          <h2 className="italic poppy">Michele</h2>
        </div>
        <div className="col-2" style={{ margin: '0 auto' }}>
          <h2>
            Meet
            <br />
            Michele Corley
          </h2>
          <Image
            fluid={data.allFile.nodes[0].childImageSharp.fluid}
            alt="Portrait of Michele Corley in a red floral blouse."
          />
          <p className="tiny">
            Michele is a licensed esthetician and creative visionary behind
            every Michele Corley Clinical Skincare product. She is deeply
            committed to educating herself first, so she can then be a resource
            to support her clients' success. Her passion and drive to create the
            best possible experience for her clients shines through each Michele
            Corley Clinical Skincare Product and every client interaction.
          </p>
          <p className="tiny">
            Michele studied with one of the foremost cosmetic chemistry
            authorities in the professional skincare industry, and has advanced
            knowledge of skin aging, acne conditions and rosecea.
          </p>
        </div>
      </AboutWrapper>
    </PageModel>
  )
}
const AboutWrapper = styled.section`
  & {
    align-items: center;
    display: flex;
    margin: 0 auto !important;
    white-space: initial;
  }
  & h1 {
    text-align: left;
    margin: 20px;
  }
  & h2 {
    font-style: normal;
    text-align: center;
    white-space: break-spaces;
    margin-top: 40px;
  }
  & .italic {
    font-style: italic;
    text-align: left;
    padding-left: 10%;
    margin-top: unset;
  }
  & .tiny {
    margin: 0 auto;
    font-size: 13px !important;
    line-height: 27px;
    padding: 1em 2em 0;
  }
  & .text {
    text-align: left;
    color: var(--mainBlack);
    font-size: 16px;
    white-space: pre-line;
  }
  & .text:last-of-type {
    padding-bottom: 0;
  }

  & .col-1 .text {
    padding-left: 40px;
    padding-right: 40px;
  }

  & .col-2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 1.5em 0;
  }

  ${screen.minmax.narrow` 
    & {
      flex-direction: column;
    }
    & .col-1{ width: 100%; }
    & .col-2{ width: 100%; }
    & .col-2 .gatsby-image-wrapper{ width: 75%; }
 `}
  ${screen.minmax.wide`
    & {
      flex-direction: row;
      align-items: flex-start;
      justify-content: space-evenly;
    }
    & .col-1,
    & .col-2 { 
      width: 50%;
    }
    & .col-2 .gatsby-image-wrapper{ width: 50%; }

  `}
`
export const query = graphql`
  {
    allFile(filter: { relativePath: { eq: "Michele_Corley.jpg" } }) {
      nodes {
        childImageSharp {
          fluid(maxWidth: 446) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
export default About
