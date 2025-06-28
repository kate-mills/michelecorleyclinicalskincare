import React, { useState, useEffect } from 'react'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'

const Slideshow = ({ className, images = [], interval = 7000 }) => {
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
        alt={`Michele Corley and product highlight`}
      />
    </div>
  )
}

const StyledSlider = styled(Slideshow)`
  & {
    text-align: center;
    @media screen and (max-width: 427px) {
      display: none;
    }
  }
`

export default StyledSlider
