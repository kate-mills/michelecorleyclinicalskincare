import React from 'react'
import { navigate } from '@reach/router'

import { PATH_DTL } from '../../../constants/pro-info'
import styled from 'styled-components'
import { BasicEmail, BasicPhone } from '../../../components'
import Container from './Container'

const Form = ({ handleSubmit, handleUpdate, className }) => (
  <StyledContainer title={'Professional Login'} className={className}>
    <p className={'login-instructions'}>
      Pros, contact us at <BasicPhone />
      or
      <BasicEmail subject="Professional login and password" fontWeight="600" />
      to access to our exclusive information.
    </p>
    <form
      className={'form'}
      method="post"
      onSubmit={event => {
        handleSubmit(event)
        navigate(`${PATH_DTL.private.path}`)
      }}
    >
      <label className={'form-label'}>
        Username
        <input
          className={'form-input'}
          autoCapitalize="off"
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className={'form-label'}>
        Password
        <input
          className={'form-input'}
          autoCapitalize="off"
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className={'form-button btn'} type="submit" value="Log In" />
    </form>
  </StyledContainer>
)
const StyledContainer = styled(Container)`
  & {
    & .login-instructions {
      margin: 0 auto;
      padding-block-end: 1rem;
      text-align: center;
      & a {
        color: var(--poppyDull);
        padding-inline: 3px;
      }
    }
    h2{
      text-align: center;
    }
    & .form {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-block-end: 1rem;
      &-label {
        display: block;
        letter-spacing: 0.125em;
        margin-block: 0.25rem;
        text-transform: uppercase;
      }
      &-input {
        border: 1px solid #ccc;
        border-radius: 5px;
        display: block;
        font-size: 1rem;
        padding: 0.45rem;
      }
      &-button{
        margin-block-start: 1rem;
        font-weight: 600;
      }
    }
  }
`

export default Form
