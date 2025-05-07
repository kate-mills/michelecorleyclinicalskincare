import React from 'react'

import styled from 'styled-components'
import { graphql, navigate } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import { Seo } from '../components'

const LogoImageTemplate = props => {
  const {
    data: { logo },
    className,
    location: { state },
  } = props

  const goBack = () => navigate(-1)
  const goHome = () => navigate('/')

  return (
    <div className={`${className}`}>
      <div className={`top-bar`}>
        <div
          className="top-bar-goback"
          role="button"
          tabIndex="0"
          onClick={state?.id ? goBack : goHome}
          onKeyPress={state?.id ? goBack : goHome}
        >
          X
        </div>
      </div>

      <div className="flex-box-images">
        {logo.images[0] && (
          <div className="img-box">
            <a
              href={logo.images[0].localFile.publicURL}
              className="btn"
              download={`${logo.name}`}
            >
              {`Download Logo`}
            </a>
            <GatsbyImage
              className="img"
              image={logo.images[0].gatsbyImageData}
              alt="Michele Corley Logo"
            />
          </div>
        )}
      </div>
    </div>
  )
}

export const query = graphql`
  query GetMccMediaImage($slug: String) {
    logo: contentfulMccMediaImg(slug: { eq: $slug }) {
      name
      slug
      images {
        localFile {
          publicURL
        }
        gatsbyImageData
      }
    }
  }
`

export default styled(LogoImageTemplate)`
  & {
    background-color: var(--offWhite);
    min-height: calc(100vh + 200px);
    .top-bar {
      border-inline: 1px solid var(--mainMcc);
      text-align: right;
      width: 80%;
      &-goback {
        display: inline-block;
        padding: 1rem 1.5rem;
        font-size: 2.5rem;
        font-weight: 300;
        margin: 1px;
        &:hover {
          background: var(--mainWhite);
          cursor: pointer;
        }
      }
    }
    .top-bar,
    .flex-box-images {
      margin: 0 auto;
      width: 80%;
      div.img-box {
        background: var(--mainWhite);
        border-inline: 1px solid var(--offWhite);
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        & a.btn {
          background-color: rgb(250 251 255 / 80%);
          display: inline-block;
          min-width: fit-content;
          font-size: 0.8rem;
          position: relative;
          top: 2rem;
          max-width: fit-content;
          padding: 0.8rem 1rem;
          text-align: center;
          z-index: 100;
          &:hover {
            background-color: var(--mainWhite);
          }
        }
      }
    }
    @media (max-width: 800px) {
      .top-bar,
      .flex-box-images {
        width: 100%;
        div.img-box {
          border-block: 1px solid var(--offWhite);
          & a.btn {
            padding: 0.8rem 2rem;
          }
        }
      }
    }
  }
`

export const Head = ({ pageContext }) => {
  return <Seo title={pageContext.title} description={pageContext.description} image={pageContext.image} />
}
