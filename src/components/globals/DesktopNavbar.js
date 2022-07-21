import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/desktopLinks'

const SubNavigation = props => {
  return (
    <SubNavigationStyles className={`sub-nav ${props.className}`}>
      {props.subMenu.map((item, id) => {
        return (
          <li key={id} className={`sub-li`}>
            <AniLink fade className="navigation-link sub-link" to={item.path}>
              {item.name}
            </AniLink>
          </li>
        )
      })}
    </SubNavigationStyles>
  )
}
const SubNavigationStyles = styled.ul`
  & {
    background: var(--offWhite);
    display: flex;
    flex-direction: column;
    height: max-content;
    position: absolute;
    top: 102%;
    left: -2rem;
    width: max-content;
    padding-left: 1rem;

    /* DEFAULT VALUES */
    display: none;
    z-index: 0;

    li.sub-li {
      display:contents;
      a.sub-link.navigation-link {
        margin-left: .6rem;
        margin-right: 1rem;
      }
    }
  }
`
class DesktopNavbar extends Component {
  render() {
    return (
      <div className={`${this.props.className}`}>
        <nav id="desktop-nav">
          <ul className="main-nav-links">
            {links.map((item, id) => {
              return item.subMenu.length > 0 ? (
                <li className="main-li main-li__toggle-btn" key={id}>
                  <SubNavigation
                    label={item.label}
                    subMenu={item.subMenu}
                    className={this.props.className}
                  />
                  <span className="toggle-sub-nav">{item.name}</span>
                </li>
              ) : (
                <li key={id} className="main-li">
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
  & nav#desktop-nav ul.main-nav-links {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
    background: var(--mainWhite);

    & button.toggle-sub-nav {
      border: none;
      background: var(--mainWhite);
      :hover {
        cursor: context-menu;
      }
    }
    & a.navigation-link {
      padding: 0.4rem 0.313rem;
    }
    & .main-li {
      margin: 0.313rem;
      align-self: center;
      position: relative;
    }
  }
  & nav#desktop-nav ul.main-nav-links li.main-li.main-li__toggle-btn:hover ul.sub-nav {
    display: flex;
    z-index: 1;
  }

  @media (max-width: 749px) {
    & {
      display: none;
    }
  }
`
