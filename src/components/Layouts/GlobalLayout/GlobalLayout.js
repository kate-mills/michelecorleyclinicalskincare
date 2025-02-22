import * as React from 'react'
import {Logo} from './components'

const GlobalLayout = ({ title="", description="", image="", seoTitle="", noindex=false, children }) => {
  return (
    <>
      <div id="content">
        <Logo />
        <main>{children}</main>
      </div>
    </>
  )
}

export default GlobalLayout
