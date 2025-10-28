import React from 'react'
import styled from 'styled-components'
import socialLinks from './social-links'
import {
  PhoneInfo,
  EmailInfo,
  AddressInfo,
} from '../../../../constants/contact-info'

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <p>Our Products Are Proudly Made In The USA.</p>
      <svg
        id="infinity"
        width="1036"
        height="35"
        viewBox="0 0 1036 35"
        fill="none"
      >
        <path
          d="M0 18H396M640 18H1036M516.498 17.5001C506.5 23 498.5 28.5 478 31C463.5 31.7525 447.509 25.1165 447.5 17.5001C449.5 9.5 459.002 4.00003 474.5 4C489.998 3.99998 503 10 516.498 17.5001ZM519.039 17.4999C529.037 12 537.037 6.5 557.537 4.00002C572.037 3.24745 588.029 9.88347 588.037 17.4999C586.037 25.5 576.535 31 561.037 31C545.539 31 532.537 25 519.039 17.4999Z"
          stroke="#7A6F6C"
          strokeWidth="6"
        />
      </svg>
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
        <p>
          <span className="txt-sm">{PhoneInfo.fullPhone}</span>
          <span className="txt-sm">&middot;</span>
          <a
            className="txt-sm"
            href={`mailto:${EmailInfo.fullEmail}?subject=${EmailInfo.defaultSubject}`}
          >
            {EmailInfo.fullEmail}
          </a>
        </p>
        <p>
          <span className="txt-sm">Michele Corley Company, LLC</span>
          <span className="txt-sm">{`${AddressInfo.oneLine}`}</span>
        </p>

        <p>
          <span className="txt-sm">All rights reserved. &copy;{new Date().getFullYear()}</span>
        </p>
      </div>
    </footer>
  )
}

const FooterWrapper = styled(Footer)`
  & {
    padding-block: 30px 20px;
    text-align: center;
    position: sticky;
    top: 100%;
    #infinity {
      min-width: 250px;
      width: 400px;
      max-width: 70%;
    }
    p {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      font-family: Times, serif;
      justify-content: center;
      line-height: normal;
      margin-block: 0;
      padding-block-end: 0.5rem;
      &.follow-us-on {
        font-family: var(--mainFont);
        font-size: 1.5rem;
      }
      & a,
      & span {
        line-height: normal;
        margin-inline: 2px;
        overflow: hidden;
        overflow-wrap: anywhere;
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
    @media (max-width: 900px) {
      padding-block-end: 70px;

      #infinity{
        min-width: 30%;
        width: 90%;
        max-width: 400px;
      }
    }
  }
`
export default FooterWrapper
