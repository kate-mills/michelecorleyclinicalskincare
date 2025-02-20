import React from 'react'
import 'typeface-montserrat'

import SEO from '../components/FullSeo'
import { Logo } from './LogoImg'
import Announcement from './Announcement'
import { MobileNavbar, DesktopNavbar } from './Navbar'
import ProductSearch from './ProductSearch'

import Footer from './Footer'


const Layout = props => {
  const {title="", description="", image="", seoTitle="", noindex=false, 
    hideProductSearch=false, hideNavbars=false, children } = props
  return (
    <>
      <SEO
        noindex={noindex}
        title={seoTitle || title}
        description={description}
        image={image || 'https://michelecorleyclinicalskincare.com/michele-corley-logo.jpg'}
      />
      <Announcement />
      <div id="content">
        <main>
          {!hideNavbars && <MobileNavbar />}
          <Logo />
          {!hideProductSearch && (
            <div style={{ display: 'sticky', top: '0' }}>
              <ProductSearch tabIndex={0} />
            </div>
          )}
          {!hideNavbars && <DesktopNavbar tabIndex={0} />}
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default Layout
