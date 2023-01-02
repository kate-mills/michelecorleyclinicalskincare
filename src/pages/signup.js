import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SignupForm from '../components/SignupForm'
import ContactInfo from '../components/ContactInformation'

import styled from 'styled-components'

const SignupPage = ({ data }) => {
  return (
    <Layout title="Signup For Specials" seoTitle="Signup For Specials" image={data.seoImg.publicURL}>
      <PageWrapper>
        <div className="flex-col">
          <div className="flex-item-1">
            <div className="signup-info">
              <h1 className="signup-info__title">Join our email list!</h1>
              <p>If you're not getting our specials please signup here.</p>
              <p>Thank you!</p>
            </div>

            <Image
              className="signup-info__img"
              fluid={data.file.childImageSharp.fluid}
              alt="Six Michele Corley retail size cleansers are displayed on a counter with a teaspoon of Ultimate Performance Exfoliating Powder."
              title="Six Michele Corley retail Size Cleansers Displayed With Ultimate Performance Exfoliating Powder"
            />
          </div>
          <div className="flex-item-2">
            <SignupForm tabIndex={0} />
          </div>
        </div>
        <ContactInfo className="desktop" wrapperMaxWidth="50%" />
      </PageWrapper>
    </Layout>
  )
}
const PageWrapper = styled.section`
  & h1 {
    width: 100%;
    padding-left: 10px;
  }

  & .flex-col .flex-item-1 {
    width: 100%;
  }
  & .signup-img-container aside {
    display: none !important;
  }
  & .flex-col .flex-item-1 .signup-img-container {
    margin: 0 auto;
  }
  & .flex-col .flex-item-2 {
    margin: 0 auto;
    width: 100%;
  }
  & aside {
    margin-right: auto;
    margin-left: 0;
  }

  @media (min-width: 767px) {
    & .flex-col {
      align-items: flex-start;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      margin: 0 auto;
    }
    & .flex-col .flex-item-1 p {
      padding: 0 0 1.2em;
    }
    & .signup-info__title {
      color: var(--poppy);
    }
    & .signup-img-container {
    }
    & img {
      margin: 20px auto;
      max-width: 500px;
    }
    & .flex-col .flex-item-1 .page-instructions {
      margin: 0 auto;
      width: 75%;
      text-align: left;
      padding: 0 0 0.1rem;
    }
    & .flex-col .flex-item-1 {
      margin: 0 auto;
      width: 50%;
    }
    & img {
    }
    & .flex-col .flex-item-2 {
      margin: 0 auto;
      width: 40%;
    }
    & aside {
      max-width: 50%;
    }
  }
`

export const query = graphql`
  {
    file(relativePath: { eq: "cleansers-with-overflowing-teaspoon-of-powder.jpg" }) {
      childImageSharp {
        fluid(maxWidth:1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    seoImg:file(relativePath: { eq: "signup.jpg" }) {
      publicURL
    }
  }
`

export default SignupPage
