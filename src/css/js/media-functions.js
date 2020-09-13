export const screen = {
  phone: {
    phone: (...args) => {
      return `@media (min-width: 0px) and (max-width: 480px){${args};};`
    },
  },
  tablet: {
    small: (...args) => {
      return `@media(min-width:481px) and (max-width: 767px){${args};};`
    },
    landscape: (...args) => {
      return `@media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};`
    },
    portrait: (...args) => {
      return `@media(min-width:768px) and (max-width:1024px){${args};};`
    },

    tablet: (...args) => {
      return `
        @media(min-width:481px) and (max-width: 767px){${args};};
        @media(min-width:768px) and (max-width:1024px) and (orientation:landscape){${args};};
        @media(min-width:768px) and (max-width:1024px){${args};};
    `
    },
  },

  desktop: {
    small: (...args) => {
      return `@media (min-width: 1025px) and (max-width:1280px){${args};};`
    },
    desktop: (...args) => {
      return `
        @media (min-width: 1025px) and (max-width: 1280px) {${args};};
        @media (min-width: 1281px){${args};};
      `
    },
  },
  nav: {
    narrow: (...args) => {
      return ` @media (max-width: 749px){${args};};`
    },
    wide: (...args) => {
      return ` @media (min-width: 750px){${args};};`
    },
  },

  minmax: {
    narrow: (...args) => {
      return ` @media (max-width: 739px){${args};};`
    },
    wide: (...args) => {
      return ` @media (min-width: 740px){${args};};`
    },
  },
}
