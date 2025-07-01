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
  showSpaFndrLnk = true,
  children,
  showSearch = true,
  showLogo = true,
  isPro = false,
}) => {
  return (
    <>
      <Announcement />
      <div id="content">
        <main>
          <SpaFndrLnk display={showSpaFndrLnk}/>
          <SmNavbar />
          <Logo />
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
