import React from 'react'
import styled from 'styled-components'
import {BasicEmail} from '../../../components'

const Orders = ({ className }) => {
  return (
    <StyledDiv className={className}>
      <h2>Order Specifics</h2>
      <div>
        <ul data-bullet-list>
          <li>
            <p>Please note we have a $150 minimum order.</p>
          </li>
          <li>
            <p>Orders shipped via UPS within 1-3 business days</p>
          </li>
          <li>
            <p>MC, Visa, American Express, and Discover are accepted</p>
          </li>
        </ul>
      </div>
      <hr />
      <div>
        {/* EMAIL - GET ACCESS TO ORDER */}
        <p>If you have a login, please click the "PLACE ONLINE ORDER HERE" button at the bottom right of this page.</p>
        <p className="">
          If you need a login to place online orders contact us - 
          <BasicEmail className={'poppy9'} subject="I need Online Ordering Access"/>
        </p>
        {/* NOWCOMMERCE */}
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  & {
    background: var(--offWhite);
    text-align: center;
  }
`

export default Orders 
