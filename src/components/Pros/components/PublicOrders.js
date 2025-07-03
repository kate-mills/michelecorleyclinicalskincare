import React from 'react'
import styled from 'styled-components'
import { BasicEmail } from '../../../components'

const PublicOrders = ({ className }) => {
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
        {/* NOWCOMMERCE */}
        <p className="pb0">
          If you have a login,{' '}
          <a
            className="poppy9"
            href={'https://portal.nowcommerce.com/custsignin.aspx?ID=99867'}
            target={'_blank'}
            rel="noreferrer"
            tabIndex={0}
          >
            PLACE ONLINE ORDERS HERE.
          </a>
        </p>

        {/* EMAIL - GET ACCESS TO ORDER */}
        <p className="pb0">
          If you need a login to place online orders contact us -{' '}
          <BasicEmail
            block={true}
            subject="I need Online Ordering Access"
            className="poppy9"
          />
        </p>
      </div>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  & {
    background: var(--offWhite);
    text-align: center;
    & p {
      color: var(--darkest);
    }
  }
`

export default PublicOrders
