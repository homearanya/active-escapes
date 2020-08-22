import React from 'react'
import Img from 'gatsby-image'

import { ImageSharp } from '../../types'

import { socialSharers } from '../../utils/helpers'

export interface TourBannerData {
  tourName: string
  featuredImage: ImageSharp
  shortDescription: string
  longDescription: string[]
  details: {
    heading: string
    description: string[]
  }[]
  emailSubject: string
  location: Location
  siteUrl: string
  emailAddress: string
}
interface TourBannerProps {
  data: TourBannerData
}
const TourBanner = ({
  data: {
    tourName,
    featuredImage,
    shortDescription,
    longDescription,
    details,
    emailSubject,
    location,
    siteUrl,
    emailAddress,
  },
}: TourBannerProps) => {
  const fullUrl = `${siteUrl}${location.pathname}`
  const { facebook, twitter, linkedin, pinterest } = socialSharers(
    fullUrl,
    tourName,
    shortDescription,
  )

  return (
    <section className="container-fluid trip-info">
      <div className="same-height two-columns row tour">
        <div className="col-md-6 image height">
          <div className="bg-stretch banner-tour-image">
            {featuredImage ? (
              <Img
                fluid={featuredImage.childImageSharp.fluid}
                alt={tourName}
                title={tourName}
              />
            ) : null}
          </div>
        </div>
        <div className="height col-md-6 text-col">
          <div className="holder">
            <h1 className="small-size mb-2">{tourName}</h1>
            <div className="description">
              {longDescription.map((paragraph, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: paragraph }} />
              ))}
            </div>
            <ul className="reviews-info">
              {details.map(({ heading, description }, i) => (
                <li key={i}>
                  <div className="info-left">
                    <strong className="title">{heading}</strong>
                    {description.map((paragraph, j) => (
                      <span
                        key={i}
                        dangerouslySetInnerHTML={{ __html: paragraph }}
                      />
                    ))}
                  </div>
                </li>
              ))}
            </ul>
            <div className="btn-holder">
              <a
                href={`mailto:${emailAddress}?subject=${emailSubject}`}
                className="btn btn-lg btn-info"
              >
                BOOK NOW
              </a>
            </div>
            <ul className="social-networks social-share">
              <li>
                <a
                  href={facebook}
                  target="_blank"
                  rel="noreferrer"
                  className="facebook"
                >
                  <span className="ico">
                    <span className="icon-facebook"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="twitter"
                >
                  <span className="ico">
                    <span className="icon-twitter"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="linkedin"
                >
                  <span className="ico">
                    <span className="icon-linkedin"></span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={pinterest}
                  target="_blank"
                  rel="noreferrer"
                  className="pin"
                >
                  <span className="ico">
                    <span className="icon-pin"></span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TourBanner
