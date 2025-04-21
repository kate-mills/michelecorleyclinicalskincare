import React from 'react'
import Container from './Container'
import styled from 'styled-components'

const OrderSpecifics = ({ className }) => {
  return (
    <StyledOrders className={className}>
      <div className="block">
        <h2>Ordering Online</h2>
        {/* EMAIL - GET ACCESS TO ORDER */}
        <div className="nested">
          <span className="pie">
            If you need a login to place online orders contact us -
          </span>
          <a href="mailto:customerservice@michelecorley.com?subject=I%20Need%20Online%20Ordering%20Access&body=Please%20include%20your%20name,%20spa,%20phone%20number%20and%20other%20important%20details%20below.">
            customerservice@michelecorley.com
          </a>
        </div>
        {/* NOWCOMMERCE */}
        <div className="nested">
          <span className="pie">If you already have a login,</span>
          <a
            href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867"
            target="_blank"
            rel="noreferrer"
          >
            PLACE ONLINE ORDER HERE
          </a>
        </div>
      </div>
      <div className="block">
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
      </div>
    </StyledOrders>
  )
}

const StyledOrders = styled(Container)`
  & {
    h2 {
      color: var(--poppy);
    }
    > div {
      text-align: center;
      &.block {
        margin-block: 2rem;
         > .nested{
          margin-block: 0.5rem;
        }
      }
      a {
        color: var(--poppy);
        padding: 0.12rem 0.16rem;
        text-decoration: underline;
      }
      p.rm-pbe {
        padding-block-end: 0.5rem;
      }
      .pie {
        padding-inline-end: 0.25rem;
      }
    }
  }
`

export default OrderSpecifics
