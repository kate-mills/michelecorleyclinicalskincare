import React from 'react'
import { navigate } from 'gatsby'
import Container from './components/Container'
import Form from './components/Form'
import { handleLogin, isLoggedIn } from '../../utils/auth'

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
      navigate(`/pros/manuals`)
    }

    return (
      <Container>
        <Form
          handleUpdate={e => this.handleUpdate(e)}
          handleSubmit={e => this.handleSubmit(e)}
        />
      </Container>
    )
  }
}

export default PublicLogin
