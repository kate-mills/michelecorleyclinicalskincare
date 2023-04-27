import React from 'react'
import PropTypes from 'prop-types'
import "typeface-montserrat"

import SEO from '../components/FullSeo'

import { Logo } from './LogoImg'
import Announcement from './Announcement'
import { SpaLocatorFixedLink } from './SpaLocator'
import { MobileNavbar, DesktopNavbar } from './Navbar'
import ProductSearch from './ProductSearch'

import Footer from './Footer'

import { useLocation } from '@reach/router'
const SPA_LOCATOR_URL = '/spa-locator'

const Layout = props => {
  const { title, description, image, seoTitle, noindex, children } = props
  const { pathname } = useLocation()
  return (
    <>
      <SEO
        noindex={noindex}
        pageTitle={seoTitle || title}
        description={description}
        image={image}
      />
      <Announcement />
      <div id="content">
        <main>
          <MobileNavbar />
          <Logo />
          { pathname!==SPA_LOCATOR_URL && (
            <div style={{display: 'sticky', top: '0'}}>
              <ProductSearch tabIndex={0} />
              <SpaLocatorFixedLink pathname={pathname}/>
            </div>
          )}
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
  noindex: false,
  seoTitle: '',
  title: '',
}

export default Layout
