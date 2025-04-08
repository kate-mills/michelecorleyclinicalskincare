import React from 'react'
import styled from 'styled-components'

const ContactForm = () => {
  const asterisk = <span className={'asterisk'}>&lowast;</span>
  return (
    <StyledForm>
      <h3 style={{ fontSize: '43px' }} className="poppy txt-center">
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
            <label htmlFor="name">
              {asterisk}Name:
              <input
                type="text"
                name="name"
                id="name"
                className={'formControl'}
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
                className={'formControl'}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">
              {asterisk}Phone:
              <input
                type="tel"
                name="phone"
                id="phone"
                className={'formControl'}
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject">
              {asterisk}Subject:
              <input
                type="text"
                name="subject"
                id="subject"
                className={'formControl'}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="license">
              Professional License Number:
              <input
                type="text"
                name="license"
                id="license"
                className={'formControl'}
              />
            </label>
          </div>
          <div>
            <label htmlFor="message">
              {asterisk}Message:
              <textarea
                name="message"
                id="message"
                rows="7"
                className={'formControl'}
                placeholder="Hello there..."
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="reference">
              {asterisk}How Did You Hear About Us?:
              <select
                type="text"
                name="reference"
                id="reference"
                className={'formControl'}
                required
              >
                <option value="Internet Search">Internet Search</option>
                <option value=" Licensed Professional"> Licensed Professional</option>
                <option value=" Friend"> Friend</option>
                <option value=" Trade Show"> Trade Show</option>
                <option value=" Other"> Other</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="website">
              Website:
              <input
                type="url"
                name="website"
                id="website"
                className={'formControl'}
              />
            </label>
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
    font-size: 17px;
    text-transform: capitalize;
    display: block;
    margin-bottom: 0.5rem;
    & .asterisk{
      color: var(--poppy);
      paddingRight: 2px; 
    }
  }

  & .formControl,
  & .submit {
    width: 100%;
    font-size: 1rem;
    margin-bottom: 1rem;
    padding: 0.375rem 0.75rem;
    border: 1px solid var(--darkGrey);
    border-radius: 0.25rem;
  }
  & .submit {
    background-color: var(--mainMcc);
    border-color: var(--darkGrey);
    text-transform: capitalize;
    color: var(--mainBlack);
    transition: var(--mainTransition);
  }
  & .submit:hover,
  & .submit:active,
  & .submit:focus {
    background: var(--mainWhite);
    outline: none;
    transition: var(--bgTransition);
  }
  & .submit:hover {
    cursor: pointer;
  }
`
export default ContactForm
