import React from 'react'

import styled from 'styled-components'
import { graphql } from 'gatsby'

const MediaImageTemplate = props => {
  const { data: { media }} = props
  console.log(props)
  return (
    <>
      {media?.name}
    </>
  )
}

export const query = graphql`
  query GetMccMediaImage($slug: String) {
    media: contentfulMccMediaImg(slug: { eq: $slug }) {
      name
      slug
      category
      images {
        gatsbyImageData
        localFile{ publicURL }
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
