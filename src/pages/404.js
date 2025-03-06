import * as React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import { GlobalLayout } from '../components'

export default function Errorpage({ data }) {
  return (
    <GlobalLayout>
      <h1 className="oops">Oops!</h1>
      <PageWrapper>
        <div>
          <p className="g-txt-center">
            We couldn't find the page you were looking for. This is either
            because:
          </p>
          <ul data-bullet-list>
            <li>
              <p>There is an error in the URL entered into your web browser.</p>
            </li>
            <li>
              <p>The page you are looking for has been moved or deleted.</p>
            </li>
          </ul>
          <p className="g-txt-center add-mt">
            Please check the URL and try again or click below to return to our
            home page.
          </p>
          <p className="g-txt-center add-mt">
            <Link className="btn" to="/">
              Return to our home page
            </Link>
          </p>
        </div>
      </PageWrapper>
    </GlobalLayout>
  )
}

const PageWrapper = styled.section`
  & {
    display: flex;
    justify-content: center;
    > div{
      > ul li{
        margin-left: 20px;
      }
      & p{
        font-size: 15px;
        &.add-mt{
          margin-top: 1em;
        }
      }
    }
  }
`
