import * as React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'

import { GlobalLayout, Seo } from '../components'

const AboutPage = ({ data }) => {
  return (
    <GlobalLayout>
      <StyledSection>
        <div className="clearfix">
          <div className="indent">
            <h1>Our Philosophy</h1>
            <p>
              is simple, to provide healthy, effective skincare with exemplary
              customer service. We believe in treating our clients' success as
              important as our own and value a true partnership with everyone we
              have the pleasure to work with. We are a very accessible company
              and pride ourselves in working with businesses of all sizes.
            </p>
          </div>
          <GatsbyImage
            image={data.file.childImageSharp.gatsbyImageData}
            alt="Portrait of Michele Corley, owner of Michele Corley Clinical Skin Care"
          />

          <p>
            Michele's journey in creating Michele Corley Clinical Skin Care
            began in 2002 when she wanted to fulfill what she perceived as a
            need in the professional skincare industry to offer great products
            and excellent service to back them up.
          </p>

          <p>
            Each Michele Corley Clinical Skin Care product is crafted with care
            and consideration for the health and well-being of the skin.
          </p>
          <p>
            Our ingredients must come from the most natural sources available,
            and their effectiveness is proven.
          </p>

          <p>
            We strongly believe you and your clients will love the results
            you'll see and feel from using Michele Corley Clinical Skin Care and
            enjoy the excellence in the care you receive.
          </p>
          <p className="pb0">Many thanks.</p>
          <h2 className="italic poppy">The Michele Corley Team</h2>
        </div>
      </StyledSection>
    </GlobalLayout>
  )
}

const StyledSection = styled.section`
  & {
    div.clearfix{
      overflow: auto;
    }
    h2 {
      font-size: 1.6rem;
    }
    .indent {
      margin-block: 2rem 0;
      h1 {
        text-align: left;
        float: left;
        line-height: normal;
        margin-block: 0;
        white-space: break-spaces;
      }
      > p {
        text-indent: 1rem;
        padding-block-start: 1.6rem;
      }
    }
    .gatsby-image-wrapper {
      float: right;
      margin-inline-start: 0.5rem;
      margin-block-end: 1rem;
    }

    @media screen and (max-width: 576px) {
      .gatsby-image-wrapper {
        margin-inline-start: 0;
      }
      .indent {
        h1 {
          float: none;
          text-align: center;
        }
        > p {
          text-indent: 4rem;
        }
      }
    }
  }
`
export const query = graphql`
  {
    file(
      relativePath: {
        eq: "2025/michele-in-blue.jpg"
      }
    ) {
      childImageSharp {
        gatsbyImageData(
          placeholder: BLURRED
          width: 400
          quality: 100
          aspectRatio: 1
          transformOptions: { cropFocus: CENTER }
        )
      }
    }
  }
`
export default AboutPage

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return (
    <Seo
      title="About Michele Corley Clinical Skin Care"
      pathname={pathname}
      description="Discover Michele Corley Clinical Skin Care, where we offer premium skincare products and education for professionals working with all skin types. Elevate your clients' skincare routines today!"
      noindex={true}
    />
  )
}
