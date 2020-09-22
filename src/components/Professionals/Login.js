import React from 'react'
import { navigate } from 'gatsby'
import Layout from '../../components/layout'
import Form from './Form'
import { handleLogin, isLoggedIn } from '../../utils/auth'

class Login extends React.Component {
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
      navigate(`/app/professionals`)
    }

    return (
      <Layout>
      <Form
        handleUpdate={e => this.handleUpdate(e)}
        handleSubmit={e => this.handleSubmit(e)}
      />
      </Layout>
    )
  }
}

export default Login
