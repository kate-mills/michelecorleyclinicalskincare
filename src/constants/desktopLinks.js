import React from 'react'
//import AniLink from 'gatsby-plugin-transition-link/AniLink'
import ProfessionalStatus from '../components/Professionals/Status'


export default [
  {
    name: 'HOME',
    path: '/',
    subMenu: []
  },
  {
    name: 'ABOUT',
    path: '/about/',
    subMenu: []
  },
  {
    name: 'PRODUCTS',
    subMenu: [
      { name: 'CLEANSERS',
        path: `/cleansers/`
      },
      { name: 'TONERS',
        path: `/toners/`
      },
      { name: 'MOISTURIZERS & SPF',
        path: `/moisturizers-spf/`
      },
      { name: 'EYES & LIPS',
        path: `/eyes-lips/`
      },
      { name: 'SERUMS & SPECIALTY',
        path: `/serums-specialty/`
      },
      { name: 'EXFOLIANTS',
        path: `/exfoliants/`
      },
      { name: 'MASKS',
        path: `/masks/`
      },
    ],
  },
  {
    name: 'WHY MC?',
    subMenu: [
      { name: 'WHY CHOOSE US?',
        path: `/why-mc/`
      },
      { name: 'BEFORE AND AFTER',
        path: `/before-and-after/`
      },
      { name: 'RAVE REVIEWS!',
        path: `/rave-reviews/`
      },
      { name: 'PRESS',
        path: `/press/`
      },
      { name: 'PRODUCT IMAGES & LOGOS',
        path: `/product-images-and-logos/`
      },
    ],
  },
  { name: 'CONTACT',
    path: '/contact/',
    subMenu: []
  },
  {
    name: 'PRO ORDERS',
    path: '/pro-orders/',
    subMenu: []
  },
  {
    name: <ProfessionalStatus />,
    id: 'education',
    path: '/app/education',
    subMenu: [],
  },
  {
    name: 'ARTICLES',
    path: '/articles/',
    subMenu: []
  },
]

export const seoLinks = [
  { page: 'Home', path: '/', id: 1 },
  { page: 'About', path: '/about', id: 2 },
  { page: 'Why Mc?', path: '/why-mc', id: 3 },
]
