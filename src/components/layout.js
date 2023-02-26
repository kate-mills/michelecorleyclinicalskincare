import React from 'react'
import PropTypes from 'prop-types'
import "typeface-montserrat"

import SEO from '../components/FullSeo'


import Announcement from './Announcement'
import Footer from './Footer'
import {SpaLocatorFixedLink} from './SpaLocator'
import { Logo } from './LogoImg'
import { MobileNavbar, DesktopNavbar } from './Navbar'
import ProductSearch from './ProductSearch'


const Layout = (props) => {

  const {title, description, image, seoTitle, noindex, children} = props
  return (
    <>
      <SEO
        noindex={noindex}
        title={seoTitle || title}
        description={description}
        image={image}
      />
      <Announcement />
      <div id="content">
        <main>
          <MobileNavbar />
          <Logo />
          <ProductSearch tabIndex={0} />
          <DesktopNavbar tabIndex={0} />
          {children}
          <Footer />
        </main>
      </div>
    <SpaLocatorFixedLink/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  description: '',
  image: 'https://michelecorleyclinicalskincare.com/michele-corley-logo.jpg',
  noindex: false,
  seoTitle: '',
  title: '',
}

export default Layout
