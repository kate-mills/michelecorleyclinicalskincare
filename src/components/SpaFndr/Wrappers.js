import styled from 'styled-components'

const JUSTIFY_LEFT_PX = '25px'

export const StyledSearchResults = styled.section`
  & {
    min-height: 30px;
    margin: 0 auto;
    div.search_results_message {
      padding-left: ${JUSTIFY_LEFT_PX};
      margin-left: 0;
      h5 {
        font-style: normal;
        font-size: small;
        line-height: 3;
        margin-inline-start: 0;
        margin-inline-end: 2px;
        color: #70757a;
      }
    }
  }
`
export const StyledSpaLocatorForm = styled.form`
  & {
    margin: 0 auto;
    width: 100%;
    background-color: var(--mainWhite);
    input#StoreLocator {
      outline: none;
      background-color: white;
      background-position: 10px 10px;
      background-repeat: no-repeat;
      background-image: url(/searchicon.png);
      border: 2px solid #ccc;
      border-radius: 4px;
      display: block;
      font-size: 1rem;
      margin: 20px auto 0;
      padding: 12px 20px 12px 40px;
      transition: width 0.4s ease-in-out;
      -webkit-transition: width 0.4s ease-in-out;
      width: calc(100% - 45px);
    }
    input#StoreLocator:active,
    input#StoreLocator:focus {
      width: 100%;
      border-color: var(--poppyDark);
      padding-left: ${JUSTIFY_LEFT_PX};
      background-image: none;
    }
    input#StoreLocator.input-err,
    input#StoreLocator.input-err:active,
    input#StoreLocator.input-err:focus {
      border-color: firebrick;
    }
  }
`

export const StyledSpaList = styled.ul`
  & {
    background: var(--offWhite);
    border: 0.556666px solid #e9e9e9;
    white-space: nowrap;
    margin: 0 auto;
    width: 100%;
    @media (min-width: 700px) {
      display: grid;
      gap: 2px 2.5633333px;
      grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
      width: calc(100% + 15px);
      margin-left: -10px;
    }
    > *,
    * {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .spa {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      padding-inline-end: 1rem;
      border: 0.5566666px solid #e9e9e9;
      > .spa-name {
        padding-inline-start: ${JUSTIFY_LEFT_PX};
        padding-inline-end: 2rem;
        h4 {
          font-size: .8rem;
          font-style: normal;
          line-height: 1;
          padding: 0;
          padding-block-end: 8px;
          word-break: break-word;
          min-width: fit-content;
          overflow-wrap: normal;
          white-space: pre-wrap;
        }
      }
      > address {
        padding-inline-start: ${JUSTIFY_LEFT_PX};
        margin-inline: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: normal;
        > * {
          font-style: normal;
          font-size: 0.8125rem;
          line-height: 0.9;
        }
      }
      > address.spa-location {
        padding-block-end: 0.3rem;
        div.spa-addr-locality div {
          display: inline-block;
          vertical-align: top;
          margin: 0;
          margin-block: 5px;
          span.city-name {
            display: inline-block;
            vertical-align: top;
            :not(:first-of-type) {
              padding-inline-start: 3px;
            }
          }
          span.highlight {
            background-color: #e1e7ec96;
          }
        }
        div.zip.wrap-zip {
          display: contents;
          > span.zipcode {
            display: block;
            width: fit-content;
          }
        }
        .space {
          display: inline-block;
          margin: 0;
          min-width: 3px;
          padding-inline-end: 3px;
        }
      }
      > address.spa-urls {
        position: relative;
        > div {
          line-height: normal;
          margin-block: 0.5rem;
          max-width: fit-content;
        }
        div.web {
          span {
            background: #fff;
            position: absolute;
            left: 4px;
            padding-inline-end: 4px;
            svg {
              color: var(--darkGrey);
              font-size: 0.8rem;
            }
          }
        }
        & a {
          position: relative;
          margin-block-start: 1rem;
          text-decoration-line: underline;
          text-decoration-style: solid;
          text-decoration-thickness: auto;
          vertical-align: top;
          letter-spacing: normal;
          line-height: 1;
          :hover {
            text-decoration-color: var(--poppyDark);
            color: var(--poppyDark);
          }
        }
      }
    }
  }
`
