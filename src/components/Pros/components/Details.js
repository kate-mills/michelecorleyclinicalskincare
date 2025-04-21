import React from "react"
import Container from "./Container"
import { getCurrentUser } from "../../../utils/auth"

const Details = () => {
  const { name } = getCurrentUser()

  return (
    <Container title="Your Details">
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
      </ul>
    </Container>
  )
}

export default Details
