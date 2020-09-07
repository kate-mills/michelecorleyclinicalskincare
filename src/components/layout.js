import React from "react"
import PropTypes from "prop-types"

import { OptLogo } from "./LogoImg"
import Announcement from "./Announcement"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import CallToActionBtn from "./CallToActionBtn"
import ProductSearch  from "./ProductSearch"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <main>
        <MobileNavbar />
        <OptLogo/>
        <ProductSearch/>
        <DesktopNavbar />
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
