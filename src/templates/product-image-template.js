import React from 'react'
import SEO from '../components/seo'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import AniLink from "gatsby-plugin-transition-link/AniLink";


const ProductImageTemplate = props => {
  const { data: { product }, className, location } = props
  const closeTo = location.state.closeTo || "/";
  return (
    <>
    <SEO title={`${product.fluidImg.title}`} description={product.description.description}/>
      <div className={`${className} grid-container`}>
        <div className="grid-top w-100">
          <AniLink fade to={closeTo || "/"} className="grid-close">X</AniLink>
        </div>
        <div className="grid-img"><Img fluid={product.fluidImg.fluid} title={product.fluidImg.title} alt={product.fluidImg.description}/></div>
      </div>
    </>
  )
}

export const query = graphql`
  query GetMccImage($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      description {
        description
      }
      fluidImg:imgRetail {
        id
        title
        description
        fluid(quality: 100){
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default styled(ProductImageTemplate)`
  background-color: var(--mainBlack);
  border: 4px solid var(--mainBlack);
  box-sizing: border-box;
  color: var(--mainWhite);
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 45px 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  width: 100%;

  & .grid-top{
    text-align: right;
    padding-top: 15px;
    padding-right: 15px;
  }
  & .w-100{
    text-align: right;
    max-height: 45px;
  }
  & .grid-close{
    background: var(--mainBlack);
    color: var(--mainWhite);
    font-size: 2.5em;
  }
  & .grid-close:hover{
    color: var(--poppy);
    cursor: pointer;
  }
  & .grid-img{
    max-height: 80vh;
  }
  & img {
    object-fit: contain !important;
    margin-top: 5px;
    max-height: 80vh;
  }
  & .grid-desc{
    font-size: 1.5em;
    letter-spacing: var(--mainSpacing);
    margin-top: 15px;
  }
`
