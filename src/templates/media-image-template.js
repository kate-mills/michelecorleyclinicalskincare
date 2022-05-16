import React from 'react'
import SEO from '../components/FullSeo'
import ScreenReaderText from '../components/ScreenReaderText'

import styled from 'styled-components'
import Img from 'gatsby-image'

import { graphql } from 'gatsby'

const MediaImageTemplate = props => {
  const goBack = () => {
    window.history.go(-1)
  }
  const {
    data: { media },
    className,
  } = props

  const seoDescription = `Drag and drop your copy of Michele Corley Clinical Skincare image for social media titled ${media.name}.`
  return (
    <>
      <SEO
        title={`${media.name} - Social Media Image`}
        description={seoDescription}
        image={media.fluidImgs[0].fluid.src}
      />

     <ScreenReaderText element="h1" text={`${media.name}`}/>

      <div className={`${className} grid-container`}>
        <div
          className="grid-top w-100"
          role="button"
          tabIndex="0"
          onClick={goBack}
          onKeyPress={goBack}
        >
          X
        </div>
        <div className="grid-img">
          <Img
            fluid={media.fluidImgs[0].fluid}
            title={media.fluidImgs[0].title}
            alt={media.fluidImgs[0].description}
          />
        </div>
      </div>
    </>
  )
}

export const query = graphql`
  query GetMccMediaImage($slug: String) {
    media: contentfulMccMediaImg(slug: { eq: $slug }) {
      name
      fluidImgs: images {
        id
        title
        description
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`
export default styled(MediaImageTemplate)`
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

  & .grid-top {
    align-items: center;
    background: var(--mainWhite);
    color: rgb(187, 189, 191); /*grey*/
    cursor: pointer;
    display: flex;
    font-size: 2.5em;
    font-weight: 300;
    justify-content: flex-end;
    margin: 0;
    padding: 20px 40px;
  }
  & .grid-top:hover {
    color: var(--poppy);
    cursor: pointer;
  }
  & .grid-img {
    max-height: 90vh;
  }
  & .gatsby-image-wrapper {
    width: 100vw;
  }
  & img {
    object-fit: contain !important;
    margin-top: 5px;
    max-height: 80vh;
  }
  & .grid-desc {
    font-size: 1.5em;
    letter-spacing: var(--mainSpacing);
    margin-top: 15px;
  }
  @media (min-width: 320px) and (max-width: 480px) {
    & .grid-top {
      font-size: 1.5em;
    }
  }
`
