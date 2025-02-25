const getProps = name => {
  let path = name.match(/([A-Z]\w+|[A-Z])/gi).join('-').toLowerCase()
  return {
    name,
    path: `/${path}/`,
  }
}

export const links = [
  { ...getProps('HOME'), path: '/', },
  { ...getProps('ABOUT')},

  { ...getProps('PRODUCTS'),
    path: '/cleansers/',
    subMenu: [
      getProps('CLEANSERS'),
      getProps('TONERS'),
      getProps('MOISTURIZERS & SPF'),
      getProps('EYES & LIPS'),
      getProps('SERUMS & SPECIALTY'),
      getProps('EXFOLIANTS'),
      getProps('MASKS'),
    ],
  },
  { ...getProps('WHY MC?'),
    subMenu: [
      { ...getProps('WHY CHOOSE US?'), path: '/why-mc' },
      getProps('BEFORE AND AFTER'),
      getProps('RAVE REVIEWS!'),
      getProps('PRESS'),
      getProps('PRODUCT IMAGES & LOGOS'),
    ],
  },
  { ...getProps('CONTACT') },
  { ...getProps('ARTICLES') },
]
