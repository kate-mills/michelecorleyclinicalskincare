const isBrowser = typeof window !== `undefined`

const setStatus = noAnnouncement => (window.localStorage.closeAnnouncement = JSON.stringify(1))
export const checkStatus = () => window.localStorage.closeAnnouncement ? JSON.parse(window.localStorage.closeAnnouncement) : {}

export const handleStatus = () => {
  if (!isBrowser) return false
  setStatus();
}

export const hideAnnouncement = () => isBrowser && checkStatus()===1