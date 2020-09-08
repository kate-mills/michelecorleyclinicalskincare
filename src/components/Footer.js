import React from "react"
import styled from "styled-components"
import socialLinks from "../constants/social"

import { screen } from "../css/js/media-functions"
import { setFlexContainer } from "../css/js/helper-styles"

const Footer = ({ className }) => {
  return (
    <footer className={className}>
      <hr/>
      <div className="clear"/>
      <div className="column">
        <div className="lg-text"><h3 style={{
          textTransform: "capitalize",
          color: "var(--mainBlack)", fontWeight:"400", lineHeight: "32px", fontSize: "21px", 
        textAlign: "center"}}>Follow us on</h3></div>
        <div className="row footer-icons">
          {socialLinks.map((item, index) => {
            return (
              <div className="icon" key={index}>
                <a
                  href={item.href}
                  aria-label={item.label}
                  className={item.class}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={item.style}>
                  {item.icon}
                </a>
              </div>
            )
          })}
        </div>
        <div className="row lg-text phone-email">
          <p style={{margin: "0", padding: "0 0 1.0em"}}>
            <span className="phone">707.637.4996</span>{` `}<span className="middot">&middot;</span>{` `}
              <a href="mailto:customerservice@michelecorley.com?Subject=Hello%20Michele!" target="_top" className="email"> 
              <span className="span1">customerservice</span><span className="email span2">@michelecorley.com </span></a>
          </p>
        </div>
        <div className="row sm-text">
          <p className="address">
            Michele Corley Company, 3055 Jefferson Street. Suite 3, Napa, CA
            94558
          </p>
        </div>
        <div className="row sm-text"> <p className="sm-text">All rights reserved. &copy;{new Date().getFullYear()}</p> </div>
      </div>
    </footer>
  )
}

const FooterWrapper = styled(Footer)`
  & {
    padding-top: 0px;
    padding-bottom: 20px;
    text-align: center;
    letter-spacing: 1px;
    white-space: initial;
  }
  & hr{
    background: var(--mainBlack);
    width: 80%;
    margin: 20px auto;

  }

  & div.row { width: 100%; ${setFlexContainer({})} }

  & div.column, & div.row {
    font-size: 16px;
    line-height: 19px;
    color: var(--mainBlack);
    font-weight: 400;
  }

  & div.row.footer-icons {  font-size: 28px; justify-content: space-around;line-height: unset; }
}
  a.instagram-logo{font-size: 0px;}
  a.instagram-logo img{height: 40px; width: 40px;}

  div.row.sm-text p { padding: 5px; }
  div.row.sm-text p.address {
    font-weight: 400;
    font-size: 13px;
  }
  & .sm-text{
    font-size: 13px;
  }

  div.phone-email{
    color: var(--mainBlack);
    font-size: 20px;
    margin-top: 10px;
    line-height: 22px; 
  }
  div.phone-email p {
    white-space: initial;
  }
  span.phone, a.email{
    text-decoration: none;
    font-weight: 400;
  }
  a.email{ font-size: 19px; }
  a.email span{display:inline;}
  div.row.sm-text{font-weight: 300;}
  ${screen.phone.phone`
    div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;}
    span.phone{ 
      display:block;
      font-size: 18px; 
      letter-spacing: 1.5px; 
      line-height: 30px;
      text-align: center;
    }
    a.email{ 
      display:block; 
      font-size: 17px;
      text-align: center;
    }
  `}
  ${screen.tablet.tablet` div.row.footer-icons{flex-direction: column;} .icon{margin: 20px;} `}

  @media (max-width: 700px){
    .middot{
      display:none;
    }
    .div-row{
      flex-direction: column;
      flex-wrap: wrap;
    }
    span.phone{
      display:block;
      line-height: 35px;}
  }
  @media (max-width: 325px) {
    a.email{font-size: 15px;}
  }

`
export default FooterWrapper
