import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const SpaFndrFixedLink = ({ className = '', display = true }) => {
  return !!display ? (
    <div className={`${className}`}>
      <Link
        to={'/spa-finder/'}
        className={`link-content txt-sm txt-center`}
        tabIndex={0}
      >
        FIND OUR PRODUCTS IN SPAS
      </Link>
    </div>
  ) : null
}

export default styled(SpaFndrFixedLink)`
  & {
    background: var(--poppy);
    border: 0.125rem solid var(--poppy);
    border-radius: 0.5rem;
    bottom: 15px;
    box-shadow: var(--light-shadow);
    display: table-cell;
    line-height: 1.5;
    margin: 0 auto;
    opacity: 1;
    padding: 0.4rem 0;
    position: fixed;
    right: 15px;
    z-index: 9998;
    > .link-content {
      background: var(--poppy) !important;
      color: var(--mainWhite);
      display: block;
      padding: 0.8rem 1.6rem;
      vertical-align: middle;
    }
    @media (max-width: 300px) {
      bottom: 0;
      left: 0;
      padding: 0;
      right: 0;
    }
  }
`
