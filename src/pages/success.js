import * as React from 'react'
import { Link } from 'gatsby'

import { GlobalLayout } from '../components'

export default function Successpage({ data }) {
  return (
    <GlobalLayout>
      <section>
      <h1 className="oops">Thank you!</h1>
      <p className="g-txt-center">Your submission was received.</p>
      <p className="g-txt-center">
        <Link className="btn" to="/">
          Return to our home page
        </Link>
      </p>
      </section>
    </GlobalLayout>
  )
}
