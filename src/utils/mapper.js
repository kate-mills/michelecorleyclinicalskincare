//38.361357, -122.305485

const handleGoogleApi = () => {
  const isClient = typeof window !== 'undefined'

  let key = `${process.env.GATSBY_GOOGLE_MAPS_API_KEY}`
  let lng = `-122.3076951`
  let lat = `38.3611302`
  let address = `4242 Big Ranch Road, Napa, CA 94558`
  return {
    isBrowser: isClient,
    api_key: key,
    lng: lng,
    lat: lat,
    address: address,
  }
}

export const cb = fn => fn()

export const getGoogleApi = () => {
  return cb(handleGoogleApi)
}
