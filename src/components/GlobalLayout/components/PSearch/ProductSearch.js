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
          <thead className={'search__thead'}>
            <tr>
              <th className={'search__th'}>
                Products found: {queryResults.length}
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
      min-width: 25%;
      width: 130px;
    }

    .search__form__input:active,
    .search__form__input:focus {
      width: 85%;
      border: 2px solid var(--poppy);
    }
    .search__table {
      border: 1px solid var(--mainWhite);
      border-collapse: collapse;
      border-radius: 4px;
      margin: 0 auto;
      width: 85%;
    }
    .search__thead {
      border: 1px solid var(--mainWhite);
    }
    .search__th {
      text-align: left;
      padding: 10px;
      border-bottom: 2px solid var(--mainBlack);
    }
    .search__th:nth-child(2) {
      text-align: right;
      padding-right: 20px;
    }
    .search__td:nth-child(2) {
      text-align: right;
    }
    .search__td {
      padding: 5px;
      border: 1px solid var(--mainWhite);
    }
    .search__td > a {
      text-decoration: none;
    }
    .search__td > a:focus {
      background-color: var(--offWhite);
      color: var(--poppyLow);
    }

    .search__flex {
      margin: 0 auto;
      display: flex;
    }
    @media screen and (max-width: 767px) {
      .search__table,
      .search__form__input:active,
      .search__form__input:focus {
        width: 85%;
      }
      .search__th:nth-child(2) {
        padding-right: 10px;
      }
    }
    @media screen and (max-width: 500px) {
      .search__table,
      .search__form__input:active,
      .search__form__input:focus {
        width: 100%;
        margin: 0 auto;
      }
      .search__th:nth-child(2) {
        padding-right: 5px;
      }
    }
  }
`

export default Search
