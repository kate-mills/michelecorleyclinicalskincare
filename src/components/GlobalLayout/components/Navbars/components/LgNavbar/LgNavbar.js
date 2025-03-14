import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { links } from '../links'

const LiBtn = ({ item }) => {
  const [isExpanded, setIsExpanded] = React.useState(false)

  const btnClick = e => {
    setIsExpanded(isExpanded => !isExpanded)
  }
  const showMenu = e => {
    setIsExpanded(true)
  }
  const hideMenu = e => {
    setIsExpanded(false)
  }

  let id = `${item.name}--submenu`

  return (
    <li>
      <button onPointerEnter={showMenu} onPointerLeave={hideMenu} onClick={btnClick}>
        {item.name}
        <span className={'tgl'}>{`${!isExpanded ? '+': '-'}`}</span>
      </button>
      <ul
        onPointerEnter={e=> setIsExpanded(true)}
        id={id}
        style={{ display: !isExpanded ? 'none' : 'block', position: 'absolute'}}
        hidden={!isExpanded}
      >
        {item.subMenu.map((menuItem, idx) => {
          return (
            <li key={`${id}--${idx}`}>
              <Link to={menuItem.path}>{menuItem.name}</Link>
            </li>
          )
        })}
      </ul>
    </li>
  )
}

const LiA = ({ item }) => {
  return (
    <li>
      <Link to={item.path}>{item.name}</Link>
    </li>
  )
}

const LargeScreenNavbar = props => {
  return (
    <div className={`${props.className}`}>
      <nav id="desktop-navigation">
        <ul id="topnav">
          {links.map(item => {
            return !item.path ? (
              <LiBtn item={item} key={item.name} />
            ) : (
              <LiA item={item} key={item.name} />
            )
          })}
        </ul>
      </nav>
    </div>
  )
}

export default styled(LargeScreenNavbar)`
  & {
    & nav#desktop-navigation ul#topnav {
      align-items: center;
      display: flex;
      flex-flow: row wrap;
      gap: 1rem 1.35rem;
      justify-content: space-evenly;
      list-style: none;
      & li {
        background: var(--mainWhite);
        padding: 0.25rem;
        position: relative;
        button, a {
          background: var(--mainWhite);
          border: none;
          display: inline-block;
          padding: 0.25rem;
          span.tgl{
            display: inline-block;
            width: 20px;
          }
        }
        ul {
          background: rgb(242 242 242);
          display: none;
          left: 0;
          position: absolute;
          top: 90%;
          z-index: 10;
          li {
            background: rgb(242 242 242);
            a{
              background: inherit;
            }
          }
        }
        &:hover {
          ul {
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
