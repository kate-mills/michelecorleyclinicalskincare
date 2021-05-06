import React from 'react'
import SEO from '../components/seo'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

const ProductImageTemplate = props => {
  const goBack = ()=>{ window.history.go(-1) }

  const { data: { product }, className } = props

  return (
    <>
    <SEO title={`${product.name} - Michele Corley`} description={`Michele Corley Clinical Skincare - ${product.name}`} image={product.fluidImg.fluid.src.slice(2)}/>
      <div className={`${className} grid-container`}>
        <div className="grid-top w-100" role="button"
          tabIndex="0"
          onClick={goBack}
          onKeyPress={goBack}>
          X
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
  min-height: 100vh;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 100px 80%;
  margin: 0 auto;
  overflow: hidden;
  text-align: center;
  width: 100%;
  & .grid-top{
    align-items: center;
    background: var(--mainWhite);
    color: rgb(187, 189, 191); /*grey*/
    cursor: pointer !important;
    display:flex;
    font-size: 2.5em;
    font-weight: 300;
    justify-content: flex-end;
    margin: 0;
    padding: 20px 40px;
    width: 100vw;
  }
  & .grid-top:hover{
    color: var(--poppy);
    cursor: pointer !important;
  }
  & .grid-img{
    max-height: 80vh;
  }
  & .gatsby-image-wrapper{
    width: 100vw;
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
    & .grid-top{
      font-size: 1.5em;
    }
  }
`
