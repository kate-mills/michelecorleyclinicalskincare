import React from 'react'
import { Router } from '@reach/router'

import ProLayout from '../components/Professionals/View/ProLayout'
import Manuals from '../components/Professionals/View/Manuals'
import Kits from '../components/Professionals/View/Kits'
import FacialProtocols from '../components/Professionals/View/FacialProtocols'
import VirtualClasses from '../components/Professionals/View/VirtualClasses'
import Orders from '../components/Professionals/View/Orders'

import Login from '../components/Professionals/Login'
import PrivateRoute from '../components/Professionals/PrivateRoute'

const App = (props) => {
  return (
    <Router primary={false}>
      <ProLayout path="/pro">
        <PrivateRoute path="/" component={Manuals}/>
        <PrivateRoute path="/manuals" component={Manuals}/>
        <PrivateRoute path="/kits" component={Kits}/>
        <PrivateRoute path="/facials" component={FacialProtocols}/>
        <PrivateRoute path="/classes" component={VirtualClasses}/>
        <PrivateRoute path="/orders" component={Orders}/>
      </ProLayout>

      <Login path="/pro/login" />
    </Router>
  )
}
export default App
