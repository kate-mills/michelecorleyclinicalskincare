import React from 'react'
import { EmailInfo } from '../constants/contact-info'
import styled from 'styled-components'

const BasicEmail = ({ className = '', block = '', subject = '' }) => {
  const { defaultSubject, fullEmail } = EmailInfo
  return (
    <StyledEmail
      className={(block, className)}
      target="_top"
      href={`mailto:${fullEmail}?subject=${subject ? subject : defaultSubject}`}
      title={`Email us at ${fullEmail}`}
    >
      {fullEmail}
    </StyledEmail>
  )
}

const StyledEmail = styled.a`
  @media (max-width: 400px) {
    overflow: hidden;
    display: block;
    text-overflow: ellipsis;
    max-width: 100%;
  }
`

export default BasicEmail
