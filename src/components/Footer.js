import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import socialLinks from '../constants/social'
import Email from '../components/Email'

import ScreenReaderText from './ScreenReaderText'
import { screen } from '../css/js/media-functions'
import { ConstantContactInfo } from '../constants/contact-info'

const query = graphql`
  {
    infinity: file(relativePath: { eq: "infinity.png" }) {
      childImageSharp {
        fluid {
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
      <div className="column">
        <Image
          fluid={infinity.childImageSharp.fluid}
          alt="Infinity Symbol"
        />
        <p className="follow-us-on">
          Follow Us On <span className="sr-only">Social Media</span>
        </p>
        <ul className="row footer-icons">
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
                  {item.icon}{' '}
                  <ScreenReaderText element="span" text={item.label} />
                </a>
              </li>
            )
          })}
        </ul>
        <div className="phone-email">
          <p className="phone-email-details">
            {' '}
            <span className="phone">{props.Telephone.phone}</span> {` `}{' '}
            <span className="middot">&middot;</span> {` `}
            <Email className={props.className} />
          </p>
        </div>
        <div className="row sm-text">
          <p className="address">
            Michele Corley Company, LLC {props.Address.street}{' '}
            {props.Address.suite} {props.Address.city} {props.Address.state}{' '}
            {props.Address.zip}
          </p>
        </div>
        <div className="row sm-text">
          {' '}
          <p className="sm-text">
            All rights reserved. &copy;{new Date().getFullYear()}
          </p>{' '}
        </div>
      </div>
    </footer>
  )
}
Footer.defaultProps = ConstantContactInfo

const FooterWrapper = styled(Footer)`
  & {
    line-height: 19px;
    font-weight: 400;
    background: #ffffff;
    font-size: 1rem;
    padding: 0.1em 0 1.8em;
    text-align: center;
    letter-spacing: 1px;
    white-space: initial;
    .gatsby-image-wrapper {
      width: 70%;
      max-height: auto;
      margin: 20px auto;
    }
    .follow-us-on {
      color: var(--mainBlack);
      font-weight: 400;
      font-size: 21px;
      line-height: 32px;
      margin-bottom: 2rem;
      padding-bottom: 0;
      text-align: center;
      text-transform: capitalize;
    }
    div.row, ul.footer-icons {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      width: 100%;
      color: var(--mainBlack);
    }
    div.column,
    ul.footer-icons,
    div.row {
    }
    ul.footer-icons {
      display: flex;
      font-size: 1.8rem;
      justify-content: space-evenly;
      line-height: 2rem;
      margin: 1rem auto;
      .icon {
        margin: 0.5rem;
        background-color: var(--mainWhite) !important;
        color: var(--darkGrey) !important;
      }
    }
    div.row.sm-text p {
      padding: 5px;
      padding-bottom: 0;
    }
    div.row.sm-text p.address {
      font-weight: 400;
      font-size: 13px;
    }
    .sm-text {
      font-size: 13px;
    }
    div.phone-email {
      color: var(--mainBlack);
      font-size: 20px;
      margin-top: 10px;
      line-height: 22px;
    }
    .phone-email-details {
      margin: 0px;
      padding: 0px 0px 1em;
      color: var(--mainBlack);
    }
    div.phone-email p {
      white-space: initial;
    }
    .phone-email-details {
      margin: 0 auto;
      padding: 0 0 1em;
    }
    span.phone,
    a.email {
      text-decoration: none;
      font-weight: 400;
    }
    div.row.sm-text {
      font-weight: 300;
    }
  }
  ${screen.phone.phone`
    ul.footer-icons{
      flex-direction: column;
    }
    .icon{
      margin: 20px;
    }
    span.phone{ 
      display:block;
      font-size: 18px; 
      letter-spacing: 1.5px; 
      line-height: 30px;
      text-align: center;
    }
    a.email{ 
      display:block; 
      font-size: 17px;
      text-align: center;
      letter-spacing: 0;
      max-width: 
    }
  `}
  ${screen.tablet.tablet``}
  @media (max-width: 700px) {
    .icon {
      margin: 20px;
    }
    .middot {
      display: none;
    }
    div.row {
      flex-direction: column;
      flex-wrap: wrap;
    }
    span.phone {
      display: block;
      line-height: 35px;
    }
  }
  @media (max-width: 325px) {
    a.email {
      font-size: 15px;
    }
  }
`
export default FooterWrapper
