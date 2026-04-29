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
        margin-inline-start: 0;
        margin-inline-end: 2px;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
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

    li {
      background: var(--mainWhite);
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding-block: 1rem;
      padding-inline-end: 1rem;
      border: 0.5566666px solid #e9e9e9;

      *,
      address * {
        line-height: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      & p {
        padding-block-end: 0.75rem;
        padding-inline-start: ${JUSTIFY_LEFT_PX};
      }

      & address {
        font-size: small;
        font-style: normal;
        padding-block-end: 0.3rem;
        padding-inline-start: ${JUSTIFY_LEFT_PX};
      }

      & address {
        * {
          font-size: small;
          vertical-align: text-bottom;
        }

        &.spa-addr {
          div.spa-addr-locality {
            margin: 5px 0;

            & div {
              display: inline-block;

              & .highlight {
                background-color: var(--offWhite);
              }

              &.space {
                margin-inline-end: 3px;
                min-width: 4px;
              }
            }
          }
        }

        &.spa-urls {
          position: relative;

          div {
            margin-block: 0.5rem;

            &.web {
              margin-block-end: 0;
              span {
                position: absolute;
                left: 7px;
                svg {
                  fill: var(--poppy);
                }
              }
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
