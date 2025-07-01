import * as React from 'react'

import './src/css/main.css'

//import '@fontsource/montserrat/400.css';
//import '@fontsource/montserrat/600.css';

import '@fontsource-variable/montserrat';

export const wrapRootElement = ({element}) => {
  return (
    <React.Fragment key="wrapper">
      {element}
    </React.Fragment>
  )
}
