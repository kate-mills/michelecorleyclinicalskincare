import React from 'react'
import styled from 'styled-components'

const Title = ({ title, className }) => {
  return (
    <div className={className}>
      <h3>
        <span className="title">{title}</span>
      </h3>
    </div>
  )
}

export default styled(Title)`
  & {
    text-transform: uppercase;
    font-size: 2.3rem;
    margin-bottom: 2rem;
    line-height: initial;
  }
  & h3 {
    text-align: center;
    letter-spacing: 1px;
    color: rgba(179, 0, 0, 0.8);
  }
  .title {
    color: var(--mainBlack);
  }
  span {
    display: block;
  }
  @media (min-width: 576px) {
    span {
      display: inline-block;
      margin: 0 0.35rem;
    }
  }
`
