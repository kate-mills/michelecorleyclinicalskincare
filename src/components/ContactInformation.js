import React from 'react'
import styled from "styled-components"

export const UnformattedEmail = (props)=>{
  let fmtSubject =props.subject.split(' ').join("%20")
  return (
    <a className="full-email"href={`mailto:customerservice@michelecorley.com?subject=${fmtSubject}`}>
      <span className="email-prefix" style={{}}>{props.prefix}</span>
      <span className="email-suffix" style={{}}>{props.suffix}</span>
      <span className="email-ext"    style={{}}>{props.ext}</span>
    </a>
  )
}

UnformattedEmail.defaultProps = {
  subject: 'Contact Info',
  prefix: 'customerservice',
  suffix: '@michelecorley',
  ext: '.com'
}

export const Phone = ({areaCode, prefix, suffix})=>{
  return(
      <a href={`tel:+${areaCode}${prefix}${suffix}`} rel="nofollow">
        {`(${areaCode}) ${prefix} - ${suffix}`}
    </a>
  )
}
Phone.defaultProps = {
  areaCode: "707",
  prefix: "637",
  suffix: "4997"
}

const ContactInfo = (props) => {
  return (
    <Wrapper>
      <div class="flex-container" style={{textAlign: "center"}}>
        <h3>Get in touch </h3>
        <div className="flex-item">
          <span className="day">Monday</span>
          <span className="space-lr">{`-`}</span>
          <span className="day">Friday</span>
          <span className="space-r">{`: `}</span>
          <time dateTime="10:00">10 AM</time>
          <span className="space-lr">{`-`}</span>
          <time dateTime="16:00">4 PM</time>
       </div>
      </div>

      <div class="grid-container">
        <div class="grid-item key">Phone:</div>
        <div class="grid-item phone value">
          <Phone/>
        </div>
        <div class="grid-item key">Email:</div>
        <div class="grid-item value">
          <div>
            <UnformattedEmail/>
          </div>
        </div>
        <div class="grid-item key">Address:</div>
        <div class="grid-item value">
          <address style={{whiteSpace: "pre-line"}}>
            <span className="street-address" style={{ paddingLeft: "5px", display: "inline-block"}}>3055 Jefferson St.</span>
            <span className="suite" style={{ paddingLeft: "5px", display: "inline-block"}}>Suite 3</span>
            <br/>
            <span className="city" style={{ paddingLeft: "5px", display: "inline-block"}}>Napa</span>
            <span className="state" style={{ paddingLeft: "5px", display: "inline-block"}}>Ca.</span>
            <span className="zip" style={{paddingLeft: "5px", display: "inline-block"}}>94558</span>
          </address>
        </div>
     </div>
  </Wrapper>
    )
}

const Wrapper = styled.aside`
  & {
    background: var(--mainMcc);
    border: 10px solid var(--mainMcc);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    padding: 5px 0;
    white-space: pre-line;
  }
  & > *, & > * > *{
    background: var(--mainWhite);
    color: var(--mainBlack);
  }
  & > .flex-container{
    align-items: center;
    background: var(--mainWhite);
    border: 1px solid var(--mainWhite);
    border-radius: 10px;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 1em 0 1.9em;
    margin-bottom: 10px;
  }
  & > .flex-container > *{
    display: inline-block;
    width: 100%;
  }
  & > div.grid-container{
    border-radius: 10px;
    border: 1px solid var(--mainMcc);
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto;
    padding: 1em 0 1em 1em;
  }
  & .grid-item {
    padding: 5px;
  }
  & > .grid-container{
    width: 100%;
  }  
  & .grid-item.key,
  & .grid-item.value{
    display: flex;
    align-items: center;
    justify-content: start;
  }
  & .grid-item.value .full-email > *,
  & .grid-item.value > * {
    display: inline-block;
    padding-right: 0;
  }
  &  .grid-item.value{
    letter-spacing: 1px;
  }
  &  span.space-r{
    padding-right: 6px !important;
  }
  &  span.space-lr{
    padding-left: 5px !important;
    padding-right: 5px !important;
  }

  @media (max-width: 500px){
    & {
      border 5px solid var(--mainMcc);
    }
    & > * :not(h3){
      font-size: 14px;
    }
  }
`

export default ContactInfo;
