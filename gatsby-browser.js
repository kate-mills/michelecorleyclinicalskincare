// import 'typeface-montserrat'
import 'typeface-montserrat/files/montserrat-latin-400.woff'
import './src/css/main.css'


export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `This application has been updated. ` +
      `Reload to display the latest version?`
  )
  if (answer === true) {
    window.location.reload()
  }
}
