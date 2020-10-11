import React from 'react'

import PageModel from '../components/PageModel'

import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const ErrorPage = () => {
  return (
    <PageModel name="Oops" title="Oops">
      <ErrorWrapper>
        <div>
          <h1 className="oops">Oops!</h1>
          <p>
            We couldn't find the page you were looking for. This is either
            because:
          </p>
          <ul data-bullet-list>
            <li>
              <p>There is an error in the URL entered into your web browser.</p>
            </li>
            <li><p>The page you are looking for has been moved or deleted.</p></li>
          </ul>
          <p className=" m-top">
            Please check the URL and try again or click below to return to our home page.
          </p>
          <p className="txt-center m-top">
            {' '}
            <AniLink className="btn"  fade to="/">
              Return to our home page
            </AniLink>
            .
          </p>
        </div>
      </ErrorWrapper>
    </PageModel>
  )
}
const ErrorWrapper = styled.section`
  & {
    font-family: inherit;
  }
  & div h1 {
    margin-left: 5px;
  }
  & div {
    margin: 10px auto;
    width: 70%;
  }
  & div p {
    font-family: inherit;
    font-size: 15px;
    font-height: 27px;
    color: #5c5c5c;
    font-weight: 300;
  }
  & div h1.oops {
    font-size: 45px;
    font-height: 1.2em;
    color: #222222;
    font-weight: 300;
  }
  & div li {
    margin-left: 40px;
  }
  & p.m-top{
    margin-top: 20px;
  }
  @media (max-width: 749px) {
    & div{
      width 100%;
    }
  }

`
export default ErrorPage
