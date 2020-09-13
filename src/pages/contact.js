import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import PageModel from '../components/PageModel'
import ContactForm from '../components/ContactForm'

import ContactInfo from '../components/ContactInformation'

import styled from 'styled-components'

const ContactPage = ({ data }) => {
  return (
    <PageModel title="Contact">
      <PageWrapper>
        <div className="flex-col">
          <div className="flex-item-1">
            <div className="contact-text-container">
              <h1 className="poppy">
                Have a question about Michele Corley Clinical Skin Care
                products?
              </h1>
              <p>
                Please contact us via the submission form or give us a call at
                (707) 637-4997 and we'll get back to you as soon as we can. If
                you are a licensed professional, please include your license
                number.
              </p>
              <p className="indent-p">Thank you!</p>
            </div>
            <div className="contact-img-container">
              <Image fluid={data.file.childImageSharp.fluid} />
              <ContactInfo className="desktop" wrapperMaxWidth="100%" />
            </div>
          </div>
          <div className="flex-item-2">
            <ContactForm tabIndex={0} />
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
  & .flex-col .flex-item-1 .indent-p {
    margin: 0 auto;
    width: 95%;
  }
  & .contact-img-container {
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
    & .contact-img-container aside {
      background: red;
      display: none !important;
    }
    & .flex-col .flex-item-1 .contact-img-container {
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
    file(relativePath: { eq: "contact-img.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
