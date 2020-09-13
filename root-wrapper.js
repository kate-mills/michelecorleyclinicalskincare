import React from "react"

import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
/* =============
    Variables
   ============== */

:root{

  --darkGrey: #cfcfcf; /* form borders */
  --mainBlack: #5d5252;
  --mainMcc: #dcdcdc;
  --mainWhite: #fff;
  --mainSpacing: 0.0625rem;
  --pinkHilight:#E9DBD8;
  --poppy: #a5655f;
  --poppyDark: #844D49;
  --mainFont: Montserrat, sans-serif;
  --bodyLineHeight: 1.8em;
  --headingLineHeight: 1.4em;
  --bgTransition: background-color 100ms linear;
  --mainTransition: all .1s linear;
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


`


export const wrapRootElement = ({element}) => {
  return(
  <>
    <GlobalStyle />
    {element}
  </>
  )
}
