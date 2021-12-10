import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import styled from 'styled-components'
import socialLinks from '../constants/social'

import { screen } from '../css/js/media-functions'
import { ConstantContactInfo  } from '../constants/contact-info'

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

const Footer = (props) => {
  const { infinity } = useStaticQuery(query)
  return (
    <footer className={props.className}>
      <div className="column">
        <Image fluid={infinity.childImageSharp.fluid} />
        <div className="lg-text">
          <h3
            style={{
              textTransform: 'capitalize',
              color: 'var(--mainBlack)',
              fontWeight: '400',
              lineHeight: '32px',
              fontSize: '21px',
              textAlign: 'center',
            }}
          >
            Follow us on
          </h3>
        </div>
        <div className="row footer-icons">
          {socialLinks.map((item, index) => {
            return (
              <div className="icon" key={index}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className={item.class}
                  style={item.style}
                >
                  {item.icon}
                </a>
              </div>
            )
          })}
        </div>
        <div className="row lg-text phone-email">
          <p style={{ margin: '0', padding: '0 0 1.0em' }}>
            <span className="phone">{props.Telephone.phone}</span>
            {` `}
            <span className="middot">&middot;</span>
            {` `}
            <a
              href={`mailto:${props.Email.full_email}?subject=${props.Email.subject}`}
              target="_top"
              className="email"
            >
              <span className="span1">{props.Email.prefix}</span>
              <span className="email span2">{props.Email.suffix}{props.Email.ext}</span>
            </a>
          </p>
        </div>
        <div className="row sm-text">
          <p className="address">
            Michele Corley Company, LLC {props.Address.street} {props.Address.suite} {props.Address.city} {props.Address.state} {props.Address.zip}
          </p>
        </div>
        <div className="row sm-text">
          {' '}
          <p className="sm-text">
            All rights reserved. &copy;{new Date().getFullYear()}
          </p>{' '}
        </div>
      </div>
      <div>
        <p className="sm-text allydigitalsolutions">
          <a href="https://allydigitalsolutions.com">Website built by allydigitalsolutions.com</a>
        </p>
      </div>
    </footer>
  )
}
Footer.defaultProps = ConstantContactInfo; 

const FooterWrapper = styled(Footer)`
  & {
    padding: 0.1em 0 1.8em;
    text-align: center;
    letter-spacing: 1px;
    white-space: initial;
  }
  & .gatsby-image-wrapper {
    width: 80%;
    max-height: 50px;
    margin: 20px auto !important;
    text-align: justify;
  }

  & div.row {
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  & div.column,
  & div.row {
    font-size: 16px;
    line-height: 19px;
    color: var(--mainBlack);
    font-weight: 400;
  }
  & div.row.footer-icons {
    font-size: 28px;
    justify-content: space-around;
    line-height: unset;
  }
  a.instagram-logo {
    font-size: 0px;
  }
  a.instagram-logo img {
    height: 40px;
    width: 40px;
  }

  div.row.sm-text p {
    padding: 5px;
  }
  div.row.sm-text p.address {
    font-weight: 400;
    font-size: 13px;
  }
  & .sm-text {
    font-size: 13px;
  }
  & .allydigitalsolutions{
    font-size: 11px;
  }
  div.phone-email {
    color: var(--mainBlack);
    font-size: 20px;
    margin-top: 10px;
    line-height: 22px;
  }
  div.phone-email p {
    white-space: initial;
  }
  span.phone,
  a.email {
    text-decoration: none;
    font-weight: 400;
  }
  & a.email {
    font-size: 19px;
    letter-spacing: 0px;
  }
  & a.email span {
    display: inline;
    letter-spacing: 0px;
  }
  div.row.sm-text {
    font-weight: 300;
  }
  ${screen.phone.phone`
    div.row.footer-icons{
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
    }
    & .gatsby-image-wrapper{
      width: 100%;
      max-height: unset;
      margin: 20px auto;
    }
  `}
  ${screen.tablet.tablet` 
    div.row.footer-icons{
      flex-direction: column;
    }
    .icon{
      margin: 20px;
    } 
    & .gatsby-image-wrapper{
      width: 90%;
      max-height: unset;
      margin: 20px auto;
    }
  `}
  @media (max-width: 700px) {
    .middot {
      display: none;
    }
    .div-row {
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
