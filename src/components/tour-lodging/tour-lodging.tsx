import React from 'react'
import { ImageSharp } from '../../types'
import Img from 'gatsby-image'

export interface TourLodgingData {
  heading: string
  description: string[]
  images: {
    src: ImageSharp
    heading: string
    subHeading: string
  }[]
}

interface TourLodgingProps {
  data: TourLodgingData
}

const TourLodging = ({
  data: { heading, description, images },
}: TourLodgingProps) => (
  <div className="row">
    <div className="col-md-6">
      <strong className="header-box">{heading}</strong>
      <div className="detail">
        {description.map((paragraph, j) => (
          <p key={j} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
    <div className="col-md-6 accomodation-block">
      {images.map(({ src, heading, subHeading }, i) => (
        <div className="text-box">
          <div className="holder">
            <strong className="title">{heading}</strong>
            <span className="sub-title">{subHeading}</span>
            <div className="img-holder">
              <Img
                fluid={src.childImageSharp.fluid}
                fixed={src.childImageSharp.fixed}
                alt={heading}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default TourLodging
