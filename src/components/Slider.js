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
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const StyledSlider = styled(Slideshow)`
  border-radius: 0.625rem;
  max-height: 600;
  text-align: center;

  & .gatsby-image-wrapper {
    animation: ${fadeInAnimation} 5ms linear;
    background-color: var(--poppy);
    border-radius: 0.625rem;
    transition-timing-function: linear;
  }
  @media screen and (max-width: 427px) {
    & {
      display: none;
    }
  }
`

export default StyledSlider
