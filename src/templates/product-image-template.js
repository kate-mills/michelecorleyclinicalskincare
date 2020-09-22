import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

import AniLink from "gatsby-plugin-transition-link/AniLink";


const ProductTemplate = ({ data: { product } , className}) => {
  return (
    <Layout>
    <SEO title={`Retail size ${product.name}`} description={product.description.description}/>
      <div className={`${className} grid-container`}>
        <div className="grid-heading">
          <span className="grid-name txt-center">{product.name}</span>
          <AniLink fade to="/product-images-and-logos/" className="btn grid-close">x</AniLink>
        </div>
        <div className="grid-img">
            <Img fluid={product.fluidImg.fluid} title={product.fluidImg.title} alt={product.fluidImg.description} />
        </div>
        <div className="grid-desc">{product.fluidImg.description}</div>
      </div>
    </Layout>
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
      award
      awardImage{
        fixed(width:100, height: 100){
          ...GatsbyContentfulFixed
        }
      }
    }
  }
`
export default styled(ProductTemplate)`
  border: 4px solid var(--mainBlack);
  box-sizing: border-box;
  color: var(--mainWhite);
  display: grid;
  margin: 0 auto;
  text-align: center;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 50px;
  background-color: var(--mainBlack);
  width: 100%;

  & .grid-heading{
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  & .grid-name{
    font-size: 20px;
    width: 100%;
  }
  & .grid-close{
    font-size: 30px;
    color: var(--mainWhite);
    text-align: right;
    padding: 5px;
    background: var(--mainBlack);
    border: 0px solid var(--mainBlack);
    box-shadow: unset;
  }
  & .grid-close:hover{
    color: var(--poppy);
    background: var(--mainBlack);
    border: 0px solid var(--mainBlack);
    box-shadow: unset;
  }
  & .grid-img{
    box-shadow: var(--light-shadow);
  }
  & img{
    object-fit: cover !important;
  }
  @media (max-width: 400px){
  }
  @media (min-width: 401px) and (max-width: 800px){
  }
`

