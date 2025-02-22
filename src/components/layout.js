import * as React from 'react'
import Logo from './Logo'

const Layout = ({title, description, image, seoTitle, noindex, children}) => {
  return(
    <>
      <div id="content">
        <Logo/>
        <main>
          {children}
        </main>
      </div>
  </>
  )
}

export default Layout
