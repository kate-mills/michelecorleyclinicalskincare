import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  const asterisk = <span className={'asterisk'}>&lowast;</span>
  return (
    <StyledForm>
      <h3 style={{ fontSize: '43px' }} className="poppy g-txt-center">
        CONTACT US
      </h3>
      <div className={'center'}>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className={'form'}
          action="/success"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">{asterisk}Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className={'formControl'}
              ref={input => input && input.focus()}
              required
            />
          </div>
          <div>
            <label htmlFor="email">{asterisk}Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className={'formControl'}
              required
            />
          </div>
          <div>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className={'formControl'}
            />
          </div>
          <div>
            <label htmlFor="message">{asterisk}Message:</label>
            <textarea
              name="message"
              id="message"
              rows="7"
              className={'formControl'}
              placeholder="Hello there..."
              required
            />
          </div>
          <div>
            <label htmlFor="reference">
              {asterisk}How Did You Hear About Us?
            </label>
            <select
              name="reference"
              id="reference"
              className={'formControl'}
              required
              default={'Internet Search'}
            >
              <option value="Internet Search">Internet Search</option>
              <option value="Licensed Professional">
                Licensed Professional
              </option>
              <option value="Friend"> Friend</option>
              <option value="Trade Show"> Trade Show</option>
              <option value="Other"> Other</option>
            </select>
          </div>
          <div>
            <label htmlFor="license">Professional License Num:</label>
            <input
              type="text"
              name="license"
              id="license"
              className={'formControl'}
            />
          </div>
          <div>
            <label htmlFor="website">Website:</label>
            <input
              type="url"
              name="website"
              id="website"
              className={'formControl'}
            />
          </div>
          <div>
            <input type="submit" value="send" className={'submit'} />
          </div>
        </form>
      </div>
    </StyledForm>
  )
}
const StyledForm = styled.section`
  & .center {
    width: 100%;
    margin: 0 auto;
  }
  @media screen and (min-width: 992px) {
    & .center {
      width: 100%;
      margin: 0 auto;
    }
  }
  & label {
    display: block;
    font-size: 17px;
    margin-block-end: 0.5rem;
    text-transform: capitalize;
    & .asterisk {
      color: var(--poppy);
      padding-inline-end: 2px;
    }
  }
  & .formControl,
  & .submit {
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    width: 100%;
  }
  & .submit {
    background-color: var(--mainMcc);
    border-color: var(--darkGrey);
    color: var(--mainBlack);
    text-transform: capitalize;
    transition: var(--mainTransition);
    &:hover,
    &:active,
    &:focus {
      background: var(--mainWhite);
      cursor: pointer;
      outline: none;
      transition: var(--bgTransition);
    }
  }
`
export default ContactForm
