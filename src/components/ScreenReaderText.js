import React from 'react'

const ScreenReaderText = ({text, type="span"}) => {
  return (
    <span className="sr-only">{text}</span>
  )
}

export default ScreenReaderText
