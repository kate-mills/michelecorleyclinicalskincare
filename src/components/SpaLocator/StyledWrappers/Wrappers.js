import React from 'react'
import styled from 'styled-components'
import { FiShoppingCart } from 'react-icons/fi'
import imgUrl from '../../../images/searchicon.png'

export const StyledSpaWebstoreBadge = ({ className }) => {
  return (
    <SpaWebstoreBadgeWrapper>
      <div>
        <FiShoppingCart />
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
        left: -25px;
        top: 2px;
        color: var(--poppyDark);
        background: aliceblue;
      }
    }
  }
`
export const StyledSearchResults = styled.section`
  & {
    font-family: nobel, sans-serif;
    margin: 0 auto;
    width: 85%;
    > .search_results_count {
      display: inline-block;
      vertical-align: middle;
      padding-inline-start: 0.5rem;
      min-height: 3.5rem;
      h5 {
        font-size: 1.2rem;
      }
    }
  }
`
export const StyledSpaLocatorForm = styled.form`
  & {
    margin: 0 auto;
    display: block;
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
      width: 40%;
    }
    input#StoreLocator:active,
    input#StoreLocator:focus {
      width: 85%;
      border-color: var(--poppyDark);
      background: var(--poppy);
      color: white;
      ::placeholder {
        color: var(--offWhite);
      }
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
    background:var(--lightGrey);
    border: .556666px solid var(--lightGrey);
    display: grid;
    gap: 2px 2.5633333px;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    *, > *{
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      overflow-y: clip;
    }
    li.spa {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0.5rem;
      padding-inline-start: 1rem;
      padding-inline-end:3rem;
      h4{
        margin: 0;
        margin-block-end: .5em;
        font-family: nobel, sans-serif;
        font-weight: 700;
        font-size: 15px;
        line-height: 25px;
        color: rgb(78 78 78);
        outline-offset: 0px;
        outline-width: 0px;
        -webkit-border-image: none;
        -webkit-font-smoothing: antialiased;
        text-size-adjust: 100%;
        word-break: break-word;
        vertical-align: baseline;
        outline-color: rgb(75 81 152);
        padding-left: 36px;
      }
      address {
        padding-left: 36px;
        font-style: normal;
        font-family: nobel, sans-serif;
        font-size: 15px;
        margin-bottom: 10px;
      }
      address.spa-address{
          line-height: normal;
      }
      address.spa-urls {
        line-height: 2;
        div.web{
          overflow: visible;
          overflow-y: clip;
        }
        div{
          > a {
            text-size: adjust: 100%;
            vertical-align: baseline;
            margin-block-start: 1rem;
            font-family: nobel, sans-serif;
            font-style: normal;
            font-stretch: 100%;
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
