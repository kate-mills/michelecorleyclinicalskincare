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
      <div id="announcement">
        <Announcement />
      </div>
      <div id="content">
        <main>
          <SmNavbar />
          <Logo />
          {!!showSearch && <ProductSearch />}
          <LgNavbar isPro={isPro}/>
          {children}
          <Footer />
          <SpaFndrLnk display={showSpaFndrLnk} />
        </main>
      </div>
    </>
  )
}

export default GlobalLayout
