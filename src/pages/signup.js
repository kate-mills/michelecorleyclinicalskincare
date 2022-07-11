import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import PageModel from '../components/PageModel'
import SignupForm from '../components/SignupForm'
import ContactInfo from '../components/ContactInformation'

import styled from 'styled-components'

const SignupPage = ({ data }) => {
  return (
    <PageModel title="Special Signup" seoTitle="Special Signup">
      <PageWrapper>
        <div className="flex-col">
          <div className="flex-item-1">
            <div className="signup-text-container">
              <h1 className="poppy">Signup For Specials</h1>
              <p>If you're not getting our specials please signup here.</p>
              <p>Thank you!</p>
            </div>
            <div className="signup-img-container">
              <Image fluid={data.file.childImageSharp.fluid} alt="Michele Corley retail and travel size Ultra Rich Moisture Cream sitting on stone counter." title="Ultra Rich Moisture Cream Glamour Shot"/>
              <ContactInfo className="desktop" wrapperMaxWidth="100%" />
            </div>
          </div>
          <div className="flex-item-2">
            <SignupForm tabIndex={0} />
          </div>
        </div>
      </PageWrapper>
    </PageModel>
  )
}
const PageWrapper = styled.section`
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
  & .signup-img-container {
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
  & img{
  
  }
  & .flex-col .flex-item-2 {
    margin: 0 auto;
    width: 40%;
  }

  @media (max-width: 767px) {
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
  }
`

export const query = graphql`
  {
    file(relativePath: { eq: "ultra-rich-glamour-shot.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default  SignupPage
