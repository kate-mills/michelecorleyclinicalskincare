import React from 'react'
import { navigate } from '@reach/router'

import { handleLogin } from '../../../utils/auth'

import styled from 'styled-components'
import { BasicEmail, BasicPhone } from '../../../components'

const Form = ({ className }) => {
  const [user, setUser] = React.useState({
    username: '',
    password: '',
  })

  const handleUpdate = e => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    let pro = await handleLogin(user)
    console.log('awaited pro', pro)
  }
  return (
    <StyledDiv className={className}>
      <p className={'login-instructions'}>
        Pros, contact us at <BasicPhone className="poppy9"/> or{' '}
        <BasicEmail
          className="poppy9"
          subject="Professional login and password"
          fontWeight="600"
        />
        to access to our exclusive information.
      </p>
      <form
        className={'form'}
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/pros/manuals/`)
        }}
      >
        <label className={'form-label'}>
          <span className="astrisk poppy9">*</span>
          USERNAME
          <input
            className={'form-input'}
            autoCapitalize="off"
            autoComplete="off"
            type="text"
            name="username"
            onChange={handleUpdate}
            required
          />
        </label>
        <label className={'form-label'}>
          <span className="astrisk">*</span>
          PASSWORD
          <input
            className={'form-input'}
            autoCapitalize="off"
            autoComplete="off"
            type="password"
            name="password"
            onChange={handleUpdate}
            required
          />
        </label>
        <input
          className={'form-button btn bold'}
          type="submit"
          value="Log In"
        />
      </form>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  & {
    text-align: center;
    & .login-instructions {
      padding-block-end: 1rem;
      & a {
        padding-inline: 3px;
      }
    }
    & .form {
      display: flex;
      align-items: center;
      flex-direction: column;
      &-button {
        margin-block: 1rem;
      }
      &-input {
        border: 1px solid #ccc;
        border-radius: 5px;
        display: block;
        font-size: 1rem;
        padding: 0.45rem;
      }
      &-label {
        display: block;
        letter-spacing: 0.125em;
        margin-block: 0.25rem;
        text-align: left;
        > span.astrisk {
          position: relative;
          top: 4px;
        }
      }
    }
  }
`

export default Form
