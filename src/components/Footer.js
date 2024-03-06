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
        className="footer-infinity-image"
        fluid={infinity.childImageSharp.fluid}
        alt="Infinity Symbol"
      />
      <p className="follow-us-on">
        Follow Us On<span className="sr-only">{` Social Media`}</span>
      </p>
      <ul id="footer-icons">
        {socialLinks.map((item, index) => {
          return (
            <li className="footer-list-item-icon" key={index}>
              <a
                title={item.label}
                href={item.href}
                aria-label={item.label}
                className="footer-icon"
              >
                <span aria-hidden="true">{item.icon}</span>
                <span className="sr-only">{` ${item.label}`}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div className="footer-text-wrap">
        <div className="footer-phone-email-text">
          <span className="footer-phone">{props.Telephone.phone}</span> {` `}{' '}
          <span className="footer-middot">&middot;</span> {` `}
          <Email className={`footer-email ${props.className}`} />
        </div>
        <p className="footer-address footer-sm-text">
          Michele Corley Company, LLC {props.Address.street}{' '}
          {props.Address.suite} {props.Address.city} {props.Address.state}{' '}
          {props.Address.zip}
        </p>
        <p className="footer-copyright footer-sm-text">
          All rights reserved. &copy;{new Date().getFullYear()}
        </p>{' '}
      </div>
    </footer>
  )
}
Footer.defaultProps = ConstantContactInfo

const FooterWrapper = styled(Footer)`
  & {
    text-align: center;
    padding-block: 30px;
    .gatsby-image-wrapper.footer-infinity-image {
      margin-block: 0.5rem;
      max-width: 500px;
      padding-inline: 50px;
      margin-inline: auto;
    }
    .follow-us-on {
      padding-bottom: 1rem;
    }
    ul#footer-icons {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      font-size: 1.8rem;
      justify-content: space-around;
      padding-bottom: 1rem;

      .footer-list-item-icon {
        margin: 0.3125rem;
        .footer-icon {
          background: var(--mainWhite);
          line-height: 2;
          padding: 0.3125rem;
          svg {
            color: var(--darkGrey);
          }
        }
      }
    }
    div.footer-text-wrap {
      .footer-phone,
      .footer-email {
        color: var(--mainBlack);
        letter-spacing: 0.03rem;
        padding: 0.09rem;
      }
      .footer-address {
        padding: 0.3125rem;
      }
      .footer-sm-text {
        font-weight: 300;
        font-size: 13px;
      }
    }
  }
`
export default FooterWrapper
