import React from 'react'
import styled from 'styled-components'

const SignupForm = ({ className }) => {
  const asterisk = <span className="asterisk">&lowast;</span>
  return (
    <section className={`${className}`}>
      <h3 className="txt-center">Signup Here</h3>
      <div className={`center`}>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="signup"
          action="/signup-success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="signup" />
          <div>
            <label htmlFor="name">
              {asterisk}Name:
              <input
                type="text"
                name="name"
                id="name"
                className={`formControl`}
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
                className={`formControl`}
                required
              />
            </label>
          </div>
          <div>
            <input type="submit" value="signup" className={`submit`} />
          </div>
        </form>
      </div>
    </section>
  )
}
export default styled(SignupForm)`
  & {
    .center {
      width: 100%;
      margin: 0 auto;
    }
    .asterisk {
      color: var(--poppy);
      padding-right: 2px;
    }
    .txt-center {
      color: var(--poppy);
      font-size: 2.3rem;
    }
    label {
      font-size: 17px;
      text-transform: capitalize;
      display: block;
      margin-bottom: 0.5rem;
    }
    .formControl,
    .submit {
      width: 100%;
      font-size: 1rem;
      margin-bottom: 1rem;
      padding: 0.375rem 0.75rem;
      border: 1px solid var(--darkGrey);
      border-radius: 0.25rem;
    }
    .submit {
      background-color: var(--mainMcc);
      border-color: var(--darkGrey);
      text-transform: capitalize;
      color: var(--mainBlack);
      transition: var(--mainTransition);
      cursor: pointer;
    }
    .submit:hover,
    .submit:active,
    .submit:focus {
      background: var(--mainWhite);
      outline: none;
      transition: var(--bgTransition);
    }
    @media screen and (min-width: 992px) {
      .center {
        width: 100%;
        margin: 0 auto;
      }
    }
  }
`
