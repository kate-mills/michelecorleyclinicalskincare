import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import styles from './slider.module.css'

export default function Slideshow({ images = [], interval = 7500 }) {
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
    <Img
      loading={currentSlide < 1 ? 'eager': 'lazy'}
      fadeIn={currentSlide < 1 ? false: true}
      //fetchPriority={currentSlide < 2 ? 'high': 'low'}
      fluid={images[currentSlide].childImageSharp.fluid}
      alt={`Michele Corley product highlight`}
      className={currentSlide < 1 ? styles.slideZero: styles.opacity}
    />
  )
}
