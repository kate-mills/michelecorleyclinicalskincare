import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/desktopLinks'
import { matchLettersJoinDash } from '../../utils/regexHelper'

const SubMenu = ({ className, name, safeId, subMenu }) => {
  return (
    <>
      <button className={`navigation__button`} id={`${safeId}-button`}>
        {name}
      </button>
      <SubNavigationStyles
        className={`submenu ${className}`}
        id={`${safeId}-submenu`}
      >
        {subMenu.map((item, id) => {
          return (
            <li key={id} className={`submenu__listitem navigation__listitem`}>
              <AniLink
                fade
                className="submenu__link navigation__link"
                to={item.path}
              >
                <span>{item.name}</span>
              </AniLink>
            </li>
          )
        })}
      </SubNavigationStyles>
    </>
  )
}
SubMenu.defaultProps = {
  className: '',
  name: '',
  safeId: '',
  subMenu: [],
}

const SubNavigationStyles = styled.ul`
  & {
    background: var(--mainWhite);
    border-bottom: 2px solid var(--darkGrey);
    flex-direction: column;
    left: -10px;
    padding: 0px 10px;
    position: absolute;
    top: 90%;
    width: max-content;

    /* default - hidden */
    display: none;
    z-index: 0;
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav id="desktop-navigation">
          <ul id="topnav" className="navigation-links">
            {links.map((item, id) => {
              return item.subMenu.length > 0 ? (
                <li
                  key={id}
                  className="topnav__listitem navigation__listitem topnav__toggle-submenu"
                >
                  <SubMenu
                    className={this.props.className}
                    name={item.name}
                    safeId={matchLettersJoinDash(item.name)}
                    subMenu={item.subMenu}
                  />
                </li>
              ) : (
                <li key={id} className="topnav__listitem navigation__listitem">
                  {item.id === 'education' ? (
                    item.name
                  ) : (
                    <AniLink
                      fade
                      to={item.path}
                      className="topnav__link navigation__link"
                    >
                      {item.name}
                    </AniLink>
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
  & nav#desktop-navigation ul#topnav.navigation-links {
    display: flex;
    flex-flow: row wrap;
    gap: 1rem 1.35rem;
    justify-content: space-around;

    & span > a:nth-child(1),
    & a.navigation__link,
    & button.navigation__button {
      background: var(--mainWhite);
      border: none;
      display: block;
      padding: 0.3rem 0px;
    }
    & li.navigation__listitem.topnav__toggle-submenu {
      position: relative;
      :hover {
        cursor: default;
        & ul.submenu {
          display: flex;
          z-index: 1;
        }
      }
    }
  }
  @media (max-width: 749px) {
    & {
      display: none;
    }
  }
`
