import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/desktopLinks'

const SubMenu = props => {
  return (
    <SubNavigationStyles className={`submenu ${props.className}`}>
      {props.subMenu.map((item, id) => {
        return (
          <li key={id} className={`navigation-li submenu__li`}>
            <AniLink
              fade
              className="navigation-link submenu__link"
              to={item.path}
            >
              <span className="submenu__link--text">{item.name}</span>
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

    li.submenu__li {
      padding: 0.4rem 0.3125rem;
    }
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav id="nav-main--w">
          <ul id="nav-main-links--w" className="nav-links">
            {links.map((item, id) => {
              return item.subMenu.length > 0 ? (
                <li
                  className="nav-main__uli nav-main__uli-toggle-submenu"
                  key={id}
                >
                  <SubMenu
                    label={item.label}
                    subMenu={item.subMenu}
                    className={this.props.className}
                  />
                  <span className="toggle-submenu-txt">{item.name}</span>
                </li>
              ) : (
                <li key={id} className="nav-main__uli">
                  {item.id === 'education' ? (
                    item.name
                  ) : (
                    <AniLink
                      fade
                      to={item.path}
                      className="navigation-link main-link"
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
  & nav#nav-main--w ul#nav-main-links--w {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background: var(--mainWhite);

    & .nav-main__uli {
      margin: 0.3125rem 1rem;
      padding: 0.4rem 0.3125rem;
      & .navigation-link {
        padding: 0.4rem 0.3125rem;
      }
    }
    & li.nav-main__uli.nav-main__uli-toggle-submenu {
      position: relative;
      :hover {
        cursor: context-menu;
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
