import * as React from 'react'
import { Link } from 'gatsby'

//import Layout from '../components/Layout'

export default function Error({ data }) {
  return (
    <div>
      <h1>Oops! Wrong Page</h1>
      <div className="txt-center">
        <p>
          We couldn't find the page you were looking for. This is either
          because:
        </p>
        <p>
          Please check the URL and try again or click below to return to our
          home page.
        </p>
        <p>
          <Link to="/" className="btn">
            Return to our Home Page
          </Link>
        </p>
      </div>
    </div>
  )
}
