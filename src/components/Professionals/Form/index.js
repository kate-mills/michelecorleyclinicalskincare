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
      <SEO
        title={`Professionals Login`}
        image={'https://michelecorleyclinicalskincare.com/logo.jpg'}
      />
      <p className={styles[`form__instructions`]}>
        Professionals, please contact us at{' '}
        <span className={styles[`phone`]}>{phone}</span>
        or <Email subject="Professional login and password" fontWeight="600" />{' '}
        for access to our exclusive information.
      </p>
      <form
        className={styles.form}
        method="post"
        onSubmit={event => {
          handleSubmit(event)
          navigate(`/app/education`)
        }}
      >
        <label htmlFor="username" className={styles[`form__label`]}>
          Username
          <input
            focus="true"
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
