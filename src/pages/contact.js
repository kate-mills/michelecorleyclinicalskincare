import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import ContactForm from '../components/ContactForm'
import {ConstantContactInfo} from '../constants/contact-info'

import ContactInfo from '../components/ContactInformation'

import styled from 'styled-components'

const ContactPage = ({ data }) => {
  const {Telephone: {phone}} = ConstantContactInfo
  return (
    <Layout seoTitle="Contact Us">
      <PageWrapper>
        <div className="flex-col">
          <div className="flex-item-1">
            <div className="contact-text-container">
              <h1>
                Have a question about Michele Corley Clinical Skin Care
                products?
              </h1>
              <p>
                Please contact us via the submission form or give us a call at
    {' '} {phone} {' '} and we'll get back to you as soon as we can. If
                you are a licensed professional, please include your license
                number.
              </p>
              <p className="indent-p">Thank you!</p>
            </div>
            <div className="contact-img-container">
              <Image
                fluid={data.file.childImageSharp.fluid}
                alt="Bright red flowers and spa rocks in water."
                title="Contact Michele Corley Clinical Skin Care"
              />
              <ContactInfo className="desktop" wrapperMaxWidth="100%" />
            </div>
          </div>
          <div className="flex-item-2">
            <ContactForm tabIndex={0} />
          </div>
        </div>
      </PageWrapper>
    </Layout>
  )
}
const PageWrapper = styled.section`
  & h1 {
    text-align: left;
  }
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
    file(relativePath: { eq: "red-flowers.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500, toFormat: WEBP) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default ContactPage
