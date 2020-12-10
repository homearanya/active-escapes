import React from 'react'

import { ImageSharp } from '../../types'
import Image from '../image'

export interface TourLodgingData {
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

const TourLodging = ({ data: { description, images } }: TourLodgingProps) => (
  <div className="row">
    <div className="col-md-6">
      {/* <strong className="header-box">{heading}</strong> */}
      <div className="detail">
        {description.map((paragraph, j) => (
          <p key={j} dangerouslySetInnerHTML={{ __html: paragraph }} />
        ))}
      </div>
    </div>
    <div className="col-md-6 accomodation-block">
      {images.map(({ src, heading, subHeading }, i) => (
        <div key={i} className="text-box">
          <div className="holder">
            {heading && <strong className="title">{heading}</strong>}
            {subHeading && <span className="sub-title">{subHeading}</span>}
            {src && (
              <div className="img-holder">
                <Image image={src} alt={heading} />
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default TourLodging
