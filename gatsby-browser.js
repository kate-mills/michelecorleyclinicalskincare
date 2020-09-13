import './src/css/main.css'

import {wrapRootElement as wrap} from './root-wrapper'

export const wrapRootElement = wrap


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
