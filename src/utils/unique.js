const initChecker = (term) => {
  let re = new RegExp(`^\\b${term}`, 'gi')
   return (place) => !! re.exec(place)
}

const getUnique = (results, query) =>{
  let checker =  initChecker(query)
  return Array.from(new Set([...results].map((place)=>{
    if(!!checker(place.zip)){
      return`${place.city} ${place.statecode} ${place.zip}`
    }
    else if(!!checker(place.city)){
      return `${place.city}  ${place.statecode}`
    }else if(!!checker(place.statecode) || checker(place.state)){
      return `${place.statecode} USA`
    }
    else{
      return null
    }
  }))).sort()
 }
export {getUnique}
