import React, { useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled, { keyframes } from 'styled-components'

const Slideshow = ({ className, images = [], interval = 5000 }) => {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const loop = setInterval(() => {
      currentSlide === images.length - 1
        ? setCurrentSlide(c => 0)
        : setCurrentSlide(c => c + 1)
    }, interval)

    return () => clearInterval(loop)
  }, [images, currentSlide, interval])

  return (
    <div className={className}>
      <GatsbyImage
        className={currentSlide < 1 ? 'visibleImg' : 'hiddenImg'}
        loading={currentSlide < 1 ? 'eager' : 'lazy'}
        image={images[currentSlide].childImageSharp.gatsbyImageData}
        layout="constrained"
        alt={`Michele Corley product highlight`}
      />
    </div>
  )
}

const fadeInAnimation = keyframes`
  0% {
    display: none;
    opacity: 0;
  }
  1% {
    display: block;
    opacity: 0;
  }
  100% {
    display: block;
    opacity: 1;
  }
`

const StyledSlider = styled(Slideshow)`
  border-radius: 0.625rem;
  max-width: 1000px;
  margin: 0 auto;
  border-radius: 0.625rem;

  & .visibleImg {
    animation: ${fadeInAnimation} 5ms linear;
    transition-timing-function: linear;
    border-radius: 0.625rem;
    background-color: var(--poppy);
    height: auto;
    margin: auto auto;
  }
  & .hiddenImg {
    animation: none;
    animation: ${fadeInAnimation} 5ms linear;
    transition-timing-function: linear;
    border-radius: 0.625rem;
    height: auto;
    margin: auto auto;
  }
  @media screen and (max-width: 480px) {
    & {
      display: none;
    }
  }
`

export default StyledSlider
