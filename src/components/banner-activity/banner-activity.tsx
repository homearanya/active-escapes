import React from 'react'
import Img, { FluidObject } from 'gatsby-image'

import Breadcrumbs from '../breadcrumbs'

export interface BannerActivityData {
  heading: string
  subHeading: string
  breadcrumbs: Breadcrumbs
  heroImage?: FluidObject
}

interface BannerActivityProps {
  data: BannerActivityData
}

const BannerActivity = ({
  data: { heading, subHeading, heroImage, breadcrumbs },
}: BannerActivityProps) => (
  <section
    className="banner banner-inner parallax"
    data-stellar-background-ratio="0.5"
  >
    {heroImage ? (
      <div className="banner-image">
        <div className="has-overlay has-overlay-dark full-height">
          <Img fluid={heroImage} />
        </div>
      </div>
    ) : null}
    <div className="banner-text">
      <div className="center-text text-center">
        <div className="container">
          <h1>{heading}</h1>
          <strong className="subtitle">{subHeading}</strong>
          <Breadcrumbs breadcrumbs={breadcrumbs} />
        </div>
      </div>
    </div>
  </section>
)

export default BannerActivity
