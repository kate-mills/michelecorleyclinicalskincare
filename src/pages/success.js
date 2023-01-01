import React from 'react'
import PageModel from '../components/PageModel'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const Success = () => {
  return (
    <PageModel title="Success" noindex>
      <section>
        <div className="txt-center w-100">
          <h3 className="poppy">Thank you! Your submission was received!</h3>
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
