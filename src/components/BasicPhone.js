import React from 'react'
import { PhoneInfo } from '../constants/contact-info'

const BasicPhone = ({className=''}) => {
  const { areaCode, prefix, suffix } = PhoneInfo
  let ph = `${areaCode}-${prefix}-${suffix}`
  return (
    <a className={className} href={`tel:${ph}`} alt={`Call ${ph}`}>
      {ph}
    </a>
  )
}

export default BasicPhone
