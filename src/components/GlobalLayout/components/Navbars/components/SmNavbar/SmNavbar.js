import React, { Component, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { links } from '../links'

const MoreItems = props => {
  const [isOpen, setIsOpen] = useState(false)
  const [css, setCss] = useState('hide')

  const {item} = props

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
  & button.plus-btn,
  & li.show.child {
    display: inline-block;
    position: sticky;
    font-size: 16px;
    border: 5px solid var(--clear);
    padding: 2px;
    background: var(--mainWhite);
    :hover {
      cursor: pointer;
    }
  }
  & li.show.child {
    display: block;
    background-color: rgba(242, 242, 242, 1);
  }
  & button.plus-btn.hide::after {
    position: relative;
    left: 5px;
    display: inline-block;
    content: '+';
    padding: 2px;
  }
  & button.plus-btn.show::after {
    display: inline-block;
    position: relative;
    left: 5px;
    content: '--';
    letter-spacing: -2px;
    padding: 2px;
  }
  & nav {
    background: #f2f2f2;
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: rgba(242, 242, 242, 1);
    width: 90vw;
    margin: 0 auto;
    a {
      padding: 5px;
    }
  }
  & nav.sub-nav.hide {
    display: none;
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
            className={`${this.state.css} btn navbar-toggler`}
            onClick={this.navbarHandler}
          >
            MENU
          </button>
          <div className={`${this.state.css} full-nav`}>
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
    font-size: 16px;
    justify-content: center;
    letter-spacing: .5px;
    line-height: 27px;
    margin: 6px auto 0;
    text-align: center;
  }
  & a {
    font-size: 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
    color: var(--mainBlack);
  }
  & a.li {
    display: block;
    border: 5px solid var(--clear);
    padding: 2px;
  }
  & button.navbar-toggler {
    box-shadow: none;
    margin: .5rem auto 0;
  }
  & ul {
    margin 0px;
  }
  & div.full-nav.hide {
    display: none;
  }
  /* PROFESSIONALS link */
  & span.professionals a:first-child{
    font-size: 16px;
    border-right: unset;
  }
  /* LOGOUT link */
  & a.status-module--professional__logout__link--2sh3t{
    color: var(--mainBlack);
    font-size: 10px;
    position: relative;
    left: 2px;
    border: unset;
    padding: unset;
  }
 @media (min-width: 750px){
    display: none;
 };
`
