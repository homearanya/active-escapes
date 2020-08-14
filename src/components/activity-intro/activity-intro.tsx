import React from 'react'

export interface ActivityIntroData {
  heading: string
  text: string[]
  bestSeason: string
  locations: string
  icon: {
    publicURL: string
  }
}

interface ActiviyIntroProps {
  data: ActivityIntroData
}

const ActivityIntro = ({
  data: { heading, text, bestSeason, locations, icon },
}: ActiviyIntroProps) => (
  <div className="content-intro">
    <div className="container">
      <div className="row">
        <div className="col-sm-8 col-md-9 text-holder">
          <h2 className="title-heading">{heading}</h2>
          {text.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
        </div>
        <div className="col-sm-4 col-md-3 map-col">
          <div className="holder">
            <div className="map-holder">
              <img
                src={icon.publicURL}
                alt={heading}
                height="300"
                width="200"
              />
            </div>
            <div className="info">
              <div className="slot">
                <strong>Best Season:</strong>{' '}
                <span className="sub">{bestSeason}</span>{' '}
              </div>
              <div className="slot">
                <strong>Popular Location:</strong>
                <span className="sub">{locations}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default ActivityIntro
