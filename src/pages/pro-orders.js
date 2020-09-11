import React from "react"
import Email from "../components/Email"

import PageModel from "../components/PageModel"

import styled from "styled-components"

const ProOrders = () => {
  const star = <span style={{textDecoration: "none"}} className="star">*</span>
  return (
    <PageModel color=""  title="Pro Orders" centeredTitle>
      <ProOrdersWrapper>
        <div className="txt-center w-100">
          <p className="contains-email">
            If you need a login to place online orders contact us{` - `}
            <Email className="email" subject="Pro Orders Login"/>
          </p>
          <p>
            Please note we have a $100 minimum order (Exception - Best Sellers
            Travel Size Kit).
          </p>
          <a href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867" target="_blank" rel="noreferrer"
              className="btn btn-white">
            <span>{star}if you <span className="text">have a login</span></span>
              <span className="hilight">CLICK HERE</span>
              <span>for online orders</span>
          </a>
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
  & a.btn span.star{
    font-weight: 400;
    position: relative;
    right: 2px;
    top: 2px;
  }
  & .email{
    text-decoration: underline;
  }
  & a.btn{
    margin: 10px auto;
    width: fit-content;
    text-align: center;
    margin: 0 auto;
  }
  & a.btn > span{
    display: block;
    text-align: center;
    margin: 0 auto;
  }
  & a.btn > span.hilight{
    font-weight: 500;
    padding: 0.8rem 1.6rem;
    line-height: 35px;
    font-size: 30px;
  }
  & a.btn:hover > span.hilight{
    color: var(--poppy) !important;
  }

  & a.btn > span:first-child,
  & a.btn > span:last-child{
    font-size: 15px;
  }
  & a.btn:hover > span:first-child span.text{
    text-decoration: underline;
  }


  @media (max-width: 600px){
    & .email-prefix{
      display: block;
    }
    & a.btn > span.hilight{
      padding: 0.8rem 0rem;
      margin: 0 auto;
      text-align: center;
    }
  }
  @media (max-width: 400px){
  }
`
export default ProOrders
