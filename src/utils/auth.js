import { useLocation } from '@reach/router'

const isBrowser = typeof window !== `undefined`
// error "window" is not available during server side rendering. - reminder to myself

const getUser = () =>
  window.localStorage.mccUser ? JSON.parse(window.localStorage.mccUser) : {}

const setUser = user => (window.localStorage.mccUser = JSON.stringify(user))

export const handleLogin = ({ username, password }) => {
  if (!isBrowser) return false

  if (
    username === `${process.env.GATSBY_USER_NAME}` &&
    password === `${process.env.GATSBY_USER_PSWD}`
  ) {
    console.log(`Credentials match! Setting the active user.`)
    return setUser({
      name: `Professional`,
      legalName: `Michele Corley`,
      email: `customerservice@michelecorley.com`,
    })
  }

  return false
}

export const isLoggedIn = () => {
  if (!isBrowser) return false

  const user = getUser()

  return !!user.email
}

export const getCurrentUser = () => isBrowser && getUser()

export const logout = callback => {
  if (!isBrowser) return

  console.log(`Ensuring the \`ProfessionalUser\` property exists.`)
  setUser({})
  callback()
}

export const cb = fn => fn()
export const isAppInPath = () => {
  const location = cb(useLocation)
  let pathname = location.pathname
  return pathname.match(/app/g)
}


// When user closes image modal, they return back to where they clicked. Not top of page
export const getHashedLocation = (name) => {
  const location = cb(useLocation)
  let pathname = location.pathname
  return (name && `${pathname}#${name}`) || pathname;
}
