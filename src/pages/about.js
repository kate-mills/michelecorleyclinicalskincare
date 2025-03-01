import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GlobalLayout } from '../components'

const About = ({ data }) => {
  return (
    <GlobalLayout>
      <AboutWrapper>
        <div className="col-1">
          <h1>Our Philosophy</h1>
          <p>
            is simple, to provide healthy, effective skincare with exemplary
            customer service. We believe in treating our clients' success as
            important as our own and value a true partnership with everyone we
            have the pleasure to work with. We are a very accessible company and
            pride ourselves in working with businesses of all sizes.
          </p>
          <p>
            Michele's journey in creating Michele Corley Clinical Skin Care
            began in 2002 when she wanted to fulfill what she perceived as a
            need in the professional skincare industry to offer great products
            and excellent service to back them up.
          </p>
          <p>
            Each Michele Corley Clinical Skin Care product is crafted with care
            and consideration for the health and well-being of the skin. Our
            ingredients must come from the most natural sources available, and
            their effectiveness is proven.
          </p>
          <p>
            We strongly believe you and your clients will love the results
            you'll see and feel from using Michele Corley Clinical Skin Care and
            enjoy the excellence in the care you receive.
          </p>
          <p>Many thanks.</p>
          <h2 className="italic">The Michele Corley Team</h2>
        </div>
        <div className="col-2">
          <h2>
            Meet
            <br />
            Michele Corley
          </h2>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Portrait of Michele Corley in a red floral blouse."
          />
          <p>
            Michele is a licensed esthetician and creative visionary behind
            every Michele Corley Clinical Skincare product. She is deeply
            committed to educating herself first, so she can then be a resource
            to support her clients' success. Her passion and drive to create the
            best possible experience for her clients shines through each Michele
            Corley Clinical Skincare Product and every client interaction.
          </p>
          <p>
            Michele studied with one of the foremost cosmetic chemistry
            authorities in the professional skincare industry, and has advanced
            knowledge of skin aging, acne conditions and rosecea.
          </p>
        </div>
      </AboutWrapper>
    </GlobalLayout>
  )
}

const AboutWrapper = styled.section`
  & {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin: 0 auto;
    white-space: initial;

    & .col-1 {
      & h1 {
        margin-block: 20px;
        text-align: left;
      }
      & p {
        padding-left: 40px;
        padding-right: 40px;
        text-align: left;
        font-size: 16px;
        white-space: pre-line;
        &:last-of-type {
          padding-bottom: 0;
        }
      }

      & h2.italic {
        color: var(--poppy);
        font-size: 1.8rem;
        font-style: italic;
        letter-spacing: -1.5px;
        padding-left: 10%;
        text-align: left;
      }
    }

    & .col-2 {
      align-items: center;
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 auto;
      padding: 0 1.5em 0;

      & .gatsby-image-wrapper {
        width: 65%;
      }
      & h2 {
        text-align: center;
        white-space: break-spaces;
        margin-top: 40px;
      }
      & p {
        margin: 0 auto;
        font-size: 13px !important;
        line-height: 27px;
        padding: 1em 2em 0;
      }
    }

    @media (max-width: 739px) {
      flex-direction: column;
    }
  }
`
export const query = graphql`
  {
    file(relativePath: { eq: "Michele_Corley.jpg" }) {
      childImageSharp {
        gatsbyImageData(placeholder: BLURRED)
      }
    }
  }
`
export default About
