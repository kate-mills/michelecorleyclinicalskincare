import React from 'react'

import Layout from '../components/layout'

import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const ErrorPage = props => {
  return (
    <Layout name="Oops" title="Oops">
      <ErrorWrapper className={props.className}>
        <div className="txt-center">
          <h1>Oops!</h1>
          <p className="info">
            We couldn't find the page you were looking for. This is either
            because:
          </p>
          <ul data-bullet-list>
            <li className="indent">
              <p>There is an error in the URL entered into your web browser.</p>
            </li>
            <li className="indent">
              <p>The page you are looking for has been moved or deleted.</p>
            </li>
          </ul>

          <div className="txt-center">
            <p className="info">
              Please check the URL and try again or click below to return to our
              home page.
            </p>
          </div>
          <p className="txt-center">
            {' '}
            <AniLink className="btn" fade to="/">
              Return to our home page
            </AniLink>
            .
          </p>
        </div>
      </ErrorWrapper>
    </Layout>
  )
}
const ErrorWrapper = styled.section`
  & div {
    margin: 0 auto;
    max-width: 70%;
    width: 100%;
    & .info{
      padding-bottom: 0.25rem;
    }
    & ul {
      text-align: left;
      margin:  1rem auto;
      width: 70%;
      .indent{
        margin: 0 .5rem;
      }
    }
  & a.btn{
    margin-top: 1rem;
  }
  }

  @media (max-width: 749px) {
    & div{
      max-width 100%;
    }
  }

`
export default ErrorPage
