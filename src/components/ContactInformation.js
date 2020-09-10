import React from 'react'
import styled from "styled-components"
import Email from './Email'

const ContactInfo = (props) => {
  return (
    <Wrapper>
    <div className="contact">
      <h3>Get in touch </h3>
      <div>
        <h4>Phone:</h4>
        <p><a style={{textDecoration: "none"}}
            href="tel:1-707-637-4996">(707) 637-4996</a>
        </p>
      </div>
      <div>
        <h4>Email:</h4>
        <p><Email/></p>
      </div>
      <div>
        <h4>Address:</h4>
        <address style={{textAlign: "right"}}>
          <p>3055 Jefferson St. Suite 3</p>
          <p>Napa, CA 94558</p>
        </address>
      </div>
    </div>
    <div className="hours">
      <h3>Our Hours</h3>
      <div>
        <h4>Monday - Friday:</h4>
          <time dateTime="10:00">10 AM</time>
          {` - `}
          <time dateTime="16:00">4 PM</time>
      </div>
    </div>
  </Wrapper>
    )
}

const Wrapper = styled.aside`
  & > div.contact,
  & > div.hours {
    margin: 15px auto;
  }
  & > div.contact h3,
  & > div.hours h3 {
    background: var(--mainMcc);
    margin: 10px auto;
    text-align: center;
    white-space: pre-line;
  }
  & > div.contact > div,
  & > div.hours > div{
    display: flex;
    flex-direction: row;
  }
  & > div.contact > div{justify-content:start;}
  & > div.hours >   div{justify-content:center;}
  & > div.contact > div h4{
    color: var(--poppy);
    line-height: 29px;
    margin: 0;
    margin-left: 30px;
    padding: 0 0 0.2rem;
    min-width: 75px;
    white-space: pre-line;
    text-align: left;
  }
  & > div.contact > div p{
    padding: 0 0 0.2rem;
    margin: 0 5px 0;
    white-space: pre-line;
  }
  & > div.contact > div address{
    padding: 0 0 0.2rem;
    white-space: pre-line;
  }
  & > div.hours > div h4,
  & > div.hours > div time{
    line-height: 29px;
    margin: 0 5px; 
    width: fit-content;
  } 
  & > div.contact > div  span.email-suffix{
    display: inline-block;
  }

  @media (max-width: 567px) {
    & > div.contact{
      width: 90vw;
      margin: 0 auto;
    }
    & > div.contact > div{
      flex-wrap: wrap;
      margin: 0 auto;
      width: 100%;
    }
  }
  @media(max-width: 900px){

  }
`

export default ContactInfo;
