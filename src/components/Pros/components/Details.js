import React from 'react'
import Container from './Container'
import { getCurrentUser } from '../../../utils/auth'

const Details = () => {
  const { name } = getCurrentUser()

  return (
    <Container title="Professional Education ">
      <p className="g-txt-center">
        If you need a login to place online orders contact us -
        customerservice@michelecorley.com
      </p>
      <p className="g-txt-center">
        If you already have a login click the button below to place online
        orders.
      </p>
      <ul>
        <li>Logged in: {name}</li>
      </ul>
    </Container>
  )
}

export default Details
