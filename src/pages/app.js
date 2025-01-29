import React from 'react'
import { Router } from '@reach/router'

import ProLayout from '../components/Professionals/View/ProLayout'
import Manuals from '../components/Professionals/View/Manuals'
import Kits from '../components/Professionals/View/Kits'
import FacialProtocols from '../components/Professionals/View/FacialProtocols'
import VirtualClasses from '../components/Professionals/View/VirtualClasses'

import Login from '../components/Professionals/Login'
import PrivateRoute from '../components/Professionals/PrivateRoute'

const App = (props) => {
  return (
    <Router primary={false}>
      <ProLayout path="/app/education">
        <PrivateRoute path="/" component={Manuals}/>
        <PrivateRoute path="/manuals" component={Manuals}/>
        <PrivateRoute path="/kits" component={Kits}/>
        <PrivateRoute path="/facials" component={FacialProtocols}/>
        <PrivateRoute path="/classes" component={VirtualClasses}/>
      </ProLayout>
      {/*<PrivateRoute path="/app/professionals" component={Professionals} /> */}

      <Login path="/app/login" />
    </Router>
  )
}
export default App
