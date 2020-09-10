import React from "react"
import PropTypes from "prop-types"

import { Logo } from "./LogoImg"
import Announcement from "./Announcement"
import MobileNavbar from "./globals/MobileNavbar"
import DesktopNavbar from "./globals/DesktopNavbar"
import ProductSearch  from "./ProductSearch"

import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <main>
        <MobileNavbar />
        <Logo/>
        <ProductSearch tabIndex={0}/>
        <DesktopNavbar tabIndex={0}/>
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
