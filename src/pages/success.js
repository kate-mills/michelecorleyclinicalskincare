import React from 'react'
import Layout from '../components/layout'
import {Link} from 'gatsby'

const Success = () => {
  return (
    <Layout title="Success" noindex>
      <section>
        <div className="txt-center w-100">
          <h3 className="poppy">Thank you! Your submission was received!</h3>
          <p>We'll be in contact shortly.</p>
          <Link to="/" className="btn btn-white">
            back home
          </Link>
        </div>
      </section>
    </Layout>
  )
}

export default Success
