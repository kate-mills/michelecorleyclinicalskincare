import React from 'react'
import styled from 'styled-components'
import { FaShoppingCart } from 'react-icons/fa'

import imgUrl from '../../../images/searchicon.png'

export const StyledSpaWebstoreBadge = ({ className }) => {
  return (
    <SpaWebstoreBadgeWrapper>
      <div>
        <FaShoppingCart />
      </div>
    </SpaWebstoreBadgeWrapper>
  )
}

const SpaWebstoreBadgeWrapper = styled.div`
  & {
    position: relative;
    display: inline;
    div {
      width: 0px;
      display: inline;
      > svg {
        position: absolute;
        left: -35px;
        color: var(--poppyDark);
        background: rgb(34 180 229 / 17%);
        font-size: 30px;
        border-radius: 50%;
        padding: 7px;
        display: table;
      }
    }
  }
`
export const StyledSearchResults = styled.section`
  & {
    font-family: nobel, sans-serif;
    margin: 0 auto;
    border-bottom: 0.556666px solid var(--offWhite);
    div.hide {
      display: none;
    }
    div.search_results_count {
      padding-inline-start: 6px;
      h5 {
        font-size: 1rem;
        margin-inline-end: 2px;
        line-height: 2;
        height: 1.5rem;
        padding-left: 36px;
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
      padding: 12px 20px 12px 40.8px;
      transition: width 0.4s ease-in-out;
      -webkit-transition: width 0.4s ease-in-out;
      width: 40%;
    }
    input#StoreLocator:active,
    input#StoreLocator:focus {
      width: 100%;
      border-color: var(--poppyDark);
    }
    input#StoreLocator.input-err,
    input#StoreLocator.input-err:active,
    input#StoreLocator.input-err:focus {
      border-color: var(--errRed);
    }
    @media screen and (max-width: 767px) {
      input#StoreLocator {
        width: 85%;
      }
      input#StoreLocator:active,
      input#StoreLocator:focus {
        width: 100%;
      }
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
    >*, * {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      text-size: adjust: 100%;
      font-family: nobel, sans-serif;
      font-style: normal;
      font-stretch: 100%;
    }
    .spa {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      padding-inline: 1rem;
      padding-block: 1rem;
      padding-inline-start: 0;
      min-width: 100%;
      > .spa-name{
        h4{
          margin-left: 36px;
          font-family: nobel, sans-serif;
          font-weight: 700;
          font-size: 1rem;
          line-height: normal;
          color: rgb(78 78 78);
          -webkit-border-image: none;
          -webkit-font-smoothing: antialiased;
          text-size-adjust: 100%;
          word-break: break-word;
          background-color: var(--mainWhite);
          max-width: fit-content;
        }
      }
      > address {
        padding-left: 36px;
        font-style: normal;
        font-family: nobel, sans-serif;
        font-size: 15px;
        line-height: 1.2;
      }
      > .spa-address-location{
         margin-bottom: 1rem;
         div.locale div{
          display:inline-block;
          vertical-align: bottom;
          margin-block: 5px;
          margin-inline: 0px;

          span.highlight{
            background-color: var(--hiYellow);
          }
        }
        div.city{
          span.city-name{
            display: inline-block;
            vertical-align: bottom;
            :not(:first-of-type){
              padding-inline-start: 3px;
            }
          }
        }
        .zip.wrap-zip{
          display: contents;
          > span.zipcode{
            display:block;
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
        line-height: 1.5;
        div.web {
          position: relative;
          overflow: visible;
          span{
            background: var(--offWhite);
            min-width: fit-content;
            position: absolute;
            left: -30px;
            bottom: 2px;
            border-radius: 100%;
            padding: 2px;
            padding-inline: 6px;
            outline: 5px solid var(--mainWhite);
            svg{
              font-size: 13px;
              position: relative;
              right: 1px;
              vertical-align: middle;
              background: transparent;
              color: var(--poppyDark);
            }
          }
        }
        div{
          > a {
            position: relative;
            z-index: 5;
            margin-block-start: 1rem;
            font-weight: 400; 
            text-decoration-line: underline;
            text-decoration-style: solid;
            text-decoration-thickness: auto;
            vertical-align: bottom;
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
  }
`
