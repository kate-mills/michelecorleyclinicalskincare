import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/desktopLinks'
import { matchLettersJoinDash } from '../../utils/regexHelper'

const SubMenu = ({ className, name, safeId, subMenu }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)
  const btnClick = e => {
    setIsExpanded(current => !current)
  }
  return (
    <>
      <button
        onClick={btnClick}
        aria-haspopup="true"
        aria-expanded={isExpanded}
        aria-controls={`${safeId}-submenu`}
        id={`${safeId}-button`}
        className={`navigation__button`}
      >
        {name}
      </button>
      <SubNavigationStyles
        className={`submenu ${className}`}
        id={`${safeId}-submenu`}
        aria-labelledby={`${safeId}-button`}
        hidden={!isExpanded}
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
    border-bottom: 2px solid var(--offWhite);
    flex-direction: column;
    left: -10px;
    padding: 0px 15px 20px 10px;
    position: absolute;
    top: 90%;
    width: max-content;

    /* default - hidden */
    display: none;
    z-index: 0;

    & .submenu__listitem:hover span {
      color: var(--poppy);
    }
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
      :hover {
        color: var(--poppy);
      }
    }
    & li.navigation__listitem.topnav__toggle-submenu {
      position: relative;
      :hover {
      & button{
        font-weight: 525;
        color: var(--poppy);
      }
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
