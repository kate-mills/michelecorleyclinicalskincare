import * as React from 'react'
import {
  Announcement,
  Logo,
  ProductSearch,
  Footer,
  SmNavbar,
  LgNavbar,
  SpaFndrLnk,
} from './components'

const GlobalLayout = ({
  title = '',
  description = '',
  image = '',
  seoTitle = '',
  noindex = false,
  showSpaFndrLnk = true,
  children,
  showSearch = true,
  showLogo = true,
  isPro = false,
}) => {
  return (
    <>
      {!isPro && (
        <div id="announcement">
          <Announcement />
        </div>
      )}
      <div id="content">
        <main>
          {!!showSpaFndrLnk && <SpaFndrLnk />}
          <SmNavbar />
          {!isPro && <Logo />}
          {!!showSearch && <ProductSearch />}
          <LgNavbar />
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
