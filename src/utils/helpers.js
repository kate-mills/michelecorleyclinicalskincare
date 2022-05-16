const isTypeArray = arg => Array.isArray(arg)

const getSymanticSkinTypes = skinType => {
  if (!isTypeArray) return ''

  // if list is longer than 1, use 'and' to join last item
  let sentence =
    skinType.length > 1
      ? skinType
          .slice(0, -1)
          .join(', ')
          .concat(', and ' + skinType.slice(-1))
      : skinType.join(', ')

  // match '(all) skin [type OR condition](s)'
  let regex = /(all)? skin (type|condition)s?/gi

  // If match is found in sentence, don't add 'skin types'
  return sentence.match(regex) ? sentence : sentence.concat(' skin types')
}

export { getSymanticSkinTypes }
