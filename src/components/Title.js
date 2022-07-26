import React from 'react'
import styled from 'styled-components'

const Title = ({ className, color, size, weight, title }) => {
  return <h1 className={className}>{title}</h1>
}

Title.defaultProps = {
  color: 'var(--poppyDark)',
  size: '2.6875rem',
  weight: 400,
}

export default styled(Title)`
  & {
    color: ${props => props.color};
    font-size: ${props => props.size};
    font-weight: ${props => props.weight};
    line-height: 54px;
    margin: 20px auto;
    padding-left: 0px;
    padding-right: 0px;
    text-align: center;
    text-transform: capitalize;
  }
`
