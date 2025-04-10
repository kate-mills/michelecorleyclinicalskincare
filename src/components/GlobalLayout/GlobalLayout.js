import * as React from 'react'
import { Announcement, Logo, ProductSearch, Footer, SmNavbar, LgNavbar, SpaFndrLnk } from './components'

const GlobalLayout = ({
  title = '',
  description = '',
  image = '',
  seoTitle = '',
  noindex = false,
  showSpaFndrLnk=true,
  children,
}) => {
  return (
    <>
      <div id="announcement"><Announcement /></div>
      <div id="content">
        <main>
          { !!showSpaFndrLnk &&(<SpaFndrLnk/>) }
          <SmNavbar/>
          <Logo />
          <ProductSearch />
          <LgNavbar/>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
