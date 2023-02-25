import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SpaLocatorFixedLink = ({ className }) => {
  return (
    <div className={className}>
      <AniLink
        fade
        to={`/spa-locator`}
        className={`link-content`}
        tabIndex={0}
      >
        FIND OUR PRODUCTS IN STORES
      </AniLink>
    </div>
  )
}

export default styled(SpaLocatorFixedLink)`
  & {
    font-family: var(--mainFont);
    background: var(--poppy);
    position: fixed;
    right: 20px;
    bottom: 15px;
    z-index: 9998;
    display: table-cell;
    width: auto;
    min-height: fit-content;
    height: fit-content;
    padding: 20px 15px;
    letter-spacing: normal;
    word-spacing: 3px;
    border-radius: 5px;
    box-shadow: var(--light-shadow);
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    > .link-content{
      display: table-cell;
      width: auto;
      min-height: 42px;
      height: auto;
      text-align: center;
      vertical-align: middle;
      color: #fbfbfb;
      color: var(--mainWhite);
      white-space: wrap;
      text-overflow: ellipsis;
      overflow: hidden;

    }
  @media(max-width: 300px){
    left: 20px;
    width: fit-content;
  }
  }
`
