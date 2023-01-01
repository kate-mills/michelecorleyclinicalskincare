import React from 'react'
import { screen } from '../css/js/media-functions'
import styled from 'styled-components'

const HeadingOneOrTwo = ({ children, text, num, className }) => {
  return (
    <div className={className}>
      {num > 1 ? <h2>{text}</h2> : <h1 className="nav-blocker">{text}</h1>}
    </div>
  )
}
export default styled(HeadingOneOrTwo)`
  & {
    background-color: ${props => props.backgroundColor || 'white'};
    margin: 0 auto;
    text-align: center;
  }
  h1 {
    font-size: 45px;
    line-height: 54px;
    color: #222222;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;

  }
  h2 {
    font-size: 30px;
    line-height: 42px;
    color: #ff665e;
    font-style: normal;
    font-weight: 400;
    margin: 0 auto;
  }
  ${screen.phone.phone`
   `}
  ${screen.tablet.tablet`
   `}
  ${screen.desktop.desktop`
  `}
`
