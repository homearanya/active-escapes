import React, { useState } from 'react'
import DayBlock, { DayBlockData } from './day-block'

export interface TourItineraryData {
  itinerary: DayBlockData[]
}

interface TourItineraryProps {
  data: TourItineraryData
}

const TourItinerary = ({ data: { itinerary } }: TourItineraryProps) => {
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
        <article className="img-article article-light">
          <div className="img-wrap">
            <img
              src="img/generic/img-08.jpg"
              height="319"
              width="570"
              alt="image description"
            />
          </div>
          <div className="text-block">
            <h3>
              <a href="#">Member taking a short break</a>
            </h3>
            <p>Consider packing your bag with folloing daily essentials.</p>
          </div>
        </article>
        <article className="img-article article-light">
          <div className="img-wrap">
            <img
              src="img/generic/img-09.jpg"
              height="319"
              width="570"
              alt="image description"
            />
          </div>
          <div className="text-block">
            <h3>
              <a href="#">Couple enjoying the spectacular view</a>
            </h3>
            <p>Consider packing your bag with folloing daily essentials.</p>
          </div>
        </article>
      </div>
    </div>
  )
}

export default TourItinerary
