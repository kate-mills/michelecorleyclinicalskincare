import React from 'react'
//import Instagram from '../components/Instagram'
import { GrFacebook, GrVimeo, GrPinterest, GrInstagram } from 'react-icons/gr'

let iconStyle = {
  backgroundColor: 'var(--mainWhite)',
  color: 'var(--clr-primary-5)'
}
export default [
  {
    icon: <GrFacebook />,
    label: 'Estheticians and Skin Care Pros, learn more about Michele Corley Clinical Skin Care Products and our commitment to your success in our Facebook Group!',
    href: 'https://www.facebook.com/michelecorleyclinicalskincare/',
    class: 'icon',
    style: {...iconStyle},
  },{
    icon: <GrPinterest />,
    label: 'Follow us on Pinterest, where you\'ll find all our favorite pics!',
    href: 'https://www.pinterest.com/michelecorleyskincare/',
    class: 'icon',
    style: {...iconStyle},
  },{
    icon: <GrVimeo />,
    href: 'https://vimeo.com/michelecorley',
    class: 'icon',
    style: {...iconStyle},
    label: 'Go to Vimeo, where Michele Corley answers your questions and details all our professional wholesale skincare.',
  },{
    icon: <GrInstagram/>,
    label: 'Follow us on Instagram for announcements and see our latest skincare images.',
    href: 'https://www.instagram.com/michelecorleyskincare/',
    class: 'icon',
    style: {...iconStyle},
  },
]
