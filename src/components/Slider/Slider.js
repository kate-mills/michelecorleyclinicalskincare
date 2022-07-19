import React, { useState, useEffect } from 'react'
import Img from 'gatsby-image'
import styles from './slider.module.css'

export default function Slideshow({ images = [], interval = 3000 }) {
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
      load={'eager'}
      fluid={images[currentSlide].childImageSharp.fluid}
      alt={`Michele Corley product highlight`}
      className={styles.fade__in__out}
    />
  )
}
