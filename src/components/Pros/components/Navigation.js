import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const ProNavigation = props => {
  const {
    location: { pathname },
  } = props

  let nm = pathname.split('/')[2]

  return (
    <nav className={props.className}>
      <ul>
        {links.map((item, id) => {
          return (
            <li
              key={id}
              className={`${
                nm === item.name || pathname === item.path ? 'active' : ''
              }`}
            >
              <Link to={item.path}>
                <div>
                  {item?.svg}
                  <span className="item-name">{item.name}</span>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

const icons = {
  kits: (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path
        d="M10.5 2.4H9C9 1.074 7.6575 0 6 0C4.3425 0 3 1.074 3 2.4H1.5C0.675 2.4 0 2.94 0 3.6V10.8C0 11.46 0.675 12 1.5 12H10.5C11.325 12 12 11.46 12 10.8V3.6C12 2.94 11.325 2.4 10.5 2.4ZM6 1.2C6.825 1.2 7.5 1.74 7.5 2.4H4.5C4.5 1.74 5.175 1.2 6 1.2ZM10.5 10.8H1.5V3.6H3V4.8C3 5.13 3.3375 5.4 3.75 5.4C4.1625 5.4 4.5 5.13 4.5 4.8V3.6H7.5V4.8C7.5 5.13 7.8375 5.4 8.25 5.4C8.6625 5.4 9 5.13 9 4.8V3.6H10.5V10.8Z"
        fill="#4E4E4E"
      />
    </svg>
  ),
  facials: (
    <svg width="12" height="12" viewBox="0 0 12 12">
      <path
        d="M6 12C5.27 11.91 4.545 11.7124 3.825 11.4072C3.105 11.1024 2.4624 10.665 1.8972 10.095C1.3324 9.525 0.875 8.805 0.525 7.935C0.175 7.065 0 6.02 0 4.8V4.2H0.6C1.11 4.2 1.635 4.265 2.175 4.395C2.715 4.525 3.22 4.72 3.69 4.98C3.81 4.12 4.0826 3.2374 4.5078 2.3322C4.9326 1.4274 5.43 0.65 6 0C6.57 0.65 7.0676 1.4274 7.4928 2.3322C7.9176 3.2374 8.19 4.12 8.31 4.98C8.78 4.72 9.285 4.525 9.825 4.395C10.365 4.265 10.89 4.2 11.4 4.2H12V4.8C12 6.02 11.825 7.065 11.475 7.935C11.125 8.805 10.6674 9.525 10.1022 10.095C9.5374 10.665 8.8976 11.1024 8.1828 11.4072C7.4676 11.7124 6.74 11.91 6 12ZM5.97 10.77C5.86 9.11 5.3676 7.855 4.4928 7.005C3.6176 6.155 2.53 5.63 1.23 5.43C1.34 7.14 1.8476 8.415 2.7528 9.255C3.6576 10.095 4.73 10.6 5.97 10.77ZM6 6.96C6.15 6.74 6.3326 6.5124 6.5478 6.2772C6.7626 6.0424 6.97 5.84 7.17 5.67C7.15 5.1 7.0374 4.505 6.8322 3.885C6.6274 3.265 6.35 2.66 6 2.07C5.65 2.66 5.3726 3.265 5.1678 3.885C4.9626 4.505 4.85 5.1 4.83 5.67C5.03 5.84 5.24 6.0424 5.46 6.2772C5.68 6.5124 5.86 6.74 6 6.96ZM7.17 10.5C7.54 10.38 7.925 10.205 8.325 9.975C8.725 9.745 9.0976 9.4324 9.4428 9.0372C9.7876 8.6424 10.0826 8.15 10.3278 7.56C10.5726 6.97 10.72 6.26 10.77 5.43C9.83 5.57 9.005 5.8824 8.295 6.3672C7.585 6.8524 7.04 7.47 6.66 8.22C6.78 8.54 6.8826 8.89 6.9678 9.27C7.0526 9.65 7.12 10.06 7.17 10.5Z"
        fill="#4E4E4E"
      />
    </svg>
  ),
  classes: (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1 4H13" stroke="#4E4E4E" strokeLinejoin="round" />
      <path
        d="M8 1L10 4"
        stroke="#4E4E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4 1L6 4"
        stroke="#4E4E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M1 7V9.06919C1 10.7784 1.4188 11.4726 1.9636 12.0359C2.5276 12.5806 3.2224 13 4.9312 13H9.0688C10.7776 13 11.4724 12.5806 12.0364 12.0359C12.5812 11.4726 13 10.7784 13 9.06919V4.93081C13 3.22218 12.5812 2.52745 12.0364 1.9641C11.4724 1.41936 10.7776 1 9.0688 1H4.9312C3.2224 1 2.5276 1.41936 1.9636 1.9641C1.4188 2.52745 1 3.22218 1 4.93081V7Z"
        stroke="#4E4E4E"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.57134 9.75C5.51671 9.75 5.46394 9.7384 5.41739 9.7173L5.40068 9.70862C5.35048 9.68252 5.3121 9.64669 5.28687 9.6073C5.26181 9.56819 5.24997 9.52615 5.25 9.48517V9.48498L5.25 6.51511L5.25 6.51478C5.24995 6.4737 5.2618 6.43156 5.2869 6.39235C5.31217 6.35286 5.35063 6.31695 5.40092 6.29078C5.45129 6.26458 5.51018 6.24999 5.5714 6.25C5.63262 6.25001 5.69151 6.26462 5.74187 6.29084L5.742 6.29091L8.5987 7.77612L8.59883 7.77619C8.64914 7.80231 8.68763 7.83819 8.71295 7.87765C8.73809 7.91684 8.75 7.95897 8.75 8.00004C8.75 8.04112 8.73809 8.08325 8.71295 8.12243C8.68763 8.1619 8.64914 8.19778 8.59883 8.2239L8.5987 8.22397L5.742 9.70918L5.742 9.70918C5.69157 9.7354 5.63262 9.75 5.57134 9.75Z"
        fill="#4E4E4E"
        stroke="#4E4E4E"
        strokeWidth="0.5"
      />
    </svg>
  ),
  manuals: (
    <svg width="10" height="10" viewBox="0 0 10 10">
      <path
        d="M1.11111 0C0.503854 0 0 0.503854 0 1.11111V8.88889C0 9.49615 0.503854 10 1.11111 10H8.88889C9.49615 10 10 9.49615 10 8.88889V1.11111C10 0.503854 9.49615 0 8.88889 0H1.11111ZM1.11111 1.11111H8.88889V8.88889H1.11111V1.11111ZM6.11111 2.22222V3.33333H7.77778V2.22222H6.11111ZM3.01975 2.22331C2.76419 2.21275 2.53019 2.33951 2.3763 2.5434C1.83964 3.25229 2.85573 4.08169 3.09462 4.30447C3.2374 4.4378 3.41497 4.59634 3.51997 4.68967C3.57274 4.73689 3.65056 4.73689 3.70334 4.68967C3.8089 4.59578 3.98483 4.43725 4.1276 4.30447C4.36649 4.08169 5.38259 3.25229 4.84592 2.5434C4.69148 2.33951 4.45803 2.21275 4.20247 2.22331C3.82192 2.23886 3.61111 2.51194 3.61111 2.51194C3.61111 2.51194 3.4003 2.23886 3.01975 2.22331ZM5 4.44444V5.55556H7.77778V4.44444H5ZM2.22222 6.66667V7.77778H7.77778V6.66667H2.22222Z"
        fill="#4E4E4E"
      />
    </svg>
  ),
}

const links = [
  { name: 'manuals', path: '/pros/manuals/', svg: icons.manuals },
  { name: 'kits', path: '/pros/kits/', svg: icons.kits },
  { name: 'facials', path: '/pros/facials/', svg: icons.facials },
  { name: 'classes', path: '/pros/classes/', svg: icons.classes },
  { name: 'orders', path: '/pros/orders/', svg: icons.manuals },
]

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
        border-block-color: transparent;
        border-block-style: solid;
        border-block-width: 1px;
        padding-block: 3px;
        > a {
          height: 52px;
          &[aria-current='page'] {
            > div {
              background: var(--m2);
            }
          }
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
        border-block-color: var(--poppy);
        > a {
          > div {
            background: var(--clear);
            > svg {
              & path {
                stroke: var(--m1);
              }
            }
            > span.item-name {
              color: var(--m1);
            }
          }
        }
      }
    }
  }
`
