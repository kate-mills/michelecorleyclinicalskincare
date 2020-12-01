import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/links'
import { screen } from '../../css/js/media-functions'
import ProfessionalStatus from '../Professionals/Status'

const MoreItems = props => {
  return (
    <MoreItemsWrapper>
      {props.menu.map((item, id) => {
        return (
          <li key={id} className={`child-li`}>
            <AniLink fade to={item.path}>
              {item.text}
            </AniLink>
          </li>
        )
      })}
    </MoreItemsWrapper>
  )
}
const MoreItemsWrapper = styled.ul`
  & {
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: -webkit-max-content;
    display: none;
    position: absolute;
    z-index: 1;
    opacity: 1;
    background: var(--mainWhite);
  }
  & li.child-li {
    visibility: visible;
    background: var(--mainWhite);
    padding: 15px;
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav>
          <ul className="main-nav">
            {links.map((item, id) => {
              if (item.id === 'education') {
                return (
                  <li key={id}>
                    <ProfessionalStatus />
                  </li>
                )
              } else {
                return item.menu.length > 0 ? (
                  <li
                    className="parent-li parent-plus"
                    key={id}
                    style={{ opacity: '1' }}
                  >
                    <MoreItems label={item.label} menu={item.menu} />
                    {item.text}
                  </li>
                ) : (
                  <li key={id} className="parent-li">
                    <AniLink fade to={item.path}>
                      {item.text}
                    </AniLink>
                  </li>
                )
              }
            })}
          </ul>
        </nav>
      </div>
    )
  }
}
export default styled(DesktopNavbar)`
  & {
    position: sticky;
    opacity: 1;
    z-index: 1;
  }
  & .parent-plus {
    position: relative;
    left: 0;
  }
  & li.parent-li a {
    padding-left: 15px;
    padding-right: 15px;
  }
  & ul {
    margin: unset;
  }
  & nav ul.main-nav {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  & nav ul.main-nav li.parent-li {
    border: 5px solid var(--mainWhite);
  }
  & ul.main-nav li.child-li {
    margin: 0;
    white-space: nowrap;
    letter-spacing: 0.5px;
    padding: 2px;
    padding-left: 0;
  }
  & nav ul.main-nav li.parent-plus:hover li.child-li {
    visibility: visible;
  }
  & nav ul.main-nav li.parent-li:hover ul {
    display: flex;
    position: absolute;
    top: 100%;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    opacity: 1;
    transition-delay: 500ms;
  }
  ${screen.nav.narrow`&{display:none;}`}
`
