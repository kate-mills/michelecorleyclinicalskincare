import React from 'react'

const ScreenReaderText = ({ text, element = 'span' }) => {
  var srElement;

  switch (element) {
    case 'span':
      srElement = <span className="sr-only">{text}</span>
      break
    case 'h1':
      srElement  = <h1 className="sr-only">{text}</h1>
      break
    case 'h2':
      srElement = <h2 className="sr-only">{text}</h2>
      break
    case 'h3':
      srElement = <h3 className="sr-only">{text}</h3>
      break
    case 'h4':
      srElement = <h4 className="sr-only">{text}</h4>
      break
    case 'h5':
      srElement = <h5 className="sr-only">{text}</h5>
      break
    case 'h6':
      srElement = <h6 className="sr-only">{text}</h6>
      break
    default:
      srElement = <span className="sr-only">{text}</span>
      break
  }
  return srElement
}

export default ScreenReaderText
