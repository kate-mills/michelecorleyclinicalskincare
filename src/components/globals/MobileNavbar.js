import React, { Component, useState } from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import links from '../../constants/links'
import { screen } from '../../css/js/media-functions'
import ProfessionalStatus from '../Professionals/Status'

const MoreItems = props => {
  const [isOpen, setIsOpen] = useState(false);
  const [css, setCss] = useState('hide');

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
        {props.name}
      </button>
      <nav className={`${css} sub-nav`}>
        <ul className={`${css} sub-ul`}>
          {props.menu.map((item, id) => {
            return (
              <li key={id} className={`${css} child`}>
                <AniLink fade to={item.path}>
                  {' '}
                  {item.text}
                </AniLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </MoreItemsWrapper>
  )
};

const MoreItemsWrapper = styled.div`
  & > * {
    font-family: var(--mainFont);
    color: var(--mainBlack);
  }
  & button.plus-btn, & li.show.child {
    border: none;
    display: inline-block;
    position: sticky;
    font-size: 16px;
    cursor: pointer;
    border: 5px solid var(--clear);
    padding: 2px;
    background: var(--mainWhite);
  }
  & li.show.child{
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
  }
  & nav.sub-nav.hide {
    display: none;
  }
`;

class MobileNavbar extends Component {
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
            className={`${this.state.css} navbar-toggler`}
            onClick={this.navbarHandler}
            style={{color: "var(--mainBlack)", fontWeight: "500"}}
          >
            MENU
          </button>
          <div className={`${this.state.css} full-nav`}>
            {links.map((item, id) => {
              if (item.id === 'education') {
                return <ProfessionalStatus key={id} className="li" />
              } else {
                return item.menu.length > 0 ? (
                  <MoreItems key={id} name={item.title} menu={item.menu} />
                ) : (
                  <AniLink key={id} className="li" fade to={item.path}>
                    {item.text}
                  </AniLink>
                )
              }
            })}
          </div>
        </div>
      </div>
    )
  }
};

export default styled(MobileNavbar)`
  & {
    align-items: center !important;
    display: flex;
    font-size: 16px;
    justify-content: center;
    letter-spacing: .5px;
    line-height: 27px;
    margin: 6px auto;
    text-align: center;
  }
  & a {
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 400;
  }
  & a.li{
    display: block;
    border: 5px solid var(--clear);
    padding: 2px;
  }
  & button.navbar-toggler {
    background:var(--mainWhite);
    border: none;
    cursor: pointer;
    display: block;
    font-size: 18px;
    margin: 4px auto;
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
  ${screen.nav.wide`&{display: none;}`};
`;
