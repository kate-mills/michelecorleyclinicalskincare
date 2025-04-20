import React from "react"
import ViewGbl from "./ViewGbl"
import { getCurrentUser } from "../../../utils/auth"

const Details = () => {
  const { name } = getCurrentUser()

  return (
    <ViewGbl title="Your Details">
      <p>
        This is a client-only route. You can get additional information about a
        user on the client from this page.
      </p>
      <ul>
        <li>Preferred name: {name}</li>
      </ul>
    </ViewGbl>
  )
}

export default Details
