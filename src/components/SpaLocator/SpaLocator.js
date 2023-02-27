import React, { useState, useEffect } from 'react'
import * as JsSearch from 'js-search'
import { useSpaData } from '../../hooks/use-spa-data'
import { FaShoppingCart } from 'react-icons/fa'

import {
  StyledSpaList,
  StyledSpaLocatorForm,
  StyledSearchResults,
} from './StyledWrappers'

const SpaSearch = props => {
  const { airtableSpas, airtableWebSpas } = useSpaData()
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    const dataToSearch = new JsSearch.Search('spaid')

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex()

    dataToSearch.addIndex('city') // sets the index attribute for the data
    dataToSearch.addIndex('state') // sets the index attribute for the data
    dataToSearch.addIndex('statecode') // sets the index attribute for the data
    dataToSearch.addIndex('zip') // sets the index attribute for the data

    let allSpas = airtableSpas.map(({ data }) => {
      return { ...data }
    })
    dataToSearch.addDocuments(allSpas)
    window.dataToSearch = dataToSearch
    setSearch(dataToSearch)
  }, [airtableSpas])


  const trimSpaces = (q) => {
    return q.replace(/(\s+)\s/g, ' ')
  }
  const searchData = e => {
    let q = trimSpaces(e.target.value)
    const queryResult = search.search(q)
    setSearchQuery(q)
    setSearchResults(queryResult)
  }
  const isRegexMatch = (q, testStr) => {
    let cleanQ = q.trim().match(/(\w|\s)/gi)
    return !cleanQ
      ? false
      : [...cleanQ.join('').split(' ')].find(str => {
          let trimmed = str.trim()
          let re = new RegExp(`\\b${trimmed}`, 'gi')
          return !trimmed || re.exec(testStr)
        })
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  const queryResults =
    searchQuery === ''
      ? [
          ...airtableWebSpas.map(({ data }) => {
            return { ...data }
          }),
        ]
      : searchResults

  return (
    <>
      <StyledSpaLocatorForm onSubmit={handleSubmit}>
        <input
          ref={input => input && input.focus()}
          tabIndex={0}
          aria-label="Search"
          autoComplete="off"
          id="StoreLocator"
          onChange={searchData}
          placeholder={'Type a city, state, or postcode...'}
          type="text"
          value={searchQuery}
          className={`${
            searchQuery.trim().length > 0 && searchResults.length < 1
              ? 'input-err'
              : ''
          }`}
        />
      </StyledSpaLocatorForm>
      {searchQuery.length > 0 ? (
        <StyledSearchResults>
          <div
            className={`${
              searchResults.length > 0 ? 'search_results_message' : ''
            }`}
          >
            <h5>
              <span className="number-of-results">
                {searchResults.length > 0 &&
                  `${searchResults.length} Location${
                    searchResults.length > 1 ? 's' : ''
                  } Found`}
              </span>
            </h5>
          </div>
        </StyledSearchResults>
      ) : (
        <div style={{ minHeight: '29.8px' }} />
      )}

      {queryResults.length > 0 ? (
        <StyledSpaList>
          {queryResults &&
            queryResults.map(spa => {
              const {
                spaid,
                name,
                zip,
                address,
                city,
                state,
                statecode,
                phone,
                email,
                webstore,
                url,
              } = spa

              let isLongCity = ((city.split(' ').length > 1) && (city.length > 10))
              return (
                <li key={spaid} className="spa">
                  <div className="spa-name">
                    <h4>{name}</h4>
                  </div>
                  <address className="spa-address-location">
                    <div className="street">{address}</div>
                    <div className="locale">
                      <div className={`city ${isLongCity?'long-city':''}`}>
                        {city.split(' ').map((name, i) => {
                          return (
                            <span
                              key={name}
                              className={`${
                                isRegexMatch(searchQuery, name)
                                  ? 'highlight city-name idx' + i 
                                  : 'city-name idx' + i
                              }`}
                            >{name}
                            </span>
                          )
                        })}

                      </div>
                      <div className="space">{', '}</div>
                      <div className="state">
                        <span
                          className={`${
                            isRegexMatch(searchQuery, state) ||
                            isRegexMatch(searchQuery, statecode)
                              ? 'highlight'
                              : ''
                          }`}
                        >{statecode}</span>
                      </div>
                      <div className="space">{' '}</div>
                      <div className={`zip ${isLongCity ? 'wrap-zip': ''}`}>
                        <span className="zipcode">
                          <span className={`${ isRegexMatch(searchQuery, zip) ? 'highlight' : ''}`}>{zip}</span> 
                        </span>
                      </div>
                    </div>
                  </address>
                  <address className="spa-address-urls">
                    <div>{phone && <a href={`tel:${phone}`}>{phone}</a>}</div>
                    <div>
                      {email && <a href={`mailto:${email}`}>{email}</a>}
                    </div>
                    <div className="web">
                      {!!webstore && (
                        <span>
                          <FaShoppingCart />
                        </span>
                      )}
                      <a
                        tabIndex={-1}
                        href={!!webstore ? webstore : url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        {getPrettyUrl(webstore || url)}
                      </a>
                    </div>
                  </address>
                </li>
              )
            })}
        </StyledSpaList>
      ) : (
        <div style={{ minHeight: '50vh' }} />
      )}
    </>
  )
}

const getPrettyUrl = url => {
  const replaceRegex = /http(s)?(:)?(\/\/)?|(\/\/)?(www\.)?\/?/g
  const matchRegex = /(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#]*)/g
  if (!url) return
  let tempUrl = url.trim().match(matchRegex)[0] || url.trim()
  return tempUrl.replace(replaceRegex, '')
}

export default SpaSearch
