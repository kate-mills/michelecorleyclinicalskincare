import React from 'react'
import styled from 'styled-components'
import { EmailInfo, PhoneInfo, AddressInfo } from '../constants/contact-info'

export const UnformattedEmail = props => {
  const { fullEmail, defaultSubject, prefix, suffix, ext } = EmailInfo
  return (
    <a
      className="email"
      target="_top"
      href={`mailto:${fullEmail}?subject=${defaultSubject}`}
      title={`Email us at ${fullEmail}`}
    >
      <span>{prefix}</span>
      <span>{suffix}</span>
      <span>{ext}</span>
    </a>
  )
}

export const Phone = () => {
  const { areaCode, prefix, suffix } = PhoneInfo

  return (
    <a
      href={`tel:+${areaCode}${prefix}${suffix}`}
      rel="nofollow"
      title={`Call us at ${areaCode}-${prefix}-${suffix}`}
    >
      {`(${areaCode}) ${prefix} - ${suffix}`}
    </a>
  )
}

const ContactInfo = () => {
  const { street, suite, city, state, zip } = AddressInfo

  return (
    <Wrapper>
      <div className="txt-centered">
        <h2>Get in touch</h2>
        <div>
          <span>Monday</span>
          <span>{`-`}</span>
          <span>Friday</span>
          <span>{`: `}</span>
          <time dateTime="09:00">9AM</time>
          <span>{`-`}</span>
          <time dateTime="16:00">4PM</time> EST
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item key">Phone:</div>
        <div className="grid-item">
          <Phone />
        </div>
        <div className="grid-item key">Email:</div>
        <div className="grid-item">
          <UnformattedEmail />
        </div>
        <div className="grid-item key">Address:</div>
        <div className="grid-item">
          <address>
            <span>{`${street} `}</span>
            <span className="space">{` ${suite}`}</span>
            <br />
            <span>{city}</span>
            <span className="space">{state}</span>
            <span className="space">{zip}</span>
          </address>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  & {
    color: var(--mainBlack);
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px 0;

    & .txt-centered {
      margin-bottom: 5px;
      padding: 1em 0 0.1em;
      text-align: center;
      & span {
        padding-inline: 3px;
      }
    }

    & .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      justify-content: center;
      justify-items: start;
      margin: 0 auto;
      width: 100%;
    }
    & .grid-item {
      padding-block: 2px;
      padding-inline-end: 5px;
      &.key {
        text-align: right;
      }
      .space {
        padding-left: 5px;
      }
    }
  }
`

export default ContactInfo
