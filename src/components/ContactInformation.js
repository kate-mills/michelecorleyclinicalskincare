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
      <div className="txt-center">
        <h3>Get in touch</h3>
          <div className="txt-sm italic">Eastern Standard Time</div>
        <div className="grid-container">
          <div className="grid-item key">Monday-Thursday:</div>
          <div className="grid-item">
            <span dateTime="09:00">{`9AM`}</span>
            <span>{` - `}</span>
            <span dateTime="16:00">{` 4PM`}</span>
          </div>
          <div className="grid-item key">Friday:</div>
          <div className="grid-item">
            <span dateTime="09:00">{`9AM`}</span>
            <span>{` - `}</span>
            <span dateTime="12:00">{`12PM`}</span>
          </div>
        </div>
      </div>
      <div className="grid-container">
        <div className="grid-item bold key">Phone:</div>
        <div className="grid-item">
          <Phone />
        </div>
        <div className="grid-item bold key">Email:</div>
        <div className="grid-item">
          <UnformattedEmail />
        </div>
        <div className="grid-item bold key">{`Address: `}</div>
        <div className="grid-item">
          <address>
            <span>{`${street} `}</span>
            <span>{`${suite}`}</span>
            <br />
            <span>{city}, </span>
            <span>{state} </span>
            <span>{zip}</span>
          </address>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.aside`
  & {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    padding: 5px 0;

    & .txt-center {
      margin-bottom: 1rem;
      padding: 1em 0 0.1em;
      text-align: center;
      & .grid-container {
        justify-items: end;
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
      &.key {
        padding-inline-end: 5px;
        text-align: right;
      }
    }
  }
`

export default ContactInfo
