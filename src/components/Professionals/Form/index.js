import React from 'react'
import styles from './form.module.css'
import { navigate } from '@reach/router'
import SEO from '../../FullSeo'
import Email from '../../Email'
import { ConstantContactInfo } from '../../../constants/contact-info'

export default ({ handleSubmit, handleUpdate }) => {
  const {Telephone: {phone}} = ConstantContactInfo

  return (
    <>
      <SEO title={`Professionals Login`} />
      <p className={styles[`form__instructions`]}>
        Pros, contact us at
        <span className={styles[`phone`]}>{phone}</span>
        or <Email subject="Professional login and password" fontWeight="600" />{' '}
        to access to our exclusive information.
      </p>

      <h3 className={styles[`form__header`]}>Education Login</h3>
      <form
        className={styles.form}
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/pro/manuals`)
        }}
      >
        <label htmlFor="username" className={styles[`form__label`]}>
          Username
          <input
            autoComplete="new-username"
            autoCapitalize="off"
            className={styles[`form__input`]}
            type="text"
            name="username"
            onChange={handleUpdate}
          />
        </label>
        <label htmlFor="password" className={styles[`form__label`]}>
          Password
          <input
            autoComplete="new-password"
            className={styles[`form__input`]}
            type="password"
            name="password"
            onChange={handleUpdate}
          />
        </label>
        <button className={`btn btn-form`} type="submit">
          Log in
        </button>
      </form>
    </>
  )
}
