import React from 'react'
//import Instagram from '../components/Instagram'
import { GrFacebook, GrVimeo, GrPinterest, GrInstagram } from 'react-icons/gr'

let iconStyle = {
  backgroundColor: 'var(--mainWhite)',
  color: 'var(--darkGrey)'
}
export default [
  {
    icon: <GrFacebook />,
    class: 'icon',
    label: 'Michele Corley Clinical Skin Care on Facebook',
    href: 'https://www.facebook.com/michelecorleyclinicalskincare/',
    srt: 'Estheticians and Skin Care Pros, learn more about Michele Corley Clinical Skin Care Products and our commitment to your success in our Facebook Group!',
    style: {...iconStyle},
  },{
    icon: <GrPinterest />,
    class: 'icon',
    label: 'Michele Corley Clinical Skin Care on Pinterest',
    href: 'https://www.pinterest.com/michelecorleyskincare/',
    srt: 'Follow us on Pinterest, where you\'ll find all our favorite pics!',
    style: {...iconStyle},
  },{
    icon: <GrVimeo />,
    class: 'icon',
    href: 'https://vimeo.com/michelecorley',
    label: 'Michele Corley Clinical Skin Care on Vimeo',
    srt: 'Go to Vimeo, where Michele Corley answers your questions and details all our professional wholesale skincare.',
    style: {...iconStyle},
  },{
    icon: <GrInstagram/>,
    class: 'icon',
    href: 'https://www.instagram.com/michelecorleyskincare/',
    label: 'Michele Corley Clinical Skin Care on Instagram',
    srt: 'Follow us on Instagram for announcements and see our latest skincare images.',
    style: {...iconStyle},
  },
]
