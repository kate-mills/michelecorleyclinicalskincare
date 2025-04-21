import React from 'react'
import { Link } from 'gatsby'

import { PATH_DTL } from '../../../../../constants/pro-info'

const ProLink = ({ isPro = false }) => {
  const [status, setStatus] = React.useState(
    !isPro ? PATH_DTL.public : PATH_DTL.private
  )

  React.useEffect(() => {
    setStatus(!isPro ? PATH_DTL.public : PATH_DTL.private)
  }, [isPro])

  return <Link to={status.path}>{status.name}</Link>
}

export default ProLink
