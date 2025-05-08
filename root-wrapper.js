import React from 'react'

import './src/css/main.css'

import 'typeface-montserrat'


export const wrapRootElement = ({element}) => {
  return (
    <React.Fragment key="wrapper">
      {element}
    </React.Fragment>
  )
}
