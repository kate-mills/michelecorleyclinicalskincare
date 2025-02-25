import * as React from 'react'
import { Announcement, Logo, ProductSearch, Footer, NavbarLg } from './components'

const GlobalLayout = ({
  title = '',
  description = '',
  image = '',
  seoTitle = '',
  noindex = false,
  children,
}) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <main>
          <Logo />
          <ProductSearch />
          <NavbarLg/>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
