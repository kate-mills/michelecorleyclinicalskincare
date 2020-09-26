import React from 'react'
import SEO from '../components/seo'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import AniLink from "gatsby-plugin-transition-link/AniLink";

const ProductImageTemplate = props => {
  const { data: { product }, className, location } = props

  var closeTo = "/product-images-and-logos/"

  // so server doesnt fail build
  if (typeof window !== `undefined`) {

    // the extra window check eliminates image flash && coming from extenal url
    if(typeof window !== `undefined` && props.location.state === null){
      closeTo = `/product-images-and-logos/`
    }

    // coming from internal url
    else if (typeof window !== `undefined` && location) {
      closeTo = location.state.closeTo;
    }

    // catchall - also helps with image flash
    else {
      closeTo = "/product-images-and-logos"
    }
  }
  return (
    <>
    <SEO title={`${product.name} - Image`} description={product.description.description}/>
      <div className={`${className} grid-container`}>
        <div className="grid-top w-100">
          <AniLink fade to={closeTo} className="grid-close">X</AniLink>
        </div>
        <div className="grid-img"><Img fluid={product.fluidImg.fluid} title={product.fluidImg.title} alt={product.fluidImg.description}/></div>
      </div>
    </>
  )
}

export const query = graphql`
  query GetMccImage($slug: String) {
    product: contentfulMccProduct(slug: { eq: $slug }) {
      name
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
  background-color: var(--mainWhite);
  box-sizing: border-box;
  color: var(--mainWhite);
  display: grid;
  height: 100vh;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 100px 100%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  width: 100%;

  & .grid-top{
    display:flex;
    justify-content: flex-end;
    align-items: center;
  }
  & .grid-top .grid-close{
    background: var(--mainWhite);
    color: rgb(187, 189, 191); /*grey*/
    font-size: 2.5em;
    font-weight: 300;
    padding: 100px 35px;
  }
  & .grid-top .grid-close:hover{
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

  @media (min-width: 320px) and (max-width: 480px){
    & .grid-top .grid-close{
      font-size: 1.5em;
      padding: 50px 35px;
    }
  }
`
