import React from 'react'
import { Router } from '@reach/router'

import Professionals from '../components/Professionals/View/professionals'

import Layout from '../components/layout'
import Login from '../components/Professionals/Login'
import PrivateRoute from '../components/Professionals/PrivateRoute'

const App = () => {
  return (
    <Layout>
      <Router primary={false}>
        <PrivateRoute path="/app/professionals" component={Professionals} />
        <Login path="/app/login" />
      </Router>
    </Layout>
  )
}
export default App
