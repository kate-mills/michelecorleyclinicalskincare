import React from 'react'
import PropTypes from 'prop-types'
import "typeface-montserrat"

import SEO from '../components/FullSeo'

import { Logo } from './LogoImg'
import Announcement from './Announcement'
import { MobileNavbar, DesktopNavbar } from './Navbar'
import ProductSearch from './ProductSearch'

import Footer from './Footer'

const Layout = ({ description, image, seoTitle, title, noindex, children }) => {
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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

Layout.defaultProps = {
  description: '',
  image: 'https://michelecorleyclinicalskincare.com/michele-corley-logo.jpg',
  homePage: false,
  noindex: false,
  seoTitle: '',
  title: '',
}

export default Layout
