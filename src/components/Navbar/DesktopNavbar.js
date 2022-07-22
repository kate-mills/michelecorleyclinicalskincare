import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/desktopLinks'

const SubMenu = props => {
  return (
    <SubNavigationStyles className={`submenu ${props.className}`}>
      {props.subMenu.map((item, id) => {
        return (
          <li
            key={id}
            className={`submenu__listitem navigation__listitem`}
          >
            <AniLink
              fade
              className="submenu__link navigation__link"
              to={item.path}
            >
              <span>
                {item.name}
              </span>
            </AniLink>
          </li>
        )
      })}
    </SubNavigationStyles>
  )
}
const SubNavigationStyles = styled.ul`
  & {
    background: var(--mainWhite);
    flex-direction: column;
    left: -0.4rem;
    position: absolute;
    top: 100%;
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
                  className="topnav__listitem navigation__listitem topnav__toggle-subnavigation"
                >
                  <SubMenu
                    subMenu={item.subMenu}
                    className={this.props.className}
                  />
                  <span>
                    {item.name}
                  </span>
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
    background: var(--mainWhite);
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    & li.navigation__listitem {
      margin: 0.3rem;
      padding: 0.2rem 0.5rem;
      & .navigation__link {
        padding: 0.2rem 0.5rem;
      }
    }
    & li.navigation__listitem.topnav__toggle-subnavigation {
      position: relative;
      :hover {
        cursor: pointer;
        & ul.submenu {
          display: flex;
          z-index: 1;
        }
      }
      & .submenu__listitem {
        margin-left: 0;
      }
    }
  }
  @media (max-width: 749px) {
    & {
      display: none;
    }
  }
`
