import React from 'react'
import Img from 'gatsby-image'

import { ImageSharp } from '../../types'

export interface TourBannerData {
  tourName: string
  featuredImage: ImageSharp
  fromPricing: string
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
    fromPricing,
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
  const facebookSharer = encodeURI(
    `https://www.facebook.com/sharer.php?u=${fullUrl}&p[title]=${tourName}`,
  )
  const twitterSharer = encodeURI(
    `https://twitter.com/intent/tweet?url=${fullUrl}&text=${tourName}`,
  )
  const linkdedinSharer = encodeURI(
    `https://www.linkedin.com/shareArticle?mini=true&url=${fullUrl}&title=${tourName}&summary=${shortDescription}&source={}`,
  )
  const pinterestSharer = encodeURI(
    `http://pinterest.com/pin/create/button/?url=${fullUrl}&description=${tourName}`,
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
            <h1 className="small-size">{tourName}</h1>
            <div className="price">
              from <strong>{fromPricing}</strong>
            </div>
            <div className="description">
              {longDescription.map((paragraph, i) => (
                <p>{paragraph}</p>
              ))}
            </div>
            <ul className="reviews-info">
              {details.map(({ heading, description }, i) => (
                <li key={i}>
                  <div className="info-left">
                    <strong className="title">{heading}</strong>
                    {description.map((paragraph, j) => (
                      <span key={j} className="value">
                        {paragraph}
                      </span>
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
                <a href={facebookSharer} target="_blank" className="facebook">
                  <span className="ico">
                    <span className="icon-facebook"></span>
                  </span>
                  <span className="text">Share</span>
                </a>
              </li>
              <li>
                <a href={twitterSharer} target="_blank" className="twitter">
                  <span className="ico">
                    <span className="icon-twitter"></span>
                  </span>
                  <span className="text">Tweet</span>
                </a>
              </li>
              <li>
                <a href={linkdedinSharer} target="_blank" className="linkedin">
                  <span className="ico">
                    <span className="icon-linkedin"></span>
                  </span>
                  <span className="text">LinkdedIn</span>
                </a>
              </li>
              <li>
                <a href={pinterestSharer} target="_blank" className="pin">
                  <span className="ico">
                    <span className="icon-pin"></span>
                  </span>
                  <span className="text">Pin it</span>
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
