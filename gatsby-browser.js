import "@fontsource/montserrat/variable.css";
import "@fontsource/montserrat/variable-italic.css";

import './src/css/main.css';


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
