import React from 'react'
import styled from 'styled-components'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import icons from './icons'

const ProNavigation = props => {
  return (
    <div className={`${props.className}`}>
      <nav id="pronav">
        <ul className="pronav-list">
          {links.map((item, id) => {
            return (
              <li key={id} className={`${props.activePath === item.path ? 'active' : ''}`}>
                <AniLink fade to={item.path} className="pronav-list--link">
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
    </div>
  )
}

export default styled(ProNavigation)`
  & nav#pronav ul.pronav-list {
    border-top-style: solid;
    border-top-color: rgb(219, 219, 219);
    border-top-width: 1px;
    display: flex;
    flex-flow: row wrap;
    gap: 1rem 1.35rem;
    justify-content: space-evenly;
    align-items: center;
    margin-block-start: 2rem;
    & li {
      height: 52px;
      border-top-color: transparent;
      border-top-style: solid;
      border-top-width: 4px;
      & a.pronav-list--link {
        height: 52px;
        > div {
          display: flex;
          align-items: baseline;
          > svg {
            margin-inline-end: 5px;
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
    & li.active { border-top-color: var(--poppy); }
  }
`
const links = [
  { name: 'manuals', path: '/app/education/manuals',svg: icons.manuals },
  { name: 'kits',    path: '/app/education/kits',   svg: icons.kits },
  { name: 'facials', path: '/app/education/facials',svg: icons.facials},
  { name: 'classes', path: '/app/education/classes', svg: icons.classes }
]
