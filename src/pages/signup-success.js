import React from 'react'
import PageModel from '../components/PageModel'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const SignupSuccessPage = () => {
  return (
    <PageModel title="Signup Success" noindex>
      <section>
        <div className="txt-center w-100">
          <h1
            className="poppy"
            style={{ margin: '20px auto', fontWeight: '300' }}
          >Success!</h1>
          <p>You will begin to receive specials in the email provided.</p>
          <AniLink fade to="/" className="btn btn-white">
            back home
          </AniLink>
        </div>
      </section>
    </PageModel>
  )
}

export default SignupSuccessPage
