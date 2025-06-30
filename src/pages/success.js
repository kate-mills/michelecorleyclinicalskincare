import * as React from 'react'
import { Link } from 'gatsby'

import { GlobalLayout, Seo } from '../components'

export default function Successpage({ data }) {
  return (
    <GlobalLayout>
      <section>
      <h1 className="oops">Thank you!</h1>
      <p className="txt-center">Your submission was received.</p>
      <p className="txt-center">
        <Link className="btn" to="/">
          Return to our home page
        </Link>
      </p>
      </section>
    </GlobalLayout>
  )
}

export const Head = ({ location: { pathname }, params, data, pageContext }) => {
  return <Seo title="Success" noindex={true}/>
}
