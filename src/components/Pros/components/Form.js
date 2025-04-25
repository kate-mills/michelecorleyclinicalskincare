import React from 'react'
import { navigate } from '@reach/router'

import { PATH_DTL } from '../../../constants/pro-info'
import styled from 'styled-components'
import { BasicEmail, BasicPhone } from '../../../components'

const Form = ({ handleSubmit, handleUpdate, className }) => (
  <StyledDiv className={className}>
    <p className={'login-instructions'}>
      Pros, contact us at <BasicPhone /> or <BasicEmail block={true} subject="Professional login and password" fontWeight="600" />
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
        <span className="astrisk">*</span>
        USERNAME
        <input
          className={'form-input'}
          autoCapitalize="off"
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
          type="password"
          name="password"
          onChange={handleUpdate}
          required
        />
      </label>
      <input className={'form-button btn'} type="submit" value="Log In" />
    </form>
  </StyledDiv>
)
const StyledDiv = styled.div`
  & {
     text-align: center;
    & .login-instructions {
      margin: 0 auto;
      padding-block-end: 1rem;
      & a {
        color: var(--poppyDull);
        padding-inline: 3px;
      }
    }
    & .form {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-block-end: 2rem;
      &-button{
        margin-block-start: 1rem;
        font-weight: 600;
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
        > span.astrisk{
          color: var(--poppy);
          position: relative;
          top: 4px;
        }
      }
    }
  }
`

export default Form
