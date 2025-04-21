import React from 'react'
import { Link } from 'gatsby'

import { isLoggedIn } from '../../../../../utils/auth'

import { paths } from '../../../../../constants/pro-info'

const ProLink = ({ isPro = false }) => {
  const [status, setStatus] = React.useState(
    !isPro ? { ...paths.public } : { ...paths.private }
  )

  React.useEffect(() => {
    setStatus(!isLoggedIn() ? paths.public : paths.private)
  }, [isPro])

  return <Link to={status.path}>{status.name}</Link>
}

export default ProLink
