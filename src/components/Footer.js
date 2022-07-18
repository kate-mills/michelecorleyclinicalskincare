import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import socialLinks from '../constants/social'
import Email from '../components/Email'

import { ConstantContactInfo } from '../constants/contact-info'

const query = graphql`
  {
    infinity: file(relativePath: { eq: "infinity.png" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Footer = props => {
  const { infinity } = useStaticQuery(query)
  return (
    <footer className={props.className}>
      <Image
        className="infinity-image"
        fluid={infinity.childImageSharp.fluid}
        alt="Infinity Symbol"
      />
      <p className="follow-us-on">
        Follow Us On<span className="sr-only">{` Social Media`}</span>
      </p>
      <ul id="footer-icons">
        {socialLinks.map((item, index) => {
          return (
            <li className="icon" key={index}>
              <a
                title={item.label}
                href={item.href}
                aria-label={item.label}
                className={item.class}
                style={item.style}
              >
                <span>{item.icon}</span>
                <span className="sr-only">{` ${item.label}`}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="text-wrap">
        <div className="phone-email-text">
          <span className="phone">{props.Telephone.phone}</span> {` `}{' '}
          <span className="middot">&middot;</span> {` `}
          <Email className={`email ${props.className}`} />
        </div>
        <p className="address sm-text">
          Michele Corley Company, LLC {props.Address.street}{' '}
          {props.Address.suite} {props.Address.city} {props.Address.state}{' '}
          {props.Address.zip}
        </p>
        <p className="copyright sm-text">
          All rights reserved. &copy;{new Date().getFullYear()}
        </p>{' '}
      </div>
    </footer>
  )
}
Footer.defaultProps = ConstantContactInfo

const FooterWrapper = styled(Footer)`
  & {
    padding: 40px;
    text-align: center;

    .gatsby-image-wrapper.infinity-image {
      margin: 20px auto;
      max-width: 500px;
    }
    ul#footer-icons {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      font-size: 1.8rem;
      justify-content: space-around;
      margin-bottom: 1.5rem;
      .icon {
        padding: 0.7rem;
      }
    }
    div.text-wrap .phone-email-text {
      .phone,
      .email {
        padding: 0.09rem;
        letter-spacing: -0.07rem;
      }
    }
    div.text-wrap .address,
    div.text-wrap .copyright {
      font-weight: 300;
      font-size: 13px;
    }
    div.text-wrap .address {
      padding: 5px;
    }
  }
  @media (max-width: 700px) {
    & {
      padding: 30px;
      .middot {
        display: none;
      }
    }
  }
`
export default FooterWrapper
