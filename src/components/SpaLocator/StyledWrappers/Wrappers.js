import styled from 'styled-components'

import imgUrl from '../../../images/searchicon.png'

const JUSTIFY_LEFT_PX = '25px'

export const StyledSearchResults = styled.section`
  & {
    font-family: nobel, sans-serif;
    margin: 0 auto;
    div.search_results_message {
      h5 {
        font-size: 1rem;
        margin-inline-end: 2px;
        line-height: 2;
        height: 1.5rem;
        padding-left: ${JUSTIFY_LEFT_PX};
      }
    }
  }
`
export const StyledSpaLocatorForm = styled.form`
  & {
    margin: 0 auto;
    width: 100%;
    input#StoreLocator {
      outline: none;
      background-color: white;
      background-position: 10px 10px;
      background-repeat: no-repeat;
      background-image: url(${imgUrl});
      border: 2px solid #ccc;
      border-radius: 4px;
      display: block;
      font-size: 1rem;
      margin: 20px auto 0;
      padding: 12px 20px 12px 40px;
      transition: width 0.4s ease-in-out;
      -webkit-transition: width 0.4s ease-in-out;
      width: 85%;
    }
    input#StoreLocator:active,
    input#StoreLocator:focus {
      width: 100%;
      border-color: var(--poppyDark);
      padding: 12px 20px 12px ${JUSTIFY_LEFT_PX};
      background-image: none;
    }
    input#StoreLocator.input-err,
    input#StoreLocator.input-err:active,
    input#StoreLocator.input-err:focus {
      border-color: var(--errRed);
    }
  }
`

export const StyledSpaList = styled.ul`
  & {
    min-width: 100%;
    background:var(--offWhite);
    border: .556666px solid var(--offWhite);
    display: grid;
    gap: 2px 2.5633333px;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    > *, * {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-size: adjust: 100%;
      font-family: nobel, sans-serif;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -webkit-border-image: none;
      -webkit-font-smoothing: antialiased;
      text-size-adjust: 100%;
    }
    .spa {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      color: rgb(78 78 78);
      > .spa-name{
        padding-inline-start: ${JUSTIFY_LEFT_PX};
        h4{
          padding: 0;
          font-family: nobel, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          line-height: 1.2;
          -webkit-font-smoothing: antialiased;
          -webkit-border-image: none;
          -webkit-font-smoothing: antialiased;
          text-size-adjust: 100%;
          word-break: break-word;
        }
      }
      > address {
        padding-inline-start: ${JUSTIFY_LEFT_PX};
        padding-inline-end: 10px;
        margin-inline: 0;
        font-style: normal;
        font-family: nobel, sans-serif;
        font-size: 1rem;
        -webkit-font-smoothing: antialiased;
        -webkit-border-image: none;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        @media(min-width: 480px){
          font-size: .85rem;
        }
      }
      > .spa-address-location{

         padding-block-end: .3rem;
         text-transform: uppercase;
         div.locale div{
          display:inline-block;
          vertical-align: top;
          margin: 0;
          margin-block: 5px;
          span.city-name{
            display: inline-block;
            vertical-align: top;
            :not(:first-of-type){
              padding-inline-start:3px;
            }
          }
          span.highlight{
            background-color: var(--hiYellow);
          }
        }
        div.zip.wrap-zip{
          display: contents;
          > span.zipcode{
            display:block;
            width: fit-content;
          }
        }
        .space{
          display:inline-block;
          margin: 0;
          min-width: 3px;
          padding-right: 3px;
          margin-inline-end: 3px;
        }
      }
      > .spa-address-urls {
          position: relative;
          > div{
            line-height: normal;
            margin-block: .5rem;
            max-width: fit-content;
          }
        div.web {
          span{
            background: var(--poppy);
            border-radius: 100%;
            display:flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 4px;
            bottom: 6px;
            padding: 3px;
            z-index: 10;
            svg{
              position: relative;
              background: var(--poppy);
              color: var(--mainWhite);
              width: 100%;
              height: 100%;
            }
          }
        }
        & a {
          position: relative;
          z-index: 5;
          margin-block-start: 1rem;
          font-weight: 400;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-thickness: auto;
          vertical-align: top;
          letter-spacing: normal;
          line-height: inherit;
          text-decoration-color: var(--poppyDark);
          color: var(--poppyDark);
          :hover{
            text-decoration-color: var(--poppyHover);
            color: var(--poppyHover);
          }
        }
      }
    }
  }
`
