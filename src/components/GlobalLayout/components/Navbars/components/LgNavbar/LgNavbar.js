/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import ProLink from '../ProLink'

import { links } from '../links'

const LiMenu = ({ name, subMenu }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const btnClick = e => setIsExpanded(prev => !prev)
  const showMenu = e => setIsExpanded(true)
  const hideMenu = e => setIsExpanded(false)

  return (
    <li className="top-li" onMouseEnter={showMenu} onMouseLeave={hideMenu}>
      <button onClick={btnClick}>{name}</button>
      <ul id={name} hidden={!isExpanded} data-visible={isExpanded}>
        {subMenu.map(({ name, path }) => {
          return (
            <li id={name} key={name}>
              <Link to={path}>{name}</Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

const LgNavbar = ({ className, isPro }) => {
  return (
    <div className={`${className}`}>
      <nav id="desktop-navigation">
        <ul id="topnav">
          {links.map(({ path, name, subMenu }) => {
            return !path ? (
              <LiMenu name={name} subMenu={subMenu} key={name} />
            ) : (
              <li className={`top-li`} key={name}>
                <Link to={path}>{name}</Link>
              </li>
            )
          })}
          <ProLink ariaCurrent={!!isPro ? 'page' : ''} />
        </ul>
      </nav>
    </div>
  )
}

export default styled(LgNavbar)`
  & {
    & nav#desktop-navigation ul#topnav {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem 1.35rem;
      justify-content: space-evenly;
      & li.top-li {
        position: relative;
        &#pro-link {
          span {
            &.logged-in {
              position: relative;
              right: 5px;
              > a {
                display: inline-block;
                &:last-child {
                  &::before {
                    content: '/';
                    position: absolute;
                    left: -5px;
                  }
                }
              }
            }
          }
        }
        & a,
        & button {
          border: 3px solid transparent;
          display: block;
          padding: 0.25rem;
          position: relative;
          &[aria-current='page'] {
            color: var(--poppy);
            &::before {
              position: absolute;
              content: '* ';
              top: 20%;
              left: -3px;
            }
          }
          &:focus-visible,
          &:focus-within,
          &:focus {
            outline-offset: -2px;
          }
        }
        > ul {
          background: rgb(242 242 242);
          display: none;
          position: absolute;
          left: 0;
          z-index: 10;
          li {
            padding: 0.25rem;
          }
          &[data-visible='true'] {
            display: block;
          }
        }
        &:hover {
          > ul {
            display: block;
          }
        }
      }
    }
    @media (max-width: 749px) {
      display: none;
    }
  }
`
