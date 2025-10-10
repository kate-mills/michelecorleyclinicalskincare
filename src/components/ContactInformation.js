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
      <h3 className="txt-center">Get in touch</h3>
      <div className="txt-center hours">
        <Phone />
        <div className="grid-container">
          <div className="grid-item bold">M-Th:</div>
          <div className="grid-item">
            <span dateTime="09:00">{`9AM`}</span>
            <span>{` - `}</span>
            <span dateTime="16:00">{` 4PM EST`}</span>
          </div>
          <div className="grid-item bold">Fri:</div>
          <div className="grid-item">
            <span dateTime="09:00">{`9AM`}</span>
            <span>{` - `}</span>
            <span dateTime="12:00">{`12PM EST`}</span>
          </div>
        </div>
      </div>

      <div className="flex col">
        <UnformattedEmail />
        <div>
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
    padding: 0 0 0.75rem;
    & .hours {
      margin-bottom: 1rem;
    }
    & .grid-container {
      display: grid;
      grid-template-columns: auto auto;
      grid-template-rows: auto;
      justify-content: center;
      justify-items: center;
      margin: 0 auto;
      width: 100%;

      & .grid-item.bold {
        padding-inline-end: 5px;
      }
    }
    & .flex.col {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    & a.email {
      text-align: center;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      width: 80vw;
    }
  }
`

export default ContactInfo
