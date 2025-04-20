const getProps = name => {
  let path = name.match(/([A-Z]\w+|[A-Z])/gi).join('-').toLowerCase()
  return {
    name,
    path: `/${path}/`,
  }
}


export const links = [
  { ...getProps('HOME'), path: '/' },
  { ...getProps('PRODUCTS'), path: '',
    subMenu: [
      getProps('CLEANSERS'),
      getProps('TONERS'),
      getProps('EXFOLIANTS'),
      getProps('SERUMS & SPECIALTY'),
      getProps('MOISTURIZERS & SPF'),
      getProps('MASKS'),
      getProps('EYES & LIPS'),
    ],
  },
  { ...getProps('WHY MC?'), path: '',
    subMenu: [
      getProps('ABOUT'),
      getProps('ARTICLES'),
      getProps('BEFORE AND AFTER'),
      getProps('PRESS'),
      getProps('PRODUCT IMAGES & LOGOS'),
      getProps('RAVE REVIEWS!'),
      { ...getProps('WHY CHOOSE US?'), path: '/why-mc' },
    ],
  },
  { ...getProps('CONTACT') },
  { ...getProps('PROFESSIONALS'), path: '/pros'}
]
