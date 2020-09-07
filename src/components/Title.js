import React from "react"
import styled from "styled-components"

const Title = ({ className, title, center }) => {
  console.log('title', title)
  let heading = (<h1 style={{marginTop: "0"}}className={className}>{title}</h1>)
  let centeredHeading = (<h1 style={{margin:"20px auto", textAlign: "center"}}className={className}>{title}</h1>)
  return (
    (center===true) ? centeredHeading : heading
  )
}

export default styled(Title)`
  & {
    color: ${props => props.color ? props.color : "var(--poppy)"};
    font-size: ${props => props.size ? props.size : "45px"};
    font-weight:${props => props.weight ? props.weight: "300"};
    text-align: ${props => props.align ? props.align : "left"};
    margin-left: ${props => props.align==="center" ? "auto" : "unset"};

    text-transform: ${props => props.transform ? props.transform : "capitalize"};
    letter-spacing: 1px;
    line-height: 54px;
    width: fit-content;
    padding-left: 0px;
    padding-right: 0px;
  }
`
