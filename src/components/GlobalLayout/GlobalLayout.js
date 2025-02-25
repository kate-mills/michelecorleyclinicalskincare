import * as React from 'react'
import { Announcement, Logo, ProductSearch, Footer, Navbar } from './components'

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
          <Navbar/>
          <ProductSearch />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
