function capFirstLetter(propertyName) {
  function lowerToTitle(match, offset, string) {
    return match.toUpperCase()
  }
  return propertyName.replace(/\b[a-z]/g, lowerToTitle)
}
