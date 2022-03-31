import React from 'react'
import styled from 'styled-components'

import { ConstantContactInfo } from '../constants/contact-info'

const Email = props => {
  return (
    <a
      className={props.className}
      href={`mailto:${props.full_email}?subject=${props.fmtSubject(
        props.subject
      )}`}
    >
      <span className="email-prefix">{props.prefix}</span>
      <span className="email-suffix">
        {props.suffix}
        {props.ext}
      </span>
    </a>
  )
}

Email.defaultProps = ConstantContactInfo.Email

export default styled(Email)`
  & {
    color: ${props => (props.color ? props.color : 'inherit')};
    font-weight: ${props => props.fontWeight || 'inherit'};
    font-family: ${props => props.fontFamily || 'inherit'};
    text-decoration: none;
  }
  & span {
    font-family: ${props => props.fontFamily || 'inherit'};
    color: ${props => (props.color ? props.color : 'inherit')};
  }
  @media (max-width: 360px) {
    & {
      display: block;
      font-size: 17px;
      white-space: pre-line;
    }
  }
  @media (max-width: 395px) {
    & > span {
      display: block;
    }
  }
`
