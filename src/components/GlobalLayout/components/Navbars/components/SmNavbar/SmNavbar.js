import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { links } from '../links'

const MoreItems = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [css, setCss] = useState('hide')

  const { item } = props

  const clickHandler = () => {
    if (!isOpen) {
      setCss('show')
    } else {
      setCss('hide')
    }
    setIsOpen(!isOpen)
  }
  return (
    <MoreItemsWrapper>
      <button onClick={clickHandler} className={`${css} plus-btn`}>
        {item.name}
      </button>
      <nav className={`${css} sub-nav`}>
        <ul className={`${css} sub-ul`}>
          {item?.subMenu?.map((menuItem, id) => {
            return (
              <li key={id} className={`${css} child`}>
                <Link to={menuItem.path}>{menuItem.name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
    </MoreItemsWrapper>
  )
}

const MoreItemsWrapper = styled.div`
  & {
    width: 90vw;
    button {
      position: relative;
      &.hide::after,
      &.show::after {
        content: '+';
        position: absolute;
        right: 0;
      }
      &.show::after {
        content: '-';
      }
    }
    nav {
      margin-block-start: 0;
      ul {
        & li {
          background-color: var(--mainMcc);
        }
        &.hide {
          display: none;
        }
      }
    }
  }
`

class SmallScreenNavbar extends Component {
  state = {
    navbarOpen: false,
    css: 'hide',
  }
  navbarHandler = () => {
    if (!this.state.navbarOpen) {
      this.setState({ css: 'show' })
    } else {
      this.setState({ css: 'hide' })
    }
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  render() {
    return (
      <div className={`${this.props.className}`}>
        <div>
          <button
            className={`${this.state.css} btn menu`}
            onClick={this.navbarHandler}
          >
            MENU
          </button>
          <div className={`${this.state.css} nav-menu`}>
            {links.map((item, id) => {
              return item?.subMenu?.length > 0 ? (
                <MoreItems key={id} item={item} />
              ) : item.id === 'education' ? (
                <div key={id} className="li">
                  Professional
                </div>
              ) : (
                <Link key={id} className="li" to={item.path}>
                  {item.name}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}

export default styled(SmallScreenNavbar)`
  & {
    align-items: center !important;
    display: flex;
    justify-content: center;
    letter-spacing: 0.5px;
    margin: 6px auto 0;
    text-align: center;
    & a {
      border: 5px solid var(--clear);
      display: inline-block;
      margin-block: 0.25rem;
    }
    & button {
      border-color: var(--clear);
      box-shadow: none;
      color: var(--mainBlack) !important;
      margin-block: 0.25rem;
      padding-inline: 1rem;
      &.btn.menu{
        border-color: var(--poppy);
      }
    }
    div.nav-menu.hide {
      display: none;
    }
    @media (min-width: 750px) {
      display: none;
    }
  }
`
