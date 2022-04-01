const isBrowser = typeof window !== `undefined`

export const setHideStatus = () =>
  (window.localStorage.announcement = JSON.stringify({ close: 1 }))

const checkWindow = () => {
  if (!isBrowser) return false

  if (!window.localStorage.announcement) {
    window.localStorage.announcement = JSON.stringify({})
    return {}
  } else {
    return JSON.stringify(window.localStorage.announcement).length === 15
      ? JSON.parse(window.localStorage.announcement).close
      : {}
  }
}

export const getAnnouncementStatus = () => {
  return checkWindow() !== 1
}
