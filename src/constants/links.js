import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"

const createParentLink = (name, pth) => {
  let link= ( 
    <AniLink to={`/${pth}/`} fade
      style={{ 
        lineHeight: "32px",
        position: "initial"
      }}
    >{name}
    </AniLink>
  )
  return link
}

const createChildLink = (name, pthStr="") => {
  let pth = pthStr || name.replace(' & ', ' ').split(' ').join('-')
  let obj = {
      path: `/${pth}/`,
      text: (<span>{name}</span>),
  }
  return obj
}

export default [
  { path: "/", text: "home", menu: [] },
  { path: "/about/", text: "about", menu: [] },
  {
    text: createParentLink("products", "cleansers"),
    title: "PRODUCTS",
    menu: [
      createChildLink("cleansers", "cleansers"),
      createChildLink("toners", "toners"),
      createChildLink("moisturizers & spf"),
      createChildLink("eyes & lips"),
      createChildLink("serums & specialty"),
      createChildLink("exfoliants"),
      createChildLink("masks"),
    ]
  },
  {
    text: createParentLink("why mc?", "why-mc"),
    title: "WHY MC?",
    menu: [
      createChildLink("why choose us?", "why-mc"),
      createChildLink("before and after"),
      createChildLink("rave reviews!", "rave-reviews"),
      createChildLink("press"),
    ]
  },
  { path: "/contact/", text: "contact", menu: [] },
  { path: "/pro-orders/", text: "pro orders", menu: [] },
  { id: "professional", menu:[] },
  { text: createParentLink("education", "upcoming-classes"), title: "EDUCATION", menu: [ createChildLink("upcoming classes"), createChildLink("articles"), ] },
]
