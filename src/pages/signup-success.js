import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const SignupSuccessPage = () => {
  return (
    <Layout title="Signup Success" noindex>
      <section>
          <h1>Success!</h1>
        <div className="txt-center w-100">
          <p>You will begin to receive specials in the email provided.</p>
          <Link to="/" className="btn btn-white">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default SignupSuccessPage
