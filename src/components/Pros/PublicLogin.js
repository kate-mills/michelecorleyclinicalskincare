import React from 'react'
import { navigate } from 'gatsby'
import { handleLogin, isLoggedIn } from '../../utils/auth'
import { PATH_DTL } from '../../constants/pro-info'

import Form from './components/Form'

class PublicLogin extends React.Component {
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
      navigate(`${PATH_DTL.private.path}`)
    }

    return (
      <Form
        handleUpdate={e => this.handleUpdate(e)}
        handleSubmit={e => this.handleSubmit(e)}
      />
    )
  }
}

export default PublicLogin
