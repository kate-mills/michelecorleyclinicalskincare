import React from 'react'
import styles from '../css/contact.module.css'

const SignupForm  = () => {
  const asterisk = (
    <span style={{ color: 'var(--poppy)', paddingRight: '2px' }}>&lowast;</span>
  )
  return (
    <section className={styles.contact}>
      <h3 style={{ fontSize: '43px' }} className="poppy txt-center">
        SIGN-UP
      </h3>
      <div className={styles.center}>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="monthly-special-signup"
          className={styles.form}
          action="/signup-success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="monthly-special-signup" />
          <div>
            <label htmlFor="name">
              {asterisk}Name:
              <input
                type="text"
                name="name"
                id="name"
                className={styles.formControl}
                ref={input => input && input.focus()}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="email">
              {asterisk}Email:
              <input
                type="email"
                name="email"
                id="email"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <input type="submit" value="send" className={styles.submit} />
          </div>
        </form>
      </div>
    </section>
  )
}
export default SignupForm
