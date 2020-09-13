import React from 'react'
import Instagram from '../components/Instagram'
import { GrFacebook, GrVimeo } from 'react-icons/gr'

export default [
  {
    icon: <GrFacebook />,
    label: 'Go to Michele Corley Clinical Skincare Facebook Page',
    href: 'https://www.facebook.com/michelecorleyclinicalskincare/',
    class: 'facebook',
    style: { color: '#2055ef', background: 'white' },
  },
  {
    icon: <GrVimeo />,
    label: 'Go to Michele Corley Clinical Skincare Vimeo Page',
    href: 'https://vimeo.com/michelecorley',
    class: 'vimeo',
    style: { color: '#00adef', background: 'white' },
  },
  {
    icon: <Instagram />,
    label: 'Go to Michele Corley Clinical Skincare Instagram Page',
    href: 'https://www.instagram.com/michelecorleyskincare/',
    class: 'instagram-logo',
    style: { color: '#fff' },
  },
]
