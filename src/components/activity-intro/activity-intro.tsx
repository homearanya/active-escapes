import React from 'react'
import UniversalLink from '../universal-link'

export interface ActivityIntroData {
  heading: string
  text: string[]
  inset: {
    bestSeason: string
    locations: string
    image?: {
      publicURL: string
    }
    icon?: string
  }
  link?: {
    href: string
    text: string
  }
}

interface ActiviyIntroProps {
  data: ActivityIntroData
  destination?: boolean
}

const ActivityIntro = ({
  data: { heading, text, inset, link },
  destination = false,
}: ActiviyIntroProps) => (
  <div className="activity-intro content-intro">
    <div className="container">
      <div className="row activity-intro__row">
        <div className="col-sm-8 col-md-9 text-holder">
          <h2 className="title-heading">{heading}</h2>
          {text.map((paragraph, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
          ))}
          {link && link.href && link.text && (
            <div className="btn-holder">
              <UniversalLink
                href={link.href}
                className="btn btn-info-sub btn-md btn-shadow radius"
              >
                {link.text}
              </UniversalLink>
            </div>
          )}
        </div>
        {inset && (
          <div className="col-sm-4 col-md-3 map-col">
            <div className="holder">
              {!destination && (
                <div className="map-holder">
                  {inset.image && (
                    <img
                      src={inset.image.publicURL}
                      alt={heading}
                      height="200"
                      width="200"
                    />
                  )}
                  {inset.icon && (
                    <span className="info icon">
                      <span className={inset.icon} />
                    </span>
                  )}
                </div>
              )}
              {(inset.bestSeason || inset.locations) && (
                <div className="info">
                  {inset.bestSeason && (
                    <div className="slot">
                      <strong>Best Season:</strong>{' '}
                      <span className="sub">{inset.bestSeason}</span>{' '}
                    </div>
                  )}
                  {inset.locations && (
                    <div className="slot">
                      <strong>Popular Locations:</strong>
                      <span className="sub">{inset.locations}</span>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
)

export default ActivityIntro
