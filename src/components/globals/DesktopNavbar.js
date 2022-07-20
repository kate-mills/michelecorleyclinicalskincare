import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/links'
import ProfessionalStatus from '../Professionals/Status'

const SubNavigation = props => {
  return (
    <SubNavigationStyles className={`sub-nav ${props.className}`}>
      {props.menu.map((item, id) => {
        return (
          <li key={id} className={`sub-nav-li`}>
            <AniLink fade className="sub-nav-link" to={item.path}>
              {item.text}
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
    border: 1px solid var(--offWhite);
    display: flex;
    flex-direction: column;
    height: max-content;
    left: 0;
    position: absolute;
    top: 102%;
    width: max-content;

    /* DEFAULT VALUES */
    display: none;
    z-index: 0;

    li.sub-nav-li {
      display: contents;
      a.sub-nav-link {
        background: var(--mainWhite);
        width: 100%;
        text-align: left;
        span {
          padding: 0.25rem;
        }
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
              if (item.id === 'education') {
                return <ProfessionalStatus />
              } else {
                return item.menu.length > 0 ? (
                  <li className="main-li" key={id}>
                    <SubNavigation
                      label={item.label}
                      menu={item.menu}
                      className={this.props.className}
                    />
                  {item.text}
                  </li>
                ) : (
                  <li key={id} className="main-li">
                    <AniLink fade to={item.path} className="main-link">
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
  & nav#desktop-nav ul.main-nav-links {
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background: var(--mainWhite);
    a {
      align-self: center;
      margin: 0.25rem;
      padding: 0.25rem;
      text-align: left;
    }
    li {
      align-self: center;
      position: relative;
    }
  }
  & nav#desktop-nav ul.main-nav-links li.main-li:hover ul.sub-nav {
    display: flex;
    z-index: 1;
  }

  @media (max-width: 749px) {
    & {
      display: none;
    }
  }
`
