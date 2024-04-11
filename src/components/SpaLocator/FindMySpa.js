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
  const { airtableSpas, airtableDefaultSpas } = useSpaData()
  const [search, setSearch] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const formInputRef = React.useRef(null)

  useEffect(() => {
    formInputRef.current.focus()
    const dataToSearch = new JsSearch.Search('spaid')

    dataToSearch.indexStrategy = new JsSearch.PrefixIndexStrategy()

    dataToSearch.sanitizer = new JsSearch.LowerCaseSanitizer()

    dataToSearch.searchIndex = new JsSearch.TfIdfSearchIndex()

    dataToSearch.addIndex('name')

    let allSpas = [...airtableSpas].map(({ data }) => {
      return { ...data }
    })
    dataToSearch.addDocuments(allSpas)
    setSearch(dataToSearch)
  }, [airtableSpas])

  const trimSpaces = q => {
    q = q.replace(/^\s/, '')
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
      ? [...airtableDefaultSpas].map(({ data }) => {
          return { ...data }
        })
      : searchResults

  return (
    <div style={{ height: 'fit-content' }}>
      <StyledSpaLocatorForm onSubmit={handleSubmit}>
        <input
          ref={formInputRef}
          tabIndex={0}
          aria-label="Search"
          autoComplete="off"
          id="StoreLocator"
          onChange={searchData}
          placeholder={'Enter your spa name'}
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
        <div style={{ minHeight: '500px' }}>
          <StyledSpaList tabIndex={0}>
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

                let isLongCity =
                  city && city.split(' ').length > 1 && city.length > 15
                return (
                  <li key={spaid} className="spa">
                    <div className="spa-name">
                      <h4 className={name.length > 20 ? 'long' : ''}>{name}</h4>
                    </div>
                    <address className="spa-location">
                      <div className="spa-addr-street">{address}</div>
                      <div className="spa-addr-locality">
                        <div
                          className={`spa-city ${
                            isLongCity ? 'spa-long-city' : ''
                          }`}
                        >
                          {city &&
                            city.split(' ').map((name, i) => {
                              return (
                                <span
                                  key={name}
                                  className={`${
                                    isRegexMatch(searchQuery, name)
                                      ? 'highlight city-name idx' + i
                                      : 'city-name idx' + i
                                  }`}
                                >
                                  {name}
                                </span>
                              )
                            })}
                        </div>
                        <div className="space">{city && ', '}</div>
                        <div className="state">
                          <span
                            className={`${
                              isRegexMatch(searchQuery, state) ||
                              isRegexMatch(searchQuery, statecode)
                                ? 'highlight'
                                : ''
                            }`}
                          >
                            {statecode}
                          </span>
                        </div>
                        <div className="space"> </div>
                        <div className={`zip ${isLongCity ? 'wrap-zip' : ''}`}>
                          <span className="zipcode">
                            <span
                              className={`${
                                isRegexMatch(searchQuery, zip)
                                  ? 'highlight'
                                  : ''
                              }`}
                            >
                              {zip}
                            </span>
                          </span>
                        </div>
                      </div>
                    </address>
                    <address className="spa-urls">
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
                          href={!!webstore ? webstore : url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {webstore || url}
                        </a>
                      </div>
                    </address>
                    <a
                      className="btn"
                      href={`mailto:customerservice@michelecorley.com?subject=Update%20My%20Spa%20-%20${name}&&cc=${email}&&body=Please%20edit%20the%20following%20information%20with%20your%20updated%20spa%20details.%0D%0D${name}%0D${address?address: 'Spa address'}%0D${city? city: 'City'},%20${state?state:'State'}%20${zip?zip: 'Zip'}%0D%0D${phone ? phone: 'Your phone'}%0D%0D${email ? email: 'Your email'}%0D${url ? url: 'Do you have a website?'}`}
                    >
                      Update My Spa
                    </a>
                  </li>
                )
              })}
          </StyledSpaList>
        </div>
      ) : (
        <div style={{ minHeight: '500px', background: 'var(--offWhite)' }}>
          <a
            className="btn"
            href="mailto:customerservice@michelecorley.com?subject=Add%20My%20Spa&&body=Please%20send%20us%20the%20following%20information%20about%20your%20spa.%0D%0DSpa%20Name%0D%0DSpa%20Address%0DCity,%20State%20Zip%0D%0DSpa%20Phone%20Number%0DSpa%20Email%0DSpa%20Website"
          >
            Click here to ADD YOUR SPA
          </a>
        </div>
      )}
    </div>
  )
}
export default SpaSearch
