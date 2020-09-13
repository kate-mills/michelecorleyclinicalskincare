import React from 'react'
import styled from 'styled-components'

const Title = ({ className, title, center }) => {
  let heading = (
    <h1 style={{ margin: '20px 0' }} className={className}>
      {title}
    </h1>
  )
  let centeredHeading = (
    <h1
      style={{ margin: '20px auto', textAlign: 'center' }}
      className={className}
    >
      {title}
    </h1>
  )
  return center === true ? centeredHeading : heading
}

export default styled(Title)`
  & {
    color: ${props => (props.color ? props.color : 'var(--poppy)')};
    font-size: ${props => (props.size ? props.size : 'auto')};
    font-weight: ${props => (props.weight ? props.weight : 'auto')};
    text-align: ${props => (props.align ? props.align : 'center')};

    text-transform: ${props =>
      props.transform ? props.transform : 'capitalize'};
    letter-spacing: 1px;
    line-height: 54px;
    width: fit-content;
    padding-left: 0px;
    padding-right: 0px;
  }
`
