import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import { navigate } from 'gatsby'

const FixedLink = ({
  className,
  to = '/spa-locator/',
  text = 'FIND OUR PRODUCTS NEAR YOU',
  isPageLink = false,
}) => {
  return (
    <div className={`${className} fixed-link`}>
      {!isPageLink ? (
        <AniLink fade to={to} className={`link-content`}>
          {text}
        </AniLink>
      ) : (
        <span className={`link-content`}
          tabIndex={0}
          role="link"
          onClick={() => navigate(to)}
          onKeyDown={() => navigate(to)}
        >{text}</span>
      )}
    </div>
  )
}

export default styled(FixedLink)`
  & {
    background: var(--poppy);
    border-radius: 5px;
    bottom: 15px;
    box-shadow: var(--light-shadow);
    display: table-cell;
    height: auto;
    line-height: 1.5;
    opacity: 1;
    position: fixed;
    right: 20px;
    text-align: center;
    vertical-align: middle;
    width: auto;
    z-index: 9998;
    > .link-content {
      border-radius: 5px;
      color: var(--mainWhite);
      display: block;
      font-family: var(--mainFont);
      font-size: 13px;
      font-weight: 500;
      height: auto;
      letter-spacing: normal;
      padding: 20px 15px;
      text-align: center;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: wrap;
      word-spacing: 1px;
    }
    @media (max-width: 300px) {
      bottom: 0;
      left: 0;
      right: 0;
      height: fit-content;
      text-align: center;
      z-index: 9998;
      > .link-content {
        padding: 10px;
      }
    }
    &:hover {
      cursor: pointer;
    }
  }
`
