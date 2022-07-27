import React from 'react'
import PropTypes from 'prop-types'

import { Helmet } from 'react-helmet'

import { Logo } from './LogoImg'
import Announcement from './Announcement'
import {MobileNavbar, DesktopNavbar} from './Navbar'
import ProductSearch from './ProductSearch'

import Footer from './Footer'

const Layout = ({noindex=false, children }) => {
  return (
    <>
        {noindex && <Helmet><meta name="robots" content="noindex nofollow"/></Helmet>}

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

export default Layout
