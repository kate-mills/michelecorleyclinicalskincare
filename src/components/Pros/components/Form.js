import React from 'react'
import { navigate } from '@reach/router'

import { PATH_DTL } from '../../../constants/pro-info'
import styled from 'styled-components'
import {BasicEmail, BasicPhone} from '../../../components'
import Container from './Container'

const Form = ({ handleSubmit, handleUpdate, className }) => (
  <StyledContainer title={'Professional Login'} className={className}>
    <p>
      Pros, contact us at
      <span className="pi"><BasicPhone/></span>
      or <BasicEmail subject="Professional login and password" fontWeight="600" />
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
      <label className={'form__label'}>
        Username
        <input
          className={'form__input'}
          autoCapitalize="off"
          type="text"
          name="username"
          onChange={handleUpdate}
        />
      </label>
      <label className={'form__label'}>
        Password
        <input
          className={'form__input'}
          autoCapitalize="off"
          type="password"
          name="password"
          onChange={handleUpdate}
        />
      </label>
      <input className={'form__button'} type="submit" value="Log In" />
    </form>
  </StyledContainer>
)
const StyledContainer = styled(Container)`
  &{
    
    .pi{
      padding-inline: 0.5rem;
    }
  }
`

export default Form
