import React from 'react'
import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ProfessionalStatus from '../components/Professionals/Status'

const createParentLink = (name, pth) => {
    return <AniLink to={`/${pth}/`} fade >{name}</AniLink>
}

const subLinkProps = (name, pth) => {
  let path = ((pth || name).match(/([A-Z]\w+|[A-Z])/gi)).join('-').toLowerCase()
  return {
    path: `/${path}/`,
    text: name,
  }
}

export default [
  { path: '/', text: 'home', menu: [] },
  { path: '/about/', text: 'about', menu: [] },
  {
    text: createParentLink('products', 'cleansers'),
    title: 'PRODUCTS',
    menu: [
      subLinkProps('cleansers', 'cleansers'),
      subLinkProps('toners', 'toners'),
      subLinkProps('moisturizers & spf'),
      subLinkProps('eyes & lips'),
      subLinkProps('serums & specialty'),
      subLinkProps('exfoliants'),
      subLinkProps('masks'),
    ],
  },
  {
    text: createParentLink('why mc?', 'why-mc'),
    title: 'WHY MC?',
    menu: [
      subLinkProps('why choose us?', 'why-mc'),
      subLinkProps('before and after', 'before-and-after'),
      subLinkProps('rave reviews!', 'rave-reviews'),
      subLinkProps('press', 'press'),
      subLinkProps('product images & logos', 'product-images-and-logos'),
    ],
  },
  { path: '/contact/', text: 'contact', menu: [] },
  { path: '/pro-orders/', text: 'pro orders', menu: [] },
  { id: 'education', path: '/app/education/manuals', text: <ProfessionalStatus/> , menu: [] },
  { path: '/articles/', text: 'articles', menu: [] },
]

export const seoLinks = [
  { page: 'Home', path: '/', id: 1 },
  { page: 'About', path: '/about', id: 2 },
  { page: 'Why Mc?', path: '/why-mc', id: 3 },
]
