const onlyLettersRegex = /([A-Z]\w+|[A-Z])/gi
const matchLettersJoinDash = str => str.match(onlyLettersRegex).join('-').toLowerCase()  

export {
  matchLettersJoinDash
}
