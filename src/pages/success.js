import React from 'react'
import PageModel from '../components/PageModel'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Success = () => {
  return (
    <PageModel title="Success">
      <section>
        <div className="txt-center w-100">
          <h1
            className="poppy"
            style={{ margin: '20px auto', fontWeight: '300' }}
          >
            Thank you! Your submission was received!
          </h1>
          <p>We'll be in contact shortly.</p>
          <AniLink fade to="/" className="btn btn-white">
            back home
          </AniLink>
        </div>
      </section>
    </PageModel>
  )
}

export default Success
