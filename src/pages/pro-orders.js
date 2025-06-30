import React from 'react'

import {GlobalLayout, BasicEmail, Seo} from '../components'

import styled from 'styled-components'

const ProOrders = () => {
  return (
    <GlobalLayout
      title="Pro Orders"
      description="Login or create a professional account, and order your Michele Corley Clinical Skin Care products online."
    >
      <ProOrdersWrapper>
        <h1>Pro Orders</h1>
        <h2 className="sr-only">
          Login or create a professional account, and order your Michele Corley
          Clinical Skin Care products online.
        </h2>
        <div className="txt-center">
          <p>
            If you need a login to place online orders contact us{` - `}
            <BasicEmail subject="Pro Orders"/>
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
          <p className="poppy">
            Please note we have a $150 minimum order.
          </p>
        </div>
      </ProOrdersWrapper>
    </GlobalLayout>
  )
}

const ProOrdersWrapper = styled.section`
  & {
    width: 100%;
    text-align: center;
  }
  & .btn {
    margin-block: 0.8rem;
    margin-block-start: 25px;
  }

  @media (max-width: 600px) {
    & .btn {
      margin-block-start: 25px;
    }
  }
`
export default ProOrders

export const Head = ({location:{pathname}, params, data, pageContext})=> {
  return <Seo title="Michele Corley Professional Ordering Info" noindex={true} />
}
