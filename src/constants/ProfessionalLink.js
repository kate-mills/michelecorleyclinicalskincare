import { isLoggedIn } from '../utils/auth'

export default () => {
  if (!isLoggedIn()) {
    return {
      path: '/app/login',
      text: 'professionals',
      menu: [],
    }
  } else {
    return {
      path: '/app/professionals',
      text: 'professionals',
      menu: [],
    }
  }
}
