import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import socialLinks from './social-links'
import {
  PhoneInfo,
  EmailInfo,
  AddressInfo,
} from '../../../../constants/contact-info'

const query = graphql`
  {
    infinity: file(relativePath: { eq: "infinity.png" }) {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`

const Footer = ({ className }) => {
  const {
    infinity: {
      childImageSharp: { gatsbyImageData },
    },
  } = useStaticQuery(query)

  return (
    <footer className={className}>
      <GatsbyImage
        className="infinity-img"
        image={gatsbyImageData}
        alt="Infinity Symbol"
      />
      <p className="follow-us-on">
        Follow Us On<span className="sr-only">{` Social Media`}</span>
      </p>
      <ul id="footer-icons">
        {socialLinks.map((item, index) => {
          return (
            <li key={index}>
              <a
                aria-label={item.label}
                className="footer-link"
                href={item.href}
                title={item.label}
              >
                <span aria-hidden="true">{item.icon}</span>
                <span className="sr-only">{` ${item.label}`}</span>
              </a>
            </li>
          )
        })}
      </ul>
      <div>
        <p className="lg-txt">
          <span>{PhoneInfo.fullPhone}</span>
          <span>&middot;</span>
          <a
            href={`mailto:${EmailInfo.fullEmail}?subject=${EmailInfo.defaultSubject}`}
          >
            {EmailInfo.fullEmail}
          </a>
        </p>
        <p className="sm-txt">
          <span>Michele Corley Company, LLC</span>
          <span>{`${AddressInfo.oneLine}`}</span>
        </p>

        <p className="sm-txt">
          <span>All rights reserved. &copy;{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

const FooterWrapper = styled(Footer)`
  & {
    padding-block: 30px 20px;
    text-align: center;
    font-family: serif;
    font-weight: 400;
    position: sticky;
    top: 100%;
    div.infinity-img {
      max-width: 400px;
    }
    p {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      justify-content: center;
      margin-block: 0;
      padding-block: 3px;
      &.follow-us-on {
        font-family: var(--mainFont);
        padding-block: 0.5rem 0;
        font-size: 1.5rem;
      }
      &.lg-txt {
        font-size: 19px;
      }
      &.sm-txt {
        font-size: 14px;
      }
      & a,
      & span {
        line-height: 1.2;
        margin-inline: 2px;
        overflow: hidden;
        overflow-wrap: normal;
        white-space: break-spaces;
      }
    }
    ul#footer-icons {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      justify-content: space-evenly;
      & li {
        margin: 5px;
        padding: 5px;
        > a svg {
          font-size: 2rem;
          fill: var(--darkGrey);
        }
      }
    }
  }
`
export default FooterWrapper
