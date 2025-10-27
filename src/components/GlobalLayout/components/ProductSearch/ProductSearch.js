import React, { useState, useEffect } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import * as JsSearch from 'js-search'

import { useProductData } from './use-product-data'

const Search = () => {
  const productList = useProductData()
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  /** rebuilds the overall index based on the options */
  useEffect(() => {
    const dataToSearch = new JsSearch.Search('contentful_id')

    /** defines a indexing strategy for the data more about it in here https://github.com/bvaughn/js-search#configuring-the-index-strategy */

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

    /** defines the sanitizer for the search to prevent some of the words from being excluded */

    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    /** defines the search index read more in here https://github.com/bvaughn/js-search#configuring-the-search-index */

    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex('contentful_id')

    dataToSearch.addIndex('name') // sets the index attribute for the data
    dataToSearch.addIndex('category') // sets the index attribute for the data

    dataToSearch.addDocuments(productList) // adds the data to be searched

    setSearch(dataToSearch)
  }, [productList])

  /** handles the input change and perform a search with js-search in which the results will be added to the state */

  const errClassName = () =>
    !!searchQuery && queryResults.length < 1
      ? 'search__input err'
      : 'search__input'

  const searchData = e => {
    const queryResult = search.search(e.target.value)
    setSearchQuery(e.target.value)
    setSearchResults(queryResult)
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const queryResults = searchQuery === '' ? [] : searchResults

  return (
    <StyledProductSearch>
      <form onSubmit={handleSubmit}>
        <input
          aria-label="Search"
          autoComplete="off"
          id="Search"
          className={`search__input`}
          onChange={searchData}
          placeholder="Search Products..."
          type="text"
          value={searchQuery}
        />
      </form>
      <table>
        {queryResults.length ? (
          <thead>
            <tr>
              <th>Products found: {queryResults.length}</th>
              <th>Category</th>
            </tr>
          </thead>
        ) : (
          false
        )}
        <tbody>
          {queryResults.map(item => {
            return (
              <tr key={`row_${item.contentful_id}`}>
                <td>
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </td>
                <td>
                  {item.category.indexOf(' ') === -1 ? (
                    <Link to={`/${item.category}`}>{item.category}</Link>
                  ) : (
                    <Link to={`/${item.category.replace(' & ', '-')}`}>
                      {item.category}
                    </Link>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </StyledProductSearch>
  )
}

const StyledProductSearch = styled.div`
  & {
    margin: 0.5em auto 0px;

    form {
      display: flex;
      justify-content: center;

      & .search__input {
        background: #ffffff url(/searchicon.png) no-repeat 10px 10px; 
        border: 2px solid #ccc;
        border-radius: 4px;
        display: inline-block;
        font-family: var(--mainFont);
        font-size: 0.8rem;
        letter-spacing: normal;
        outline: none;
        padding: 12px 20px 12px 40px;
        transition: width 0.4s ease-in-out;
        -webkit-transition: width 0.4s ease-in-out;
        width: 195px;
        &:active,
        &:focus {
          border-color: var(--poppy);
          width: 100%;
        }
      }
    }

    form,
    table {
      border: 1px solid var(--mainWhite);
      border-collapse: collapse;
      border-radius: 4px;
      margin: 0 auto;
      width: 687px;
    }

    table {
      background-color: var(--poppy0);

      & a,
      & th,
      & td {
        border: 1px solid var(--mainWhite);
        font-size: 0.8rem;
        text-align: left;
        line-height: 1.2;
      }
      & a {
        border-color: transparent;
        display: table-cell;
        padding: 5px 10px;
      }
      & th {
        border-bottom: 2px solid var(--mainBlack);
        padding: 10px 10px 5px;
      }
    }
    @media screen and (max-width: 767px) {
      form,
      table {
        width: 100%;
      }
    }
  }
`

export default Search
