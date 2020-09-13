import React from 'react'
import Email from '../components/Email'

import PageModel from '../components/PageModel'

import styled from 'styled-components'

const ProOrders = () => {
  const star = (
    <span style={{ position: "relative", top: "3px", textDecoration: 'none' }} className="star">
      *
    </span>
  )
  return (
    <PageModel color="" title="Pro Orders" centeredTitle>
      <ProOrdersWrapper>
        <div className="txt-center w-100">
          <p>
            If you <span className="needs-login">need a login</span> to place online orders contact us{` - `}
            <Email className="email" subject="Pro Orders Login" />
          </p>
          <p>
            If you already <span className="has-login">have a login</span>
          <a
            href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867"
            target="_blank"
            rel="noreferrer"
            className="btn"
          ><span className="hilight">CLICK HERE</span>
          </a> to place an online order.
          </p>
          <p> {star}Please note we have a $100 minimum order (Exception - Best Sellers Travel Size Kit).  </p>
        </div>
      </ProOrdersWrapper>
    </PageModel>
  )
}
const ProOrdersWrapper = styled.section`
  & {
    width: 100%;
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
  }
  & .needs-login,
  & .has-login{
    text-decoration: underline;
  }
  & .email {
    text-decoration: none;
  }
  & .btn{
    margin-left: 10px;
    margin-right: 10px;
    font-weight: 600 !important;
  }

  @media (max-width: 600px) {
    & .email{
      display: block;
    }
    & .btn{
      width: fit-content;
      margin: 10px auto;
      display: block;
    }
  }
`
export default ProOrders
