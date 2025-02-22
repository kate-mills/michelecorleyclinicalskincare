import * as React from 'react'
import {Announcement, Logo, ProductSearch} from './components'


const GlobalLayout = ({ title="", description="", image="", seoTitle="", noindex=false, children }) => {
  return (
    <>
        <Announcement/>
      <div id="content">
        <Logo />
        <ProductSearch/>
        <main>{children}</main>
      </div>
    </>
  )
}

export default GlobalLayout
