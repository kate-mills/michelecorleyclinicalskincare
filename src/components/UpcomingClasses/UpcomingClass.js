import React from "react"
import Img from 'gatsby-image'
import styled from "styled-components"
import ClassMap from './ClassMap'

const SingleClass = ({className, id, data:{data}}) => {
  return (
    <>
      <div className={`${className} upcoming-class`}>
        <h2 className="class__name poppy">{data.name}</h2>

        <div className="left__column">
          <h4 className="left__heading">{data.heading}</h4>
          <div className="left__image__container"> 
            <Img fluid={data.image.localFiles[0].childImageSharp.fluid} />
          </div>
          {
            data.heading_details && (<p className="left__heading__details">{data.heading_details}<br/>{data.datestr}</p>)
          }
          <h4 className="class__location">Located at {data.location}</h4>
          <h4 className="class__address">{data.address}<br/>{data.city_state}</h4>

        </div>
        <div className="right__column">
          <div className="class__description__container">
            <p className="class__description description">{data.description}</p>
          </div>
          <div className="map-container">
            <ClassMap />
          </div>
        </div>
      </div>
      <hr className="single-class"/>
    </>
  )
}
const Wrapper = styled(SingleClass)`
& {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: fit-content;
  width: 100%;
}
& .class__name{
  width: 100%;
  text-align: center;
  font-weight: 400;
}
& .left__column, & .right__column{
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 50%;
  text-align: center;
  white-space: pre-wrap;
  margin: 0 auto;
  text-align: center;
  padding: 0.2em 0.5em 0.1em;
}
& h4 {
  color: var(--mainBlack);
  font-style: normal;
  font-size: 21px;
  font-weight: 300;
  letter-spacing: 1px;
  line-height: 32px;
  text-align: center;
}
& .left__heading{
  font-weight: 700;
  margin-top: 0px;
}
& .left__image__container .gatsby-image-wrapper{
  width: 60%;
  margin-bottom: 1em;
}
& .class__description__container, & .left__image__container{
  display: flex;
  justify-content: center;
  align-items: center;
}
& .class__location{
  margin-top: 0px;
  padding-top: unset;
}
& .class__address{
  font-style: italic;
  font-weight: 300;
  margin: unset;
}
& .class__description{
  text-align: justify;
  padding-bottom: 0.2em;
}
& .map-container{
  width: 100%;
  height: 300px;
  maxHeight: fit-content!important;
  display: flex;
  justify-content: center;
  align-items: center;

}
& .left__heading__details{
  text-align: center;
  margin: 10px auto;
}
@media (max-width: 767px){
  & {
    flex-direction: column;
  }
  & .left__column, & .right__column{ 
    width: 100%; 
    margin: 0 auto !important;
    justify-content: center !important;
  }
  & .class__location, & .class__description{
    margin: 0 auto;
  }
  & .map-container .googl-map{
    width: 100%;
    height:300px;
    margin: 0 auto;
  }
}
`
export default Wrapper;
