import React from 'react'
import { graphql } from "gatsby"

import PageModel from '../components/PageModel'
import ImagelogoList from '../components/Imagelogo/ImagelogoList'

import styled from 'styled-components'

const ProductImagesLogos = (props) => {
  return (
    <PageModel title={`Product Images & Logos`}
      centeredTitle
      description={`The following resources are available for your use in representing Michele Corley Clinical Skin Care products.`}
    >
      <ProductsWrapper>
        <p className="txt-center">The following resources are available for your use in representing Michele Corley Clinical Skin Care products.</p>

        <h2 className="poppy heading-2">Cleansers</h2>
        <ImagelogoList data={props.data.cleansers}/>

        <h2 className="poppy">Toners</h2>
        <ImagelogoList data={props.data.toners}/>
        <h2 className="poppy">Moisturizers and SPF</h2>
        <ImagelogoList data={props.data.moisture}/>

        <h2 className="poppy">Eyes and Lips</h2>
        <ImagelogoList data={props.data.eyesLips}/>

        <h2 className="poppy">Serums and Specialty</h2>
        <ImagelogoList data={props.data.serums}/>

        <h2 className="poppy">Exfoliants</h2>
        <ImagelogoList data={props.data.exfoliants}/>

        <h2 className="poppy">Masks</h2>
        <ImagelogoList data={props.data.masks}/>

        <h2 className="poppy">Multi-Product Photos</h2>
        <h2 className="poppy">Logos</h2>
      </ProductsWrapper>
    </PageModel>
  )
}
export const query = graphql`
{
  cleansers: allContentfulMccProduct(filter: {category: {eq: "cleansers"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  toners: allContentfulMccProduct(filter: {category: {eq: "toners"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  moisture: allContentfulMccProduct(filter: {category: {eq: "moisturizers & spf"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  eyesLips: allContentfulMccProduct(filter: {category: {eq: "eyes & lips"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  serums: allContentfulMccProduct(filter: {category: {eq: "serums & specialty"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
  exfoliants: allContentfulMccProduct(filter: {category: {eq: "exfoliants"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
 masks: allContentfulMccProduct(filter: {category: {eq: "masks"}}, sort: {order: [ASC], fields: [name]}) {
    edges {
      node {
        contentful_id
        name
        slug
        imgRetail {
          id
          title
          description
          fluid{
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
}
`


const ProductsWrapper = styled.section`
  & h2.poppy{
    font-size: 2.6rem;
  }

  @media (max-width: 1024px){
    & h2.poppy{
      text-align: center !important;
      margin: 0 auto;
    }
  }
`
export default ProductImagesLogos
