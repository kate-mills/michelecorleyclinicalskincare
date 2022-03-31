import React from 'react'
import Email from '../components/Email'

import PageModel from '../components/PageModel'

import styled from 'styled-components'

const ProOrders = () => {
  return (
    <PageModel title="Pro Orders" centeredTitle>
      <ProOrdersWrapper>
        <div className="txt-center w-100">
          <p>
            If you need a login to place online orders contact us{` - `}
            <Email className="email" subject="Pro Orders Login" />
          </p>
          <p>
            If you already have a login click the button below to place online
            orders.
            <br />
            <a
              href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867"
              target="_blank"
              rel="noreferrer"
              className="btn"
            >
              Online orders
            </a>
          </p>

          <p>
            Please note we have a $100 minimum order (Exception - Best Sellers
            Travel Size Kit).
          </p>
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
  & .has-login {
    font-style: italic;
  }
  & > .email {
    text-decoration: none;
  }
  & .btn {
    margin-left: 10px;
    margin-top: 25px;
    margin-right: 10px;
  }

  @media (max-width: 600px) {
    & .email {
      display: block;
    }
    & .btn {
    }
  }
`
export default ProOrders
