import React from 'react'
import { isLoggedIn } from '../../utils/auth'
import Navigation from './components/Navigation'
import Manuals from './components/Manuals'
import Container from './components/Container'
import Form from './components/Form'

const DefaultRoute = props => {
  const [isPro, setIsPro] = React.useState(false)
  const {location} = props

  React.useEffect(() => {
    setIsPro(isLoggedIn())
  }, [])

  return !!isPro ? (
    <Container title="Professionals Only">
      <Navigation location={location} pth={'manuals'}/>
      <Manuals />
    </Container>
  ) : (
    <Container title="Pro Login" isPro={false}>
      <Form />
    </Container>
  )
}

export default DefaultRoute
