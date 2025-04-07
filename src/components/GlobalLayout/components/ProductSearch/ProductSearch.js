import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as JsSearch from 'js-search'

import { useProductData } from './use-product-data'

const Search = () => {
  const productList = useProductData()
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  const inputRef = useRef(null)

  /** rebuilds the overall index based on the options */
  useEffect(() => {
    const dataToSearch = new JsSearch.Search('contentful_id')
    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()
    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()
    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('contentful_id')
    dataToSearch.addIndex('name') // sets the index attribute for the data
    dataToSearch.addIndex('category') // sets the index attribute for the data
    dataToSearch.addDocuments(productList) // adds the data to be searched
    setSearch(dataToSearch)
  }, [productList])

  /** handles the input change and perform a search with js-search in which the results will be added to the state */

  const searchData = e => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setSearchResults(queryResult)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const clearSearchInput = e => {
    setSearchQuery('')
    inputRef.current.focus()
  }

  const queryResults = searchQuery === '' ? [] : searchResults

  return (
    <StyledProductSearch>
      <form onSubmit={handleSubmit}>
        <div className="search-inputs">
          <input
            aria-label="Search"
            autoComplete="off"
            id="search"
            onChange={searchData}
            placeholder="Search Products ..."
            type="text"
            value={searchQuery}
            ref={inputRef}
          />
          {searchQuery && (
            <button
              aria-label="Clear Search"
              id="clear"
              onClick={clearSearchInput}
              onKeyPress={clearSearchInput}
            >
              x
            </button>
          )}
        </div>
      </form>
      <div id={'results'}>
        <div className={'number-found bold'}>
          {!!queryResults?.length &&
            `${queryResults.length} ${
              queryResults.length > 1 ? 'Products Found' : 'Product Found'
            }`}
        </div>
        <div id="table">
          {queryResults.map(
            ({ acneSafe, contentful_id: id, category, name, slug }) => {
              return (
                <div className={'row'} key={`row_${id}`}>
                  <div className={'td name'}>
                    {acneSafe && <span className="safe">ACNE SAFE</span>}
                    <Link to={`/products/${slug}`}>{name}</Link>
                  </div>
                  <div className={'td cat'}>
                    <Link to={`/${category.replace(' & ', '-')}`}>
                      {category}
                    </Link>
                  </div>
                </div>
              )
            }
          )}
        </div>
      </div>
    </StyledProductSearch>
  )
}

const StyledProductSearch = styled.div`
  & {
    & form {
      height: 80px;
      margin: 0 auto;
      width: 220px;
      position: relative;

     transition: width 0.5s ease-in-out;
     -webkit-transition: width 0.5s ease-in-out;


     &:focus-within {
      width: 70%;
      max-width: 100%;
     }

      .search-inputs {
        border: 2px solid #ccc;
        border-radius: 4px;
        margin: 20px auto;
        #search {
          background-color: var(--mainWhite);
          background-image: url(/searchicon.png);
          background-position: 10px 10px;
          background-repeat: no-repeat;
          border: 1px solid var(--mainWhite);
          padding: 12px 20px 12px 40px;
        }
        #clear {
          position: absolute;
          right: 3px;
          top: 0;
          border: none;
          color: #9d9692;
          padding: 12px 20px;
        }
      }
    }
    & #results {
      background: var(--offWhite);
      border-radius: var(--mainRadius);
      & .number-found {
        text-align: center;
      }
      & #table {
        display: table;
        margin: 20px auto;
        & .row {
          display: table-row;
          border-block-end: 1px solid var(--mainMcc);

          & .td {
            display: table-cell;
            overflow: hidden;
            padding: 5px;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: 400px;
            & a {
              padding: inherit;
            }
            & span.safe {
              border: 1px solid var(--darkGrey);
              display: inline-block;
              font-size: 7px;
              line-height: 1;
              margin-inline-end: 2px;
              text-align: center;
              white-space: break-spaces;
              width: min-content;
            }
          }
        }
      }
      @media (max-width: 800px) {
        background: var(--mainWhite);
        & #table .row .td.cat {
          max-width: 200px;
        }
      }
      @media (max-width: 600px) {
        & #table .row .td {
          &.name {
            max-width: 200px;
          }
          &.cat {
            max-width: 100px;
          }
        }
      }
    }
  }
`

export default Search
