import React from 'react'
import { Router } from '@reach/router'

import Professionals from '../components/Professionals/View/professionals'

import Login from '../components/Professionals/Login'
import PrivateRoute from '../components/Professionals/PrivateRoute'

const App = () => {
  return (
    <Router primary={false}>
      <PrivateRoute path="/app/education" component={Professionals} />
      <PrivateRoute path="/app/professionals" component={Professionals} />
      <Login path="/app/login" default/>
    </Router>
  )
}
export default App
