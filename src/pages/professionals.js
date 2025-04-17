import React from 'react'
import { Router } from '@reach/router'

import { ProLayout, ProLogin } from '../components/Pros'

const Pros = props => {
  return (
    <Router primary={false}>
      <ProLayout path="/professionals"></ProLayout>
      <ProLogin path="/professionals/login" />
    </Router>
  )
}
export default Pros
