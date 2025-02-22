import * as React from 'react'
import {Logo, ProductSearch} from './components'


const GlobalLayout = ({ title="", description="", image="", seoTitle="", noindex=false, children }) => {
  return (
    <>
      <div id="content">
        <Logo />
        <ProductSearch/>
        <main>{children}</main>
      </div>
    </>
  )
}

export default GlobalLayout
