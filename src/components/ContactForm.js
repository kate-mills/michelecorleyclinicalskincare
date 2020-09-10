import React from 'react'
import styles from '../css/contact.module.css'

const Contact = () => {
  const asterisk = <span style={{color: "var(--poppy)", paddingRight: "2px"}}>&lowast;</span>
  return (
    <section className={styles.contact}>
      <h2 style={{fontSize: "43px"}}className="poppy txt-center">CONTACT US</h2>
      <div className={styles.center}>
        <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="contact" className={styles.form} action="/success">
          <input type="hidden" name="bot-field"/>
          <input type="hidden" name="form-name" value="contact" />
          <div>
            <label htmlFor="name">{asterisk}Name:
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
            <label htmlFor="email">{asterisk}Email:
              <input type="email"
                name="email"
                id="email"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="phone">{asterisk}Phone:
              <input type="tel"
                name="phone"
                id="phone"
                className={styles.formControl}
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="subject">{asterisk}Subject:
              <input type="text" name="subject" id="subject" className={styles.formControl} required/>
            </label>
          </div>
          <div>
            <label htmlFor="license">Professional License Number:
              <input type="text" name="license" id="license" className={styles.formControl} />
            </label>
          </div>
          <div>
            <label htmlFor="message">{asterisk}Message:
              <textarea
                name="message"
                id="message"
                rows="7"
                className={styles.formControl}
                placeholder="Hello there..."
                required
              />
            </label>
          </div>
          <div>
            <label htmlFor="reference">{asterisk}How Did You Hear About Us?:
              <select type="text" name="reference" id="reference" className={styles.formControl} required>
                <option value="Licensed Professional">Licensed Professional</option>
                <option value="Internet Search">Internet Search</option>
                <option value="Friend">Friend</option>
                <option value="Trade Show">Trade Show</option>
                <option value="Other">Other</option>
              </select>
            </label>
          </div>
          <div>
            <label htmlFor="website">Website:
              <input type="url" name="website" id="website" className={styles.formControl}
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
export default Contact
