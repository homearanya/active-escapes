import React, { useState } from 'react'
import Img from 'gatsby-image'

import { ImageSharp } from '../../types'
import DayBlock, { DayBlockData } from './day-block'

export interface TourItineraryData {
  itinerary: DayBlockData[]
  images: {
    src: ImageSharp
    heading: string
    subHeading: string
  }[]
}

interface TourItineraryProps {
  data: TourItineraryData
}

const TourItinerary = ({ data: { itinerary, images } }: TourItineraryProps) => {
  const [activeTab, setActiveTab] = useState<number | null>(null)

  return (
    <div className="row">
      <div className="col-md-6">
        <ol className="detail-accordion">
          {itinerary.map(({ heading, subHeading, description }, i) => {
            const active = i === activeTab
            return (
              <li
                key={i}
                className={active ? 'active' : undefined}
                onClick={() =>
                  setActiveTab((prevActiveTab) =>
                    prevActiveTab === i ? null : i,
                  )
                }
              >
                <DayBlock
                  data={{ heading, subHeading, description }}
                  active={active}
                />
              </li>
            )
          })}
        </ol>
      </div>
      <div className="col-md-6">
        {images.map(({ src, heading, subHeading }, i) => (
          <article key={i} className="img-article article-light">
            <div className="img-wrap">
              <Img
                fluid={src.childImageSharp.fluid}
                fixed={src.childImageSharp.fixed}
                alt={heading}
              />
            </div>
            <div className="text-block">
              <h3>{heading}</h3>
              <p>{subHeading}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}

export default TourItinerary
