import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GlobalLayout, Seo } from '../components'

const AboutPage = ({ data }) => {
  return (
    <GlobalLayout>
      <StyledSection>
        <div className="col-1">
          <div className="txt-box lg">
            <h1>Our Philosophy</h1>
            <p>
              is simple, to provide healthy, effective skincare with exemplary
              customer service. We believe in treating our clients' success as
              important as our own and value a true partnership with everyone we
              have the pleasure to work with. We are a very accessible company
              and pride ourselves in working with businesses of all sizes.
            </p>
            <p>
              Michele's journey in creating Michele Corley Clinical Skin Care
              began in 2002 when she wanted to fulfill what she perceived as a
              need in the professional skincare industry to offer great products
              and excellent service to back them up.
            </p>
            <p>
              Each Michele Corley Clinical Skin Care product is crafted with
              care and consideration for the health and well-being of the skin.
              Our ingredients must come from the most natural sources available,
              and their effectiveness is proven.
            </p>
            <p>
              We strongly believe you and your clients will love the results
              you'll see and feel from using Michele Corley Clinical Skin Care
              and enjoy the excellence in the care you receive.
            </p>
            <p>Many thanks.</p>
            <h3 className="italic poppy">The Michele Corley Team</h3>
          </div>
        </div>

        <div className="col-2">
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Portrait of Michele Corley, owner of Michele Corley Clinical Skin Care"
          />
          <div className="txt-box">
            <h2>Meet Michele Corley</h2>
            <p className="sm">
              Michele is a licensed esthetician and creative visionary behind
              every Michele Corley Clinical Skin Care product. She is deeply
              committed to educating herself first, so she can then be a
              resource to support her clients' success. Her passion and drive to
              create the best possible experience for her clients shines through
              each Michele Corley Clinical Skin Care product and every client
              interaction.
            </p>
            <p className="sm">
              Michele studied with one of the foremost cosmetic chemistry
              authorities in the professional skincare industry, and has
              advanced knowledge of skin aging, acne conditions and rosecea.
            </p>
          </div>
        </div>
      </StyledSection>
    </GlobalLayout>
  )
}

const StyledSection = styled.section`
  & {
    align-items: stretch;
    display: flex;
    justify-content: center;
    text-align: center;

    & h2,
    & h3 {
      font-size: 1.6rem;
      letter-spacing: -0.094rem;
    }
    & h3 {
      text-align: left;
    }
    > div {
      div.txt-box {
        & p {
          padding-block-end: 1.4em;
          text-align: justify;
          text-align-last: left;
          &.sm {
            font-size: 0.8125em;
            line-height: 1.5;
          }
        }
      }
      &.col-1 {
        min-width: 60%;
        div.txt-box {
          margin-inline-end: 3rem;
          p:first-of-type {
            text-indent: 5.125rem;
          }
          p:last-of-type {
            padding-block-end: 0;
          }
        }
      }

      &.col-2 {
        margin-block: 2rem 1rem;
        img {
          border-radius: 1rem;
        }
      }
    }

    @media (max-width: 739px) {
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;

      > div {
        &.col-1 {
          div.txt-box {
            margin-inline-end: 0;
          }
        }
      }
    }
  }
`
export const query = graphql`
  {
    file(relativePath: { eq: "2025/michele-corley-1x1.jpg" }) {
      publicURL
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          height: 350
          quality: 100
        )
      }
    }
  }
`
export default AboutPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  const {
    file: { publicURL },
  } = data
  return (
    <Seo
      title="About Michele Corley Clinical Skin Care"
      pathname={pathname}
      description="Discover the philosophy behind Michele Corley Clinical Skin Care and learn more about its founder, Michele Corley. We offer premium skincare products and education tailored for professionals working with diverse skin types. Elevate your clients' skincare routines today!"
      image={publicURL}
    />
  )
}
