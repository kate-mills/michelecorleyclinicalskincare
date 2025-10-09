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
      <form onSubmit={handleSubmit} className={'search__form'}>
        <input
          aria-label="Search"
          autoComplete="off"
          id="Search"
          onChange={searchData}
          placeholder="Search Products..."
          type="text"
          className={'search__form__input'}
          value={searchQuery}
        />
      </form>
      <table className={'search__table'}>
        {queryResults.length ? (
          <thead>
            <tr>
              <th className={'search__th'}>
                Found: {queryResults.length}
              </th>
              <th className={'search__th'}>Category</th>
            </tr>
          </thead>
        ) : (
          false
        )}
        <tbody>
          {queryResults.map(item => {
            return (
              <tr key={`row_${item.contentful_id}`}>
                <td className={'search__td'}>
                  <Link to={`/products/${item.slug}`}>{item.name}</Link>
                </td>
                <td className={'search__td'}>
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
    padding-block-end: 2rem;
    form input {
      font-family: var(--mainFont);
      letter-spacing: normal;
    }
    .search__form__input {
      outline: none;
      background-image: url(/searchicon.png);
      background-color: white;
      background-position: 10px 10px;
      background-repeat: no-repeat;
      border: 2px solid #ccc;
      border-radius: 4px;
      display: block;
      font-size: 1rem;
      margin: 20px auto;
      padding: 12px 20px 12px 40px;
      transition: width 0.4s ease-in-out;
      -webkit-transition: width 0.4s ease-in-out;
      width: 205px;
      max-width: 100%;

      &:active,
      &:focus {
        width: 500px;
        max-width: 100%;
        border: 2px solid var(--poppy);
      }
    }

    .search__table {
      border: none;
      border-collapse: collapse;
      margin: 0 auto;
      width: 550px;
      max-width: 100%;
    }
    .search__th {
      text-align: left;
      padding: 0.5rem;
      border-bottom: 2px solid var(--mainBlack);
    }
    .search__td {
      padding-block: 0.5rem;
      line-height: 1.2;
      & {
        padding-inline-start: 0.5rem; 
        padding-inline-end: 0;
      }
      > a {
        text-decoration: underline;
      }
    }
    @media screen and (max-width: 500px) {
      .search__table,
      .search__form__input:active,
      .search__form__input:focus {
        /*width: 100%;*/
      }
    }
  }
`

export default Search
