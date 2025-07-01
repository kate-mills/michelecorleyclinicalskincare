import styled from 'styled-components'

const JUSTIFY_LEFT_PX = '25px'

export const StyledSearchResults = styled.section`
  & {
    height: 30px;
    margin: 0 auto;
    div.search_results_message {
      padding-left: ${JUSTIFY_LEFT_PX};
      margin-left: 0;
      h5 {
        font-size: small;
        line-height: 2;
        margin-inline-start: 0;
        margin-inline-end: 2px;
      }
    }
  }
`
export const StyledSpaLocatorForm = styled.form`
  & {
    margin: 0 auto;
    text-align: center;
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
      margin: 20px auto 0;
      padding: 12px 20px 12px 40px;
      transition: width 0.4s ease-in-out;
      -webkit-transition: width 0.4s ease-in-out;
      width: calc(100% - 100px);
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

    *,
    > * {
      font-size: small;
      line-height: normal;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .spa {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      padding-inline-end: 1rem;
      border: 0.5566666px solid #e9e9e9;

      .spa-name,
      address {
        padding-inline-start: ${JUSTIFY_LEFT_PX};
        font-style: normal; /* address default italic */
        p.bold {
          font-size: 1rem;
          padding-block-end: 0.75rem;
        }
        &.spa-location {
          padding-block-end: 0.3rem;

          div.spa-addr-locality div {
            display: inline-block;
            vertical-align: top;
            margin: 5px 0;

            span.city-name {
              display: inline-block;
              vertical-align: top;
              :not(:first-of-type) {
                padding-inline-start: 3px;
              }
            }
            span.highlight {
              background-color: var(--offWhite);
            }
          }

          div.zip.block-zip {
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
        &.spa-urls {
          position: relative;
          div {
            margin-block-start: 0.5rem;
            &.web span svg {
              position: absolute;
              left: 4px;
              fill: var(--poppy);
            }
            & a {
              text-decoration-line: underline;
              text-decoration-style: solid;
              letter-spacing: normal;
            }
          }
        }
      }
    }
  }
`
