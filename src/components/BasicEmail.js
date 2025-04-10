import React from 'react'
import { EmailInfo } from '../constants/contact-info'



const BasicEmail = props => {
  const {
    defaultSubject,
    fullEmail,
  } = EmailInfo
  return (
    <a
      className="email"
      target="_top"
      href={`mailto:${fullEmail}?subject=${props?.subject? props.subject : defaultSubject}`}
      title={`Email us at ${fullEmail}`}>{fullEmail}</a>
  )
}

export default BasicEmail
