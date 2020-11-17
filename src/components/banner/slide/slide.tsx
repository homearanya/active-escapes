import React from 'react'
import { Link } from 'gatsby'
import Img, { FluidObject } from 'gatsby-image'

export interface SlideProps {
  fluid: FluidObject
  alt: string
  animation: string
  heading1: string
  heading2: string
  icon: React.ReactElement
  button: {
    text: string
    link?: string
    handler?: () => void
  }
}

const Slide = ({
  fluid,
  alt,
  animation = 'animation1',
  heading1,
  heading2,
  icon,
  button,
}: SlideProps) => {
  return (
    <div className={`slide ${animation}`}>
      {icon}
      <Img
        className="slide-image"
        fluid={fluid}
        alt={alt}
        style={{ width: '100vw', height: '100vh' }}
      />
      <h3 className="slide-heading1">{heading1}</h3>
      <h2 className="slide-heading2">{heading2}</h2>
      <div className="button-wrapper">
        {button.link && (
          <Link to={button.link} className="btn btn-banner slide-button">
            {button.text}
          </Link>
        )}
        {button.handler && (
          <button
            onClick={button.handler}
            className="btn btn-banner slide-button"
          >
            {button.text}
          </button>
        )}
      </div>
    </div>
  )
}
export default Slide
