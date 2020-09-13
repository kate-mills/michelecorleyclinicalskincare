import React, { useState, useEffect } from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import styles from '../css/productsearch.module.css'
import * as JsSearch from 'js-search'

import { useProductData } from '../hooks/use-product-data'

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
    <>
      <form onSubmit={handleSubmit} className={styles.search__form}>
        <input
          aria-label="Search"
          autoComplete="off"
          id="Search"
          onChange={searchData}
          placeholder="Search..."
          type="text"
          className={styles.search__form__input}
          value={searchQuery}
        />
      </form>
      <table className={styles.search__table}>
        {queryResults.length ? (
          <thead className={styles.search__thead}>
            <tr>
              <th className={styles.search__th}>
                Products found: {queryResults.length}
              </th>
              <th className={styles.search__th}>Category</th>
            </tr>
          </thead>
        ) : (
          false
        )}
        <tbody>
          {queryResults.map(item => {
            return (
              <tr key={`row_${item.contentful_id}`}>
                <td className={styles.search__td}>
                  <AniLink fade to={`/products/${item.slug}`}>
                    {item.name}
                  </AniLink>
                </td>
                <td className={styles.search__td}>
                  {item.category.indexOf(' ') === -1 ? (
                    <AniLink fade to={`/${item.category}`}>
                      {item.category}
                    </AniLink>
                  ) : (
                    <AniLink fade to={`/${item.category.replace(' & ', '-')}`}>
                      {item.category}
                    </AniLink>
                  )}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
export default Search
