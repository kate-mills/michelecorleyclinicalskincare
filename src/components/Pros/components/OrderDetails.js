import React from 'react'
import styled from 'styled-components'

const OrderSpecifics = ({ className }) => {
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
        <p className="italic">
          If you need a login to place online orders contact us -
          <a href="mailto:customerservice@michelecorley.com?subject=I%20Need%20Online%20Ordering%20Access&body=Please%20include%20your%20name,%20spa,%20phone%20number%20and%20other%20important%20details%20below.">
            customerservice@michelecorley.com
          </a>
        </p>
        {/* NOWCOMMERCE */}
        <p>
          If you already have a login, click the button below to place online
          orders.
        </p>
        <a
          className="btn"
          href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867"
          target="_blank"
          rel="noreferrer"
        >
          PLACE ONLINE ORDER HERE
        </a>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  & {
    background: var(--mainMcc) !important;
    text-align: center;
    p {
      padding-block-end: 0;
    }
    li p{
      line-height: 1.2;
    }
  }
`

export default OrderSpecifics
