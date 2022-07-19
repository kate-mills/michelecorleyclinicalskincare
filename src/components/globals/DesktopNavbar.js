import React, { Component } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/links'
import { screen } from '../../css/js/media-functions'
import ProfessionalStatus from '../Professionals/Status'

const SubNavigation = props => {
  return (
    <SubNavigationStyles className={`sub-navigation ${props.className}`}>
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
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    width: -webkit-max-content;
    position: absolute;
    z-index: 0;
    background: var(--mainWhite);
    display: none;
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
                return (
                  <li key={id} className="education">
                    <ProfessionalStatus />
                  </li>
                )
              } else {
                return item.menu.length > 0 ? (
                  <li className="parent-li" key={id} style={{ opacity: '1' }}>
                    <SubNavigation
                      label={item.label}
                      menu={item.menu}
                      className={this.props.className}
                    />
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
  & nav#desktop-nav ul.main-nav-links {
    position: relative;
    z-index: 1;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-around;
  }
  & nav#desktop-nav ul.main-nav-links li.education,
  & nav#desktop-nav ul.main-nav-links li.parent-li {
    margin: 2px;
    align-self: center;
    position: relative;
    text-align: left;
    a {
      margin: 0.5rem;
      padding: 0.5rem;
    }
  }
  & nav#desktop-nav ul.main-nav-links li.parent-li:hover ul.sub-navigation {
    background: var(--mainWhite);
    display: flex;
    position: absolute;
    top: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    object-fit: contain;
    object-position: center center;
    z-index: 1;

    li.sub-nav-li {
      background: var(--offWhite);
      border-top: 0.1px solid var(--offWhite);
      border-bottom: 0.1px solid var(--offWhite);
      line-height: 2;
      margin: 0;
      padding: 0.5rem 0;
      a.sub-nav-link {
        background: var(--offWhite);
        line-height: 2;
        white-space: nowrap;
      }
    }
  }
  ${screen.nav.narrow`&{display:none;}`}
`
