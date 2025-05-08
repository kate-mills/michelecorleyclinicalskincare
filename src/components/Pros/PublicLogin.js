import React from 'react'
import { navigate } from '@reach/router'
import { handleLogin, isLoggedIn } from '../../utils/auth'

import Container from './components/Container'
import Form from './components/Form'
import Orders from './components/Orders'

class PublicLogin extends React.Component {
  state = {
    username: ``,
    password: ``,
    name: ``,
  }
  handleUpdate = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  handleSubmit = e => {
    e.preventDefault()
    handleLogin(this.state)
  }
  componentDidMount = () => {
    var el = document.getElementsByTagName('input')[1]
    el.focus() //idx 0 is search
  }
  render() {
    if (isLoggedIn()) {
      navigate(`/pros/manuals/`)
    }
    return (
      <Container title="Professionals Login">
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
        <Orders />
      </Container>
    )
  }
}

export default PublicLogin
