import React from "react"
import { navigate } from "@reach/router"

const Form =  ({ handleSubmit, handleUpdate }) => (
  <form
    className={'form'}
    method="post"
    onSubmit={event => {
      handleSubmit(event)
      navigate(`/pros/manuals`)
    }}
  >
    <h1>Public Form</h1>
    <p>
      For this demo, please log in with the username <code>gatsby</code> and the
      password <code>demo</code>.
    </p>
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
)

export default Form
