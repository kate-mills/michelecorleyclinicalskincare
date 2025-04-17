import React from 'react'
import { navigate } from 'gatsby'

import {GlobalLayout} from '../../../components'
import Form from './Form'
import { handleLogin, isLoggedIn } from '../../../utils/auth'

class LoginRoute extends React.Component {
  state = {
    username: ``,
    password: ``,
  }

  handleUpdate(event) {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  componentDidMount() {
    var el = document.getElementsByTagName('input')[1] // input[0] is search
    el.focus()
  }

  handleSubmit(event) {
    event.preventDefault()
    handleLogin(this.state)
  }

  render() {
    if (isLoggedIn()) {
      navigate(`/pros/manuals`)
    }
    return (
      <GlobalLayout noindex>
        <h1>Professionals</h1>
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
        <OrderSpecifics/>
      </GlobalLayout>
    )
  }
}


const OrderSpecifics = ()=> {
  return(
    <div style={{textAlign: 'center', background: 'var(--mainMcc)'}} >

      <hr style={{marginBlock: '1rem'}}/>
      <h2>Order Specifics</h2>
      <div>
        <ul data-bullet-list>
          <li>
            <p>Please note we have a $150 minimum order.</p>
          </li>
          <li>
            <p>Orders shipped via UPS within 1-3 business days</p>
          </li>
          <li>
            <p>MC, Visa, American Express, and Discover are accepted</p>
          </li>

        </ul>
      </div>
      <hr style={{marginBlock: '1rem'}}/>
        <OnlineOrders/>

    </div>
  )
}
const OnlineOrders = () => {
  return (
    <div style={{background: 'var(--mainMcc)', textAlign: 'center', paddingBlockStart: '1rem' }}>
          {/* GET ACCESS TO ORDER */}
          <p style={{fontStyle: 'italic', paddingBottom: '.2rem'}}> If you need a login to place online orders contact us - <a href="mailto:customerservice@michelecorley.com?subject=I%20Need%20Online%20Ordering%20Access&body=Please%20include%20your%20name,%20spa,%20phone%20number%20and%20other%20important%20details%20below." >customerservice@michelecorley.com</a></p>

      <p>
If you already have a login click the button below to place online orders.
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '70%', margin: '0 auto 1rem', flexFlow: 'row wrap', gap: '.75rem', }} >
          {/* NOWCOMMERCE */}
          <a href="https://portal.nowcommerce.com/custsignin.aspx?ID=99867" target="_blank" rel="noreferrer" className="btn" >Place Online Order</a>


        </div>

      <hr/>
      </div>

  )
}

export default LoginRoute
