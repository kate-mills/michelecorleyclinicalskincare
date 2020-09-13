import React from "react"

import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
/* =============
    Variables
   ============== */

:root{

  --clr-primary-5: hsl(21, 62%, 45%);

  --darkGrey: #cfcfcf; /* form borders */
  --mainBlack: #5d5252;
  --mainMcc: #dcdcdc;
  --mainWhite: #fff;
  --mainSpacing: 0.0625rem;
  --pinkHilight:#E9DBD8;
  --poppy: #a5655f;
  --poppyLow: rgb(165 101 95 / .8);
  --poppyHigh: #ab484f;
  --poppyDark: #844D49;
  --mainFont: Montserrat, sans-serif;
  --bodyLineHeight: 1.8em;
  --headingLineHeight: 1.4em;

  --bgTransition: background-color 100ms linear;
  --mainTransition: all 0.1s linear;
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}


/* =============
   Global Styles
   ============== */

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: var(--mainFont);
}
html {
  display: block;
  font-family:var(--mainFont);
  font-size: 100%;
  margin: 0;
  padding: 0;
}
body {
    background: var(--mainMcc);
    background-color: var(--mainMcc);
    background-image: none;
    background-size: auto;
    background-repeat: repeat;
    color: var(--mainBlack);
    display: block;
    font-family:var(--mainFont);
    font-style: normal;
    font-size: 16px;
    font-weight: 300;
    line-height: var(--bodyLineHeight);
    overflow: scroll;
    text-transform: none;
    text-decoration: none;
    margin: 0;
    min-height: 100vh;
}
main{
  background: var(--mainWhite);
  background-color: var(--mainWhite);
  border: 0;
  border-radius: 25px;
  color: var(--mainBlack);
  font-family: var(--mainFont);
  font-size: 16px;
  font-weight: 300;
  margin: 0 auto;
  padding: 0;
  width: 100%;
}
h1, h2, h3, h4, h5, h6 {
  font-family: var(--mainFont);
  font-weight: 300;
  line-height: var(--headingLineHeight);
  margin: 0.5em 0 0.3em;
  color: var(--mainBlack);
}
h1 {
  font-size: 43px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: var(--mainSpacing);
  margin: 20px auto;
}
h2, h3{
  font-size: 30px;
  font-weight: 300;
}
a {
  color: var(--mainBlack);
  cursor: pointer;
  text-decoration: none;
}
a:focus{
  outline: none;
  background: inherit;
  text-decoration: none;
}
nav li {
  list-style: none;
}
nav  li  a,
nav button.plus-btn,
nav span.professionals{
    color: var(--mainBlack);
    font-family:var(--mainFont);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    letter-spacing: var(--mainSpacing);
    line-height: var(--bodyLineHeight);
    text-transform: uppercase;
}
hr {
  background: rgba(0, 0, 0, 0.1);
  border: none;
  height: 1px;
  margin: 0 auto;
}
.btn {
  border: 2px solid var(--poppyLow);
  background: var(--mainWhite);
  border-radius: 10px;
  box-shadow: var(--light-shadow);
  color: var(--poppyLow);
  cursor: pointer;
  display: inline-block;
  letter-spacing: var(--mainSpacing);
  padding: 0.8rem 1.6rem;
  text-transform: uppercase;
  text-decoration: none;
  transition: var(--mainTransition);
  outline: none;
}
.btn:hover,
.btn:active,
.btn:focus {
  background: var(--mainWhite);
  color: var(--poppyHigh);
  border: 2px solid var(--poppyHigh);
  box-shadow: var(--dark-shadow);
}
.btn-black{
  background: var(--mainWhite);
  border: 2px solid var(--poppyLow);
  color: var(--mainBlack);
}

`


export const wrapRootElement = ({element}) => {
  return(
  <>
    <GlobalStyle />
    {element}
  </>
  )
}
