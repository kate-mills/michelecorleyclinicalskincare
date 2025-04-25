import React from 'react'
import { EmailInfo } from '../constants/contact-info'
import styled from 'styled-components'

const BasicEmail = props => {
  const { defaultSubject, fullEmail } = EmailInfo
  return (
    <StyledEmail
      className={props.block ? 'block' : ''}
      target="_top"
      href={`mailto:${fullEmail}?subject=${
        props?.subject ? props.subject : defaultSubject
      }`}
      title={`Email us at ${fullEmail}`}
    >
      {fullEmail}
    </StyledEmail>
  )
}

const StyledEmail = styled.a`
  @media (max-width: 400px) {
    &.block {
      display: block;
      margin: 0 auto;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      line-height: normal;
    }
  }
`

export default BasicEmail
