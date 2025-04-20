import React from 'react'
import { navigate } from 'gatsby'
import ViewGbl from '../components/ViewGbl'
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
      <ViewGbl>
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </ViewGbl>
    )
  }
}

export default LoginRoute
