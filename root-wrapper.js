import React from 'react'
import './src/css/main.css'
import "@fontsource/montserrat"; // Defaults to weight 400



export const wrapRootElement = ({element}) => {
  return (
    <React.Fragment key="wrapper">
      {element}
    </React.Fragment>
  )
}
