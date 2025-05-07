import React from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'

const SpaFndrFixedLink = ({ className}) => {
  return (
    <div className={`${className}`}>
      <Link
        to={'/spa-finder/'}
        className={`link-content`}
        tabIndex={0}
      >FIND OUR PRODUCTS IN SPAS
      </Link>
    </div>
  )
}

export default styled(SpaFndrFixedLink)`
  & {
    font-family: var(--mainFont);
    background: var(--poppy);
    position: fixed;
    right: 20px;
    bottom: 15px;
    z-index: 9998;
    display: table-cell;
    width: auto;
    padding: 20px 15px;
    letter-spacing: normal;
    word-spacing: 1px;
    border-radius: 5px;
    box-shadow: var(--light-shadow);
    text-align: center;
    vertical-align: middle;
    font-size: 13px;
    font-weight: 500;
    line-height: 1.5;
    opacity: 1;
    > .link-content {
      display: table-cell;
      height: auto;
      text-align: center;
      vertical-align: middle;
      color: var(--mainWhite);
      white-space: wrap;
      text-overflow: ellipsis;
    }
    @media (max-width: 300px) {
      left: 0;
      right: 0;
      bottom: 0;
      max-width: fit-content;
      max-height: fit-content;
      padding: 10px;
      z-index: 9998;
    }
  }
`
