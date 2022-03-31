import React from 'react'
import styled from 'styled-components'
import { ConstantContactInfo } from '../constants/contact-info'

export const UnformattedEmail = props => {
  let fmtSubject = ConstantContactInfo.Email.fmtSubject(props.subject)
  return (
    <a
      className="full-email"
      target="_top"
      href={`mailto:${props.full_email}?subject=${fmtSubject}`}
    >
      <span className="email-prefix" style={{}}>
        {props.prefix}
      </span>
      <span className="email-suffix" style={{}}>
        {props.suffix}
      </span>
      <span className="email-ext" style={{}}>
        {props.ext}
      </span>
    </a>
  )
}

UnformattedEmail.defaultProps = ConstantContactInfo.Email

export const Phone = ({ areaCode, prefix, suffix }) => {
  return (
    <a href={`tel:+${areaCode}${prefix}${suffix}`} rel="nofollow">
      {`(${areaCode}) ${prefix} - ${suffix}`}
    </a>
  )
}
Phone.defaultProps = ConstantContactInfo.Telephone

const ContactInfo = props => {
  return (
    <Wrapper>
      <div className="flex-container" style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '35px' }}>Get in touch</h2>
        <div className="flex-item">
          <span className="day">Monday</span>
          <span className="space-lr">{`-`}</span>
          <span className="day">Friday</span>
          <span className="space-r">{`: `}</span>
          <time dateTime="10:00">10 AM</time>
          <span className="space-lr">{`-`}</span>
          <time dateTime="16:00">4 PM</time>
        </div>
      </div>

      <div className="grid-container">
        <div className="grid-item key">Phone:</div>
        <div className="grid-item phone value">
          <Phone />
        </div>
        <div className="grid-item key">Email:</div>
        <div className="grid-item value">
          <div>
            <UnformattedEmail />
          </div>
        </div>
        <div className="grid-item key">Address:</div>
        <div className="grid-item value">
          <address style={{ whiteSpace: 'pre-line' }}>
            <span
              className="street-address"
              style={{ paddingLeft: '5px', display: 'inline-block' }}
            >
              {props.street}
            </span>
            <span
              className="suite"
              style={{ paddingLeft: '5px', display: 'inline-block' }}
            >
              {props.suite}
            </span>
            <br />
            <span
              className="city"
              style={{ paddingLeft: '5px', display: 'inline-block' }}
            >
              {props.city}
            </span>
            <span
              className="state"
              style={{ paddingLeft: '5px', display: 'inline-block' }}
            >
              {props.state}
            </span>
            <span
              className="zip"
              style={{ paddingLeft: '5px', display: 'inline-block' }}
            >
              {props.zip}
            </span>
          </address>
        </div>
      </div>
    </Wrapper>
  )
}
ContactInfo.defaultProps = ConstantContactInfo.Address

const Wrapper = styled.aside`
  & {
    display: flex;
    margin: 0 auto;
    flex-direction: column;
    padding: 5px 0;
    white-space: pre-line;
  }
  & > *,
  & > * > * {
    color: var(--mainBlack);
  }
  & > .flex-container {
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em 0 0.1em;
    margin-bottom: 5px;
  }
  & > .flex-container > * {
    display: inline-block;
    width: 100%;
  }
  & > div.grid-container {
    max-width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    margin-right: unset;
  }
  & .grid-item {
    padding: 5px;
  }
  & > .grid-container {
    width: 100%;
  }
  & .grid-item.key,
  & .grid-item.value {
    display: flex;
    align-items: center;
    justify-content: start;
  }
  & .grid-item.value .full-email > *,
  & .grid-item.value > * {
    display: inline-block;
    padding-right: 0;
  }
  & .grid-item.value {
    letter-spacing: 1px;
  }
  & span.space-r {
    padding-right: 6px !important;
  }
  & span.space-lr {
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  @media (max-width: 500px) {
    & > * :not(h2) {
      font-size: 14px;
    }
  }
`

export default ContactInfo
