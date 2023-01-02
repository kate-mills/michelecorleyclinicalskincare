import React from 'react'
import Layout from '../components/layout'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SignupSuccessPage = () => {
  return (
    <Layout title="Signup Success" noindex>
      <section>
          <h1>Success!</h1>
        <div className="txt-center w-100">
          <p>You will begin to receive specials in the email provided.</p>
          <AniLink fade to="/" className="btn btn-white">
            back home
          </AniLink>
        </div>
      </section>
    </Layout>
  )
}

export default SignupSuccessPage
