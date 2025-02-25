import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { links } from './desktop-links'

const onlyLettersRegex = /([A-Z]\w+|[A-Z])/gi
const matchLettersJoinDash = str =>
  str.match(onlyLettersRegex).join('-').toLowerCase()

const SubMenu = ({ subMenu, safeId }) => {
  return (
    <ul id={`${safeId}-submenu`}>
      {subMenu.map((menuItem, id) => {
        return (
          <li key={id}>
            <Link to={menuItem.path}>
              <span>{menuItem.name}</span>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav id="desktop-navigation">
          <ul id="topnav" className="navigation-links">
            {links.map((item, id) => {
              return (
                <li>
                  <Link to={item.path} className={'navigation__link'}>
                    {item.name}
                  </Link>
                  {item.subMenu.length > 0 && (
                    <SubMenu
                      subMenu={item.subMenu}
                      safeId={matchLettersJoinDash(item.name)}
                    />
                  )}
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    )
  }
}

export default styled(DesktopNavbar)`
  & {
    & nav#desktop-navigation ul#topnav.navigation-links {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem 1.35rem;
      justify-content: space-evenly;
      list-style: none;
      & li {
        background: var(--mainWhite);
        position: relative;
        padding-inline: 5px;
        top: 0;
        ul {
          display: none;
          left: 0;
          position: absolute;
          top: 28px;
          li {
            background: var(--offWhite);
            border: 1px solid rgb(0 0 0 / 6%);
            padding-block: 3px;
          }
        }
        &:hover {
          ul {
            display: block;
            z-index: 10;
          }
        }
      }
    }
    @media (max-width: 749px) {
      display: none;
    }
  }
`
