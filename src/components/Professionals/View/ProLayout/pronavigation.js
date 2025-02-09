import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import icons from './icons'

const ProNavigation = props => {
  return (
    <nav className={props.className}>
      <ul>
        {links.map((item, id) => {
          return (
            <li
              key={id}
              className={`${props.activePath === item.path ? 'active':''}`}
            >
              <AniLink fade to={item.path}>
                <div>
                  {item?.svg}
                  <span className="item-name">{item.name}</span>
                </div>
              </AniLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default styled(ProNavigation)`
  & {
    width: 100%;
    border-block-style: solid;
    border-block-color: rgb(219, 219, 219);
    border-block-width: 1px;
    ul {
      display: flex;
      flex-flow: row wrap;
      align-items: center;
      justify-content: space-evenly;
      gap: 1rem 2rem;
      margin: 0 auto;
      width: fit-content;
      & li {
        height: 52px;
        border-block-color: transparent;
        border-block-style: solid;
        border-block-width: 1px;
        padding-top: 3px;
        > a {
          height: 52px;
          > div {
            display: flex;
            align-items: center;
            height: 46px;
            > svg {
              margin-inline-end: 2px;
              height: 10px;
              width: 10px;
            }
            > span.item-name {
              font-weight: 600;
              font-size: 12px;
              line-height: 18px;
              letter-spacing: 0.1rem;
            }
          }
        }
      }
      & li.active {
        border-block-start-color: var(--poppy);
        > a{
          > div{
          }
        }
      }
    }
  }
`
const links = [
  { name:'manuals', path: '/pro/manuals', svg: icons.manuals},
  { name:'kits',    path: '/pro/kits',    svg: icons.kits },
  { name:'facials', path: '/pro/facials', svg: icons.facials},
  { name:'classes', path: '/pro/classes', svg: icons.classes},
  { name:'orders',  path: '/pro/orders',  svg: icons.manuals},
]
